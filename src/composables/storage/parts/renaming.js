import { reAddToList } from "./visualFunctions";

export function useRenaming(
  fileList,
  currentPath,
  getFileBlob,
  deleteFromStorage,
  uploadToStorage
) {
  const renameStorageFile = (oldName, newName, fileType) => {
    const path = `${currentPath.value}/${oldName}`;

    switch (fileType) {
      case "document":
        renameDocument(path, newName);
        break;

      case "folder":
        break;
    }
  };

  const renameDocument = (path, name) => {
    getFileBlob(path)
      .then((blob) => new File([blob], name))
      .then((file) => {
        deleteFromStorage(path, "document");
        uploadToStorage(file);
      })
      .catch((error) => {
        console.log(error);
      });

    reAddToList(fileList, path, name, "document");
  };

  const renameFolder = () => {};

  return {
    renameStorageFile,
  };
}
