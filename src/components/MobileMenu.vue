<template>
  <div class="bg-slate-100 pt-2 pb-2 mt-2 mb-2">
    <div class="w-5/6 mx-auto flex justify-between">
      <div
        class="h-[40px] w-[40px] hover:scale-105 transition-transform"
        @click="createFolder"
      >
        <img
          class="h-[40px] w-[40px]"
          src="../assets/add-folder.png"
          alt="add-folder"
        />
      </div>

      <div class="h-[40px] w-[40px] hover:scale-105 transition-transform">
        <img
          class="h-[40px] w-[40px]"
          src="../assets/upload.png"
          alt="upload"
          @click="uploadFile"
        />
      </div>
    </div>
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
