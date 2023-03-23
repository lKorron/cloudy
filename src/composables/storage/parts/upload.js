import { ref, uploadBytes, uploadString } from "firebase/storage";
import { addToList } from "./visualFunctions";

export function useUpload(storage, fileList, currentPath) {
  const uploadToStorage = (file, filePath, isUpdateVisual = true) => {
    if (!filePath) {
      filePath = `${currentPath.value}/${file.name}`;
    }

    const fileRef = ref(storage, filePath);

    uploadBytes(fileRef, file)
      .then(() => {
        isUpdateVisual && addToList(fileList, file.name, filePath, "document");
      })
      .catch((err) => console.error(err));
  };

  const createFolder = async (folderName) => {
    const directoryPath = `${currentPath.value}/${folderName}`;

    const directory = ref(storage, directoryPath);
    const ghostFile = ref(directory, ".ghostfile");

    try {
      await uploadString(ghostFile, "");
      addToList(fileList, folderName, directoryPath, "folder");
    } catch (error) {
      console.error(error);
    }
  };

  return { uploadToStorage, createFolder };
}
