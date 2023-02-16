<template>
  <AsyncPopup ref="popup"><FolderCreation></FolderCreation> </AsyncPopup>
  <ContentPanel desktop>
    <template #header>Store files</template>
    <template #default>
      <div class="mb-5">Login as {{ username }}</div>
      <FileGrid
        :file-list="fileNamesList"
        @create-folder="popup.open()"
      ></FileGrid>
      <input
        class="mb-10 hidden"
        type="file"
        name="file"
        id="fileElem"
        @change="onFileUploaded"
      />
    </template>
  </ContentPanel>
</template>

<script setup>
import ContentPanel from "@/components/ContentPanel.vue";
import FileGrid from "../components/FileGrid.vue";

import { ref } from "vue";
import { useStorage, useAuth } from "@/composables/storage";
import AsyncPopup from "@/components/AsyncPopup.vue";
import FolderCreation from "@/components/FolderCreation.vue";

const { username } = useAuth();
const { fileNamesList, uploadToStorage } = useStorage();

const popup = ref(null);

const onFileUploaded = (evt) => {
  console.log(evt.target.files[0].name);
  const file = evt.target.files[0];
  uploadToStorage(file);
};
</script>

<style lang="scss" scoped></style>
