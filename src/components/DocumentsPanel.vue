<template>
  <AsyncPopup ref="creatingPopup">
    <InputForm
      :placeholder="'New folder'"
      @form-submitted="uploadFolder"
    >
      Enter folder name
    </InputForm>
  </AsyncPopup>

  <AsyncPopup ref="renamingPopup">
    <InputForm
      :placeholder="renamingPopupPlaceholder"
      :input-value="renamingFileName"
      @form-submitted="renameFile"
    >
      {{ renamingPopupHeader }}
    </InputForm>
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
        @rename-file="openRenaming"
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
  renameStorageFile,
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

const renamingPopupHeader = ref("");
const renamingPopupPlaceholder = ref("");
const renamingFileName = ref("");

const openRenaming = (filePath, fileType) => {
  const name = filePath.split("/").at(-1);

  renamingPopupHeader.value = `Rename ${name}`;

  switch (fileType) {
    case "document":
      renamingPopupPlaceholder.value = "New file name";
      break;
    case "folder":
      renamingPopupPlaceholder.value = "New folder name";
      break;
  }

  renamingFileName.value = name;

  renamingPopup.value.open();
};

const renameFile = (fileName) => {
  renameStorageFile(renamingFileName.value, fileName);
  renamingPopup.value.close();
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