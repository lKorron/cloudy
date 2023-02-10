<template>
  <ContentPanel desktop>
    <template #header>Store files</template>
    <template #default>
      <div class="mb-5">Login as {{ username.value }}</div>
      <input
        class="mb-10"
        type="file"
        name="file"
        id="file"
        @change="onFileUploaded"
      />
      <button
        class="bg-blue-500 p-2 text-white hover:opacity-75"
        @click="showFiles"
      >
        Показать файлы
      </button>
    </template>
  </ContentPanel>
</template>

<script setup>
import ContentPanel from "@/components/ContentPanel.vue";
import router from "@/router";
import { reactive } from "vue";

import { getAuth } from "@firebase/auth";
import { getStorage, ref, uploadBytes, listAll } from "firebase/storage";

const auth = getAuth();
const username = reactive({ value: "" });

auth.onAuthStateChanged((user) => {
  if (!user) {
    router.replace({ name: "login" });
  } else username.value = auth.currentUser?.displayName;
});

const onFileUploaded = (evt) => {
  console.log(evt.target.files[0].name);
  const file = evt.target.files[0];
  uploadToStorage(file);
};

const uploadToStorage = (file) => {
  const storage = getStorage();
  const fileRef = ref(storage, file.name);

  uploadBytes(fileRef, file)
    .then((snapshot) => {
      console.log("file uploaded");
    })
    .catch((err) => console.log(err));
};

const showFiles = () => {
  const storage = getStorage();
  const listRef = ref(storage);

  listAll(listRef).then((res) =>
    res.items.forEach((item) => console.log(item.name))
  );
};
</script>

<style lang="scss" scoped></style>
