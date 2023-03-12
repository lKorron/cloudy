import { ref } from "firebase/storage";

export function useFileManager(storage, fileList, updateList, currentPath) {
  const openStorageFolder = (folderPath) => {
    currentPath.value = folderPath;

    const folderRef = ref(storage, folderPath);
    updateList(fileList, folderRef);
  };

  const changePath = (currentPath, newPath) => {
    currentPath.value = newPath;
  };

  return {
    openStorageFolder,
    changePath,
  };
}
