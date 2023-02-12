import { ref } from "vue";
import router from "@/router";
import { getAuth } from "@firebase/auth";
import {
  getStorage,
  ref as fref,
  uploadBytes,
  listAll,
} from "firebase/storage";

export function useAuth() {
  const auth = getAuth();
  const username = ref("");

  auth.onAuthStateChanged((user) => {
    if (!user) {
      router.replace({ name: "login" });
    } else username.value = auth.currentUser?.displayName;
  });

  return { username };
}

export function useStorage() {
  const fileList = ref([]);
  const fileNamesList = ref([]);

  const storage = getStorage();
  const storageRef = fref(storage);

  listAll(storageRef).then((res) =>
    res.items.forEach((item) => fileList.value.push(item))
  );

  listAll(storageRef).then((res) =>
    res.items.forEach((item) => fileNamesList.value.push(item.name))
  );

  const uploadToStorage = (file) => {
    const fileRef = fref(storage, file.name);

    uploadBytes(fileRef, file)
      .then((snapshot) => {
        console.log("file uploaded");
      })
      .catch((err) => console.log(err));
  };

  const showFiles = () => {
    listAll(storageRef).then((res) =>
      res.items.forEach((item) => console.log(item.name))
    );
  };

  return { fileList, fileNamesList, uploadToStorage, showFiles };
}
