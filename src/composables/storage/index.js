import { ref, computed } from "vue";
import { getStorage, ref as fref, listAll } from "firebase/storage";

import { useFileManager } from "./parts/fileManager";
import { useDownload } from "./parts/download";
import { useDeletion } from "./parts/deletion";
import { useUpload } from "./parts/upload";
import { reAddToList } from "./parts/visualFunctions";

export function useStorage(user) {
  const fileList = ref([]);
  const currentPath = ref(`user/${user.uid}`);

  const storage = getStorage();
  const storageRef = fref(storage, currentPath.value);

  const sortedFileList = computed(() =>
    fileList.value.sort((a, b) => (a.name > b.name ? 1 : -1))
  );

  updateList(fileList, storageRef);

  const { openStorageFolder } = useFileManager(
    storage,
    fileList,
    updateList,
    currentPath
  );

  const { downloadFromStorage, getFileBlob } = useDownload(
    storage,
    currentPath
  );

  const { deleteFromStorage } = useDeletion(storage, fileList);

  const { uploadToStorage, createFolder } = useUpload(
    storage,
    fileList,
    currentPath
  );

  const renameStorageFile = (oldName, newName, fileType) => {
    const filePath = `${currentPath.value}/${oldName}`;

    getFileBlob(filePath)
      .then((blob) => new File([blob], newName))
      .then((file) => {
        deleteFromStorage(filePath, "document");
        uploadToStorage(file);
      })
      .catch((error) => {
        console.log(error);
      });

    reAddToList(fileList, filePath, newName, "document");
  };

  return {
    fileList,
    currentPath,
    sortedFileList,
    uploadToStorage,
    createFolder,
    openStorageFolder,
    downloadFromStorage,
    deleteFromStorage,
    renameStorageFile,
  };
}

function updateList(fileList, storageRef) {
  fileList.value = [];

  listAll(storageRef).then(({ items, prefixes }) => {
    items.forEach((item) => {
      if (item.name !== ".ghostfile") {
        fileList.value.push({
          name: item.name,
          path: item.fullPath,
          type: "document",
        });
      }
    });

    prefixes.forEach((prefix) => {
      fileList.value.push({
        name: prefix.name,
        path: prefix.fullPath,
        type: "folder",
      });
    });
  });
}
