import { listAll } from "firebase/storage";

export default async function listDirectory(
  folderRef,
  fileHandler,
  folderHandler
) {
  return listAll(folderRef).then((dir) => {
    dir.items.forEach((fileRef) => {
      fileHandler && fileHandler(fileRef.fullPath);
    });
    dir.prefixes.forEach((folderRef) => {
      listDirectory(folderRef, fileHandler, folderHandler);
      folderHandler && folderHandler(folderRef.fullPath);
    });
  });
}
