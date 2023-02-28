<template>
  <AsyncPopup ref="popup">
    <FolderCreation @form-submitted="uploadFolder" />
  </AsyncPopup>

  <ContentPanel desktop>
    <template #header>Store files</template>
    <template #default>
      <div class="mb-5">Login as {{ username }}</div>
      <FileGrid
        :file-list="sortedFileList"
        @create-folder="popup.open()"
        @delete-document="deleteDocument"
        @delete-folder="deleteFolder"
      />
      <input
        id="fileElem"
        class="mb-10 hidden"
        type="file"
        name="file"
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
const {
  sortedFileList,
  uploadToStorage,
  createFolder,
  deleteFileFromStorage,
  deleteFolderFromStorage,
} = useStorage();

const popup = ref(null);

const uploadFile = (evt) => {
  const file = evt.target.files[0];
  uploadToStorage(file);
};

const uploadFolder = (folderName) => {
  createFolder(folderName);
  popup.value.close();
};

const deleteDocument = (fileName) => {
  deleteFileFromStorage(fileName);
};

const deleteFolder = (folderName) => {
  deleteFolderFromStorage(folderName);
};
</script>
