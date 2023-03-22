import { ref, listAll } from "firebase/storage";
import { reAddToList } from "./visualFunctions";

export function useRenaming(
  storage,
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
        renameFolder(path, newName);
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

  const renameFolder = (path, name) => {
    const oldName = path.split("/").at(-1);
    const folderIndex = path.split("/").length - 1;

    copyFolder(path);
  };

  const copyFolder = (path) => {
    const folderRef = ref(storage, path);
    listAll(folderRef)
      .then((dir) => {
        dir.items.forEach((fileRef) => {
          console.log(fileRef.fullPath);
        });

        dir.prefixes.forEach((folderRef) => {
          copyFolder(folderRef.fullPath);
        });
      })
      .catch((error) => console.log(error));
  };

  return {
    renameStorageFile,
  };
}

function renamePath(path, name, index) {
  const pathArray = path.split("/");

  pathArray[index] = name;

  return pathArray.join("/");
}
