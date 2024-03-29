import { ref } from "vue";
import { getStorage, ref as fref, listAll } from "firebase/storage";

import { useFileManager } from "./parts/fileManager";
import { useDownload } from "./parts/download";
import { useDeletion } from "./parts/deletion";
import { useUpload } from "./parts/upload";
import { useRenaming } from "./parts/renaming";
import listDirectory from "./parts/listDirectory";
import router from "@/router";
import { setPathsStorage, transformPath } from "@/modules/pathsStorage";

export function useStorage(user) {
  const fileList = ref([]);
  const currentPath = ref(`user/${user.uid}`);

  const storage = getStorage();
  const storageRef = fref(storage, currentPath.value);

  listDirectory(storageRef, null, (path) => {
    const prettyPath = transformPath(path, "/documents");

    router.loadSessionRoute(prettyPath);
    setPathsStorage(prettyPath);
  });

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

  const { renameStorageFile } = useRenaming(
    storage,
    fileList,
    currentPath,
    getFileBlob,
    deleteFromStorage,
    uploadToStorage
  );

  return {
    fileList,
    currentPath,
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
