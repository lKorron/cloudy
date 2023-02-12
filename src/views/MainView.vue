<template>
  <ContentPanel desktop>
    <template #header>Store files</template>
    <template #default>
      <div class="mb-5">Login as {{ username }}</div>
      <FileGrid :file-list="fileNamesList"></FileGrid>
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
import FileGrid from "./FileGrid.vue";

import { useStorage, useAuth } from "@/composables/storage";

const { username } = useAuth();
const { fileNamesList, uploadToStorage, showFiles } = useStorage();

const onFileUploaded = (evt) => {
  console.log(evt.target.files[0].name);
  const file = evt.target.files[0];
  uploadToStorage(file);
};
</script>

<style lang="scss" scoped></style>
