import { ref, listAll, deleteObject } from "firebase/storage";
import { removeFromList } from "./visualFunctions";

export function useDeletion(storage, fileList) {
  const deleteFromStorage = (filePath, fileType) => {
    switch (fileType) {
      case "document":
        deleteFileFromStorage(filePath);
        break;
      case "folder":
        deleteFolderFromStorage(filePath);
        break;

      default:
        break;
    }
  };

  const deleteFileFromStorage = (filePath) => {
    const fileRef = ref(storage, filePath);

    deleteObject(fileRef)
      .then(() => {
        removeFromList(fileList, filePath, "document");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const deleteFolderFromStorage = (folderPath) => {
    const folderRef = ref(storage, folderPath);

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
        removeFromList(fileList, folderPath, "folder");
      })
      .catch((error) => console.log(error));
  };

  return { deleteFromStorage, deleteFolderFromStorage };
}
