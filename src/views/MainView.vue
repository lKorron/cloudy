<template>
  <AsyncPopup ref="popup">
    <FolderCreation @form-submitted="uploadFolder" />
  </AsyncPopup>

  <ContentPanel desktop>
    <template #header>Store files</template>
    <template #default>
      <div class="mb-5">Login as {{ username }}</div>
      <FileGrid :file-list="sortedFileList" @create-folder="popup.open()" />
      <input
        class="mb-10 hidden"
        type="file"
        name="file"
        id="fileElem"
        @change="uploadFile"
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
const { sortedFileList, uploadToStorage, createFolder } = useStorage();

const popup = ref(null);

const uploadFile = (evt) => {
  const file = evt.target.files[0];
  uploadToStorage(file);
};

const uploadFolder = (folderName) => {
  createFolder(folderName);
  popup.value.close();
};
</script>

<style lang="scss" scoped></style>
