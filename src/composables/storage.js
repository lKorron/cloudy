import { ref, computed } from "vue";
import router from "@/router";
import { getAuth } from "@firebase/auth";
import {
  getStorage,
  getDownloadURL,
  ref as fref,
  uploadBytes,
  uploadString,
  deleteObject,
  getBlob,
  listAll,
} from "firebase/storage";
import { saveAs } from "file-saver";
import JSZip from "jszip";

export function useAuth() {
  const auth = getAuth();
  const username = ref("");

  auth.onAuthStateChanged((user) => {
    if (!user) {
      router.replace({ name: "login" });
    } else username.value = auth.currentUser?.displayName;
  });

  return { username };
}

export function useStorage() {
  const fileList = ref([]);

  const storage = getStorage();
  const storageRef = fref(storage);

  const sortedFileList = computed(() =>
    fileList.value.sort((a, b) => (a.name > b.name ? 1 : -1))
  );

  updateList(fileList, storageRef);

  const uploadToStorage = (file) => {
    const fileRef = fref(storage, file.name);

    uploadBytes(fileRef, file)
      .then(() => {
        addToList(fileList, file.name, "document");
      })
      .catch((err) => console.error(err));
  };

  const deleteFileFromStorage = (fileName) => {
    const fileRef = fref(storage, fileName);

    deleteObject(fileRef)
      .then(() => {
        removeFromList(fileList, fileName, "document");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const deleteFolderFromStorage = (folderName) => {
    const folderRef = fref(storage, folderName);

    listAll(folderRef)
      .then((dir) => {
        dir.items.forEach((fileRef) => {
          deleteFileFromStorage(fileRef.fullPath);
        });
        dir.prefixes.forEach((folderRef) => {
          deleteFolderFromStorage(folderRef.fullPath);
        });
      })
      .then(() => {
        removeFromList(fileList, folderName, "folder");
      })
      .catch((error) => console.log(error));
  };

  const createFolder = async (folderName) => {
    const directory = fref(storageRef, folderName);
    const ghostFile = fref(directory, ".ghostfile");

    try {
      await uploadString(ghostFile, "");
      addToList(fileList, folderName, "folder");
    } catch (error) {
      console.error(error);
    }
  };

  const downloadFromStorage = (fileName, fileType) => {
    switch (fileType) {
      case "document":
        downloadFile(fileName);
        break;
      case "folder":
        downloadFolderAsZip(fileName);
        break;

      default:
        break;
    }
  };

  const downloadFile = (fileName) => {
    const fileRef = fref(storage, fileName);
    getDownloadURL(fileRef).then((url) => {
      fetch(url, {
        mode: "no-cors",
      })
        .then((response) => response.blob())
        .then((blob) => {
          let blobUrl = window.URL.createObjectURL(blob);
          let a = document.createElement("a");
          a.download = fileName;
          a.href = blobUrl;
          document.body.appendChild(a);
          a.click();
          a.remove();
        });
    });
  };

  const downloadFolderAsZip = async (directoryPath = "") => {
    const zip = new JSZip();

    await addFilesFromDirectoryToZip(directoryPath, zip);

    if (Object.keys(zip.files).length > 0) {
      const blob = await zip.generateAsync({ type: "blob" });
      const name = directoryPath.split("/").pop();
      saveAs(blob, name);
    }
  };

  const addFilesFromDirectoryToZip = async (directoryPath = "", zip) => {
    const storage = getStorage();

    const directoryContentsRef = fref(storage, directoryPath);

    const directoryContents = await listAll(directoryContentsRef);

    for (const file of directoryContents.items) {
      if (file.name === ".ghostfile") {
        continue;
      }

      const fileRef = fref(storage, file.fullPath);
      const fileBlob = await getBlob(fileRef);
      zip.file(file.fullPath, fileBlob);
    }

    for (const folder of directoryContents.prefixes) {
      await addFilesFromDirectoryToZip(folder.fullPath, zip);
    }
  };

  return {
    fileList,
    sortedFileList,
    uploadToStorage,
    deleteFileFromStorage,
    deleteFolderFromStorage,
    createFolder,
    downloadFromStorage,
  };
}

function updateList(fileList, storageRef) {
  fileList.value = [];
  listAll(storageRef).then((res) =>
    res.items.forEach((item) =>
      fileList.value.push({ name: item.name, type: "document" })
    )
  );

  listAll(storageRef).then(({ prefixes }) => {
    prefixes.forEach((prefix) => {
      fileList.value.push({ name: prefix.name, type: "folder" });
    });
  });
}

function addToList(fileList, fileName, fileType) {
  if (isContainsElement(fileList, fileName, fileType)) {
    fileList.value.push({ name: fileName, type: fileType });
  }
}

function removeFromList(fileList, fileName, fileType) {
  fileList.value = fileList.value.filter((el) => {
    return el.name !== fileName || el.type !== fileType;
  });
}

function isContainsElement(fileList, fileName, fileType) {
  return (
    fileList.value.filter((el) => {
      return el.name === fileName && el.type == fileType;
    }).length <= 0
  );
}
