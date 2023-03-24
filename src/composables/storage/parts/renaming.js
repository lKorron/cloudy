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
    if (oldName === newName) {
      return;
    }

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
    const folderIndex = path.split("/").length - 1;

    copyFolder(path, name, folderIndex).finally(() => {
      deleteFromStorage(path, "folder");
    });
  };

  const copyFolder = (path, directoryName, index) => {
    const folderRef = ref(storage, path);
    reAddToList(fileList, path, directoryName, "folder");
    return listAll(folderRef)
      .then((dir) => {
        dir.items.forEach((fileRef) => {
          getFileBlob(fileRef.fullPath)
            .then((blob) => new File([blob], fileRef.name))
            .then((file) => {
              const uploadingPath = renamePath(
                fileRef.fullPath,
                directoryName,
                index
              );
              uploadToStorage(file, uploadingPath, false);
            });
        });

        dir.prefixes.forEach((folderRef) => {
          copyFolder(folderRef.fullPath, directoryName, index);
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
