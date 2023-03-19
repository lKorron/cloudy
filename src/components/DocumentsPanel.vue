<template>
  <AsyncPopup ref="creatingPopup">
    <InputForm @form-submitted="uploadFolder"> Enter folder name </InputForm>
  </AsyncPopup>

  <AsyncPopup ref="renamingPopup">
    <InputForm @form-submitted="uploadFolder"> Rename </InputForm>
  </AsyncPopup>

  <ContentPanel desktop>
    <template #header>Store files</template>
    <template #default>
      <div class="mb-5">Login as {{ props.user.displayName }}</div>
      <FileGrid
        :file-list="sortedFileList"
        :current-path="currentPath"
        @create-folder="creatingPopup.open()"
        @open-folder="openFolder"
        @rename-file="renameFile"
        @delete-file="deleteFile"
        @download-file="downloadFile"
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
import InputForm from "@/components/InputForm.vue";

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

const creatingPopup = ref(null);
const renamingPopup = ref(null);

const uploadFile = (evt) => {
  const file = evt.target.files[0];
  uploadToStorage(file);
};

const uploadFolder = (folderName) => {
  createFolder(folderName);
  creatingPopup.value.close();
};

const openFolder = (folderPath) => {
  openStorageFolder(folderPath);
};

const renameFile = (filePath, fileType) => {
  console.log("renaming", filePath, fileType);
  renamingPopup.value.open();
};

const deleteFile = (filePath, fileType) => {
  deleteFromStorage(filePath, fileType);
};
const downloadFile = (fileName, filePath, fileType) => {
  downloadFromStorage(fileName, filePath, fileType);
};

const changePath = (path) => {
  openStorageFolder(path);
};
</script>
