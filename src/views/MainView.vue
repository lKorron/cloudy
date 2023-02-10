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
    </template>
  </ContentPanel>
</template>

<script setup>
import ContentPanel from "@/components/ContentPanel.vue";
import router from "@/router";
import { reactive } from "vue";

import { getAuth } from "@firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";

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
</script>

<style lang="scss" scoped></style>
