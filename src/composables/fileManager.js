import { listAll, ref } from "firebase/storage";

export default function useFileManager(storage) {
  const openFolder = async (folderPath) => {
    const folderRef = ref(storage, folderPath);
    const list = await listAll(folderRef);

    let resultingList = [];

    list.items.forEach((item) => {});

    console.log(list);
  };

  return {
    openFolder,
  };
}
