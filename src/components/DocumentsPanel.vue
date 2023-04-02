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
    <RenameForm
      :placeholder="renamingPopupPlaceholder"
      :input-value="renamingFileName"
      :old-name="renamingFileName"
      :file-type="renamingFileType"
      @rename-submitted="renameFile"
      >{{ renamingPopupHeader }}</RenameForm
    >
  </AsyncPopup>

  <ContentPanel desktop>
    <template #default>
      <CurrentUser :user="props.user" />
      <h1 class="text-[25px] font-bold">Store files</h1>
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

      <MobileMenu
        v-if="isMobile()"
        @create-folder="creatingPopup.open()"
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
import RenameForm from "./RenameForm.vue";
import CurrentUser from "./CurrentUser.vue";
import MobileMenu from "./MobileMenu.vue";

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

const isMobile = () => {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
};

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
const renamingFileType = ref("document");

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
  renamingFileType.value = fileType;

  renamingPopup.value.open();
};

const renameFile = ({ oldName, newName, fileType }) => {
  renameStorageFile(oldName, newName, fileType);
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
