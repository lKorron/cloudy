import { ref, computed } from "vue";
import {
  getStorage,
  ref as fref,
  uploadBytes,
  uploadString,
  listAll,
} from "firebase/storage";

import { useFileManager } from "./fileManager";
import { useDownload } from "./download";
import { useDeletion } from "./deletion";

export function useStorage() {
  const fileList = ref([]);
  const currentPath = ref("");

  const storage = getStorage();
  const storageRef = fref(storage);

  const sortedFileList = computed(() =>
    fileList.value.sort((a, b) => (a.name > b.name ? 1 : -1))
  );

  updateList(fileList, storageRef);

  const uploadToStorage = (file) => {
    const filePath = `${currentPath.value}/${file.name}`;
    const fileRef = fref(storage, filePath);

    uploadBytes(fileRef, file)
      .then(() => {
        addToList(fileList, file.name, filePath, "document");
      })
      .catch((err) => console.error(err));
  };

  const createFolder = async (folderName) => {
    const directoryPath = `${currentPath.value}/${folderName}`;

    const directory = fref(storageRef, directoryPath);
    const ghostFile = fref(directory, ".ghostfile");

    try {
      await uploadString(ghostFile, "");
      addToList(fileList, folderName, directoryPath, "folder");
    } catch (error) {
      console.error(error);
    }
  };

  const { openStorageFolder } = useFileManager(
    storage,
    fileList,
    updateList,
    currentPath
  );

  const { downloadFromStorage } = useDownload(storage, currentPath);

  const { deleteFileFromStorage, deleteFolderFromStorage } = useDeletion(
    storage,
    fileList
  );

  return {
    fileList,
    sortedFileList,
    uploadToStorage,
    deleteFileFromStorage,
    deleteFolderFromStorage,
    createFolder,
    openStorageFolder,
    downloadFromStorage,
  };
}

function updateList(fileList, storageRef) {
  fileList.value = [];
  listAll(storageRef).then((res) =>
    res.items.forEach((item) => {
      if (item.name !== ".ghostfile") {
        fileList.value.push({
          name: item.name,
          path: item.fullPath,
          type: "document",
        });
      }
    })
  );

  listAll(storageRef).then(({ prefixes }) => {
    prefixes.forEach((prefix) => {
      fileList.value.push({
        name: prefix.name,
        path: prefix.fullPath,
        type: "folder",
      });
    });
  });
}

function addToList(fileList, fileName, filePath, fileType) {
  if (isContainsElement(fileList, fileName, fileType)) {
    fileList.value.push({ name: fileName, path: filePath, type: fileType });
  }
}

function isContainsElement(fileList, fileName, fileType) {
  return (
    fileList.value.filter((el) => {
      return el.name === fileName && el.type == fileType;
    }).length <= 0
  );
}
