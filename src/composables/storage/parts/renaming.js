import { reAddToList } from "./visualFunctions";

export function useRenaming(
  fileList,
  currentPath,
  getFileBlob,
  deleteFromStorage,
  uploadToStorage
) {
  const renameStorageFile = (oldName, newName, fileType) => {
    const filePath = `${currentPath.value}/${oldName}`;

    getFileBlob(filePath)
      .then((blob) => new File([blob], newName))
      .then((file) => {
        deleteFromStorage(filePath, fileType);
        uploadToStorage(file);
      })
      .catch((error) => {
        console.log(error);
      });

    reAddToList(fileList, filePath, newName, fileType);
  };

  return {
    renameStorageFile,
  };
}
