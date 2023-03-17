<template>
  <AsyncPopup ref="popup">
    <FolderCreation @form-submitted="uploadFolder" />
  </AsyncPopup>

  <ContentPanel desktop>
    <template #header>Store files</template>
    <template #default>
      <div class="mb-5">Login as {{ props.user.displayName }}</div>
      <FileGrid
        :file-list="sortedFileList"
        :current-path="currentPath"
        @create-folder="popup.open()"
        @open-folder="openFolder"
        @download-file="downloadFile"
        @delete-file="deleteFile"
        @broad-click="changePath"
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
import FileGrid from "./FileGrid.vue";

import { ref } from "vue";
import { useStorage } from "@/composables/storage";
import AsyncPopup from "@/components/AsyncPopup.vue";
import FolderCreation from "@/components/FolderCreation.vue";

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

const {
  sortedFileList,
  currentPath,
  uploadToStorage,
  createFolder,
  downloadFromStorage,
  deleteFromStorage,
  openStorageFolder,
} = useStorage(props.user);

const popup = ref(null);

const uploadFile = (evt) => {
  const file = evt.target.files[0];
  uploadToStorage(file);
};

const uploadFolder = (folderName) => {
  createFolder(folderName);
  popup.value.close();
};

const openFolder = (folderPath) => {
  openStorageFolder(folderPath);
};

const downloadFile = (fileName, filePath, fileType) => {
  downloadFromStorage(fileName, filePath, fileType);
};

const deleteFile = (filePath, fileType) => {
  deleteFromStorage(filePath, fileType);
};

const changePath = (path) => {
  openStorageFolder(path);
};
</script>
