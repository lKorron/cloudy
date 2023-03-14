import { ref, uploadBytes, uploadString } from "firebase/storage";

export function useUpload(storage, fileList, currentPath) {
  const uploadToStorage = (file) => {
    const filePath = `${currentPath.value}/${file.name}`;
    const fileRef = ref(storage, filePath);

    uploadBytes(fileRef, file)
      .then(() => {
        addToList(fileList, file.name, filePath, "document");
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

function addToList(fileList, fileName, filePath, fileType) {
  if (isContainsElement(fileList, fileName, fileType)) {
    fileList.value.push({ name: fileName, path: filePath, type: fileType });
  }
}

function isContainsElement(fileList, fileName, fileType) {
  return (
    fileList.value.filter((el) => {
      return el.name === fileName && el.type == fileType;
    }).length <= 0
  );
}
