<template>
  <div class="w-5/6 mx-auto flex justify-between">
    <BaseButton @click="createFolder"> Create folder </BaseButton>
    <BaseButton @click="uploadFile"> Upload file </BaseButton>
  </div>
</template>

<script setup>
import BaseButton from "./base/BaseButton.vue";

const emit = defineEmits(["createFolder", "UploadFile"]);

const createFolder = () => {
  emit("createFolder");
};

const uploadFile = () => {
  const fileElem = document.getElementById("fileElem");

  fileElem?.click();
};
</script>
