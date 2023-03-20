export function addToList(fileList, fileName, filePath, fileType) {
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

export function removeFromList(fileList, filePath, fileType) {
  fileList.value = fileList.value.filter((el) => {
    return el.path !== filePath || el.type !== fileType;
  });
}
