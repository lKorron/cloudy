import { ref, getDownloadURL, listAll, getBlob } from "firebase/storage";
import { saveAs } from "file-saver";
import JSZip from "jszip";

export function useDownload(storage, currentPath) {
  const downloadFromStorage = (fileName, filePath, fileType) => {
    switch (fileType) {
      case "document":
        downloadFile(fileName, filePath);
        break;
      case "folder":
        downloadFolderAsZip(filePath);
        break;

      default:
        break;
    }
  };

  const downloadFile = (fileName, filePath) => {
    const fileRef = ref(storage, filePath);
    getDownloadURL(fileRef).then((url) => {
      fetch(url)
        .then((response) => response.blob())
        .then((blob) => {
          saveAs(blob, fileName);
        });
    });
  };

  const downloadFolderAsZip = async (directoryPath = "") => {
    const zip = new JSZip();

    await addFilesFromDirectoryToZip(directoryPath, zip);

    if (Object.keys(zip.files).length > 0) {
      const blob = await zip.generateAsync({ type: "blob" });
      const name = directoryPath.split("/").pop();

      saveAs(blob, name);
    }
  };

  const addFilesFromDirectoryToZip = async (directoryPath = "", zip) => {
    const directoryContentsRef = ref(storage, directoryPath);

    const directoryContents = await listAll(directoryContentsRef);

    for (const file of directoryContents.items) {
      if (file.name === ".ghostfile") {
        continue;
      }

      const fileRef = ref(storage, file.fullPath);
      const fileBlob = await getBlob(fileRef);

      zip.file(generatePath(file.fullPath, currentPath.value), fileBlob);
    }

    for (const folder of directoryContents.prefixes) {
      await addFilesFromDirectoryToZip(folder.fullPath, zip);
    }
  };

  return {
    downloadFromStorage,
  };
}

function generatePath(path, initialPath) {
  let shiftCount = 0;
  const initialPathArray = initialPath.split("/");

  if (initialPath !== "") {
    shiftCount = initialPathArray.length;
  }

  const pathArray = path.split("/");
  const resultingArray = pathArray.splice(shiftCount);

  const resultingPath = resultingArray.join("/");

  return resultingPath;
}
