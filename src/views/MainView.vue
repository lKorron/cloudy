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
    </template>
  </ContentPanel>
</template>

<script setup>
import ContentPanel from "@/components/ContentPanel.vue";
import FileGrid from "./FileGrid.vue";

import { useStorage, useAuth } from "@/composables/storage";

const { username } = useAuth();
const { fileNamesList, uploadToStorage } = useStorage();

const onFileUploaded = (evt) => {
  console.log(evt.target.files[0].name);
  const file = evt.target.files[0];
  uploadToStorage(file);
};
</script>

<style lang="scss" scoped></style>
