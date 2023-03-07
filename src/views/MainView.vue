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
        @delete-folder="deleteFolder"
        @open-folder="openFolder"
        @delete-document="deleteDocument"
        @download-file="downloadFile"
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
import { useStorage } from "@/composables/storage";
import { useAuth } from "@/composables/auth";
import AsyncPopup from "@/components/AsyncPopup.vue";
import FolderCreation from "@/components/FolderCreation.vue";

const { username } = useAuth();
const {
  sortedFileList,
  uploadToStorage,
  createFolder,
  deleteFileFromStorage,
  deleteFolderFromStorage,
  downloadFromStorage,
  openStorageFolder,
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

const deleteDocument = (filePath) => {
  deleteFileFromStorage(filePath);
};

const deleteFolder = (folderPath) => {
  deleteFolderFromStorage(folderPath);
};

const openFolder = (folderPath) => {
  openStorageFolder(folderPath);
};

const downloadFile = (fileName, filePath, fileType) => {
  downloadFromStorage(fileName, filePath, fileType);
};
</script>
