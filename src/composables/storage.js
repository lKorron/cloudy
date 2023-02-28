import { ref, computed } from "vue";
import router from "@/router";
import { getAuth } from "@firebase/auth";
import {
  getStorage,
  ref as fref,
  uploadBytes,
  uploadString,
  deleteObject,
  listAll,
} from "firebase/storage";

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
      .then((snapshot) => {
        updateList(fileList, storageRef);
        console.log("file uploaded");
      })
      .catch((err) => console.error(err));
  };

  const deleteFromStorage = (fileName) => {
    const fileRef = fref(storage, fileName);

    deleteObject(fileRef)
      .then(() => {
        console.log("file deleted");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const createFolder = async (folderName) => {
    const directory = fref(storageRef, folderName);
    const ghostFile = fref(directory, ".ghostfile");

    try {
      await uploadString(ghostFile, "");
      updateList(fileList, storageRef);
    } catch (error) {
      console.error(error);
    }
  };

  return { fileList, sortedFileList, uploadToStorage, createFolder };
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
