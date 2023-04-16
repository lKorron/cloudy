import { listAll } from "firebase/storage";

export default async function listDirectory(
  folderRef,
  fileHandler,
  folderHandler
) {
  listAll(folderRef).then((dir) => {
    dir.items.forEach((fileRef) => {
      fileHandler && fileHandler(fileRef.fullPath);
    });

    dir.prefixes.forEach((folderRef) => {
      folderHandler && folderHandler(folderRef.fullPath);
      listDirectory(folderRef, fileHandler, folderHandler);
    });
  });
}

export async function listDirectoryOrdered(
  folderRef,
  fileHandler,
  folderHandler
) {
  const directoty = await listAll(folderRef);

  for (const fileRef of directoty.items) {
    fileHandler && fileHandler(fileRef.fullPath);
  }

  for (const folderRef of directoty.prefixes) {
    folderHandler && folderHandler(folderRef.fullPath);
    await listDirectoryOrdered(folderRef, fileHandler, folderHandler);
  }
}
