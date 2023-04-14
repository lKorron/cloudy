<template>
  <div>
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

    <ContentPanel
      desktop
      class="mb-5"
    >
      <template #default>
        <CurrentUser :user="props.user" />
        <MobileMenu
          v-if="isMobile()"
          @create-folder="creatingPopup.open()"
        />
        <h1 class="text-[25px] font-bold">Store files</h1>
        <div class="flex justify-between w-[88%] mx-auto">
          <BroadCrump
            class="self-center"
            :item-list="shortPathList"
            :base-item="'documents'"
            @item-clicked="onBroadClick"
          />

          <div class="flex">
            <div class="w-[25px]">
              <img
                class="w-[25px]"
                src="@/assets/sort.png"
                alt="sort"
              />
            </div>

            <select class="outline-none">
              <option value="By name">By name</option>
              <option value="By name">By date</option>
            </select>
          </div>
        </div>

        <FileGrid
          :file-list="sortedFileList"
          :current-path="currentPath"
          :with-empty-cell="!isMobile()"
          @create-folder="creatingPopup.open()"
          @open-folder="openFolder"
          @rename-file="openRenaming"
          @delete-file="deleteFile"
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
  </div>
</template>

<script setup>
import ContentPanel from "@/components/ContentPanel.vue";
import FileGrid from "./FileGrid.vue";

import { ref, computed, onMounted, watch } from "vue";
import router from "@/router";
import { useStorage } from "@/composables/storage";
import AsyncPopup from "@/components/AsyncPopup.vue";
import InputForm from "@/components/InputForm.vue";
import RenameForm from "./RenameForm.vue";
import CurrentUser from "./CurrentUser.vue";
import MobileMenu from "./MobileMenu.vue";
import BroadCrump from "./BroadCrump.vue";
import isMobile from "@/modules/isMobile";
import { setPathsStorage, getPathsArray } from "@/modules/pathsStorage";

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

onMounted(() => {
  const prettyPath = router.currentRoute.value.fullPath;
  const realPath = transformPath(prettyPath, basePath.value);

  openStorageFolder(decodeURI(realPath));
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

const pathList = computed(() => currentPath.value.split("/"));

const shortPathList = computed(() => {
  const techItemsNumber = 2;
  return pathList.value.slice(techItemsNumber);
});

const basePath = computed(() =>
  currentPath.value.split("/").slice(0, 2).join("/")
);

watch(router.currentRoute, (route) => {
  const prettyPath = decodeURI(route.fullPath);

  const realPath = transformPath(prettyPath, basePath.value);

  openStorageFolder(realPath);
});

const onBroadClick = (path) => {
  let pathString;
  const basePathArray = [...pathList.value].splice(0, 2);

  if (path) {
    const pathArray = [...basePathArray, ...path.split("/")];
    pathString = pathArray.join("/");
  } else {
    pathString = basePathArray.join("/");
  }

  changePath(pathString);
};

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
  onPathChanged(folderPath);
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
  onPathChanged(path);
};

const onPathChanged = (path) => {
  const resultingPath = transformPath(path, "/documents");

  if (
    !!(getPathsArray() && getPathsArray()?.includes(resultingPath)) === false
  ) {
    addRoute(resultingPath);
    setPathsStorage(resultingPath);
  }

  router.push({ name: resultingPath });
};

const addRoute = (prettyPath) => {
  router.addRoute({
    path: prettyPath,
    name: prettyPath,
    component: () => import("@/views/DocumentsView.vue"),
  });
};

const transformPath = (path, basePath) => {
  const shortPath = path.split("/").slice(2).join("/");

  let slash = "/";
  !shortPath && (slash = "");

  const resultingPath = basePath + slash + shortPath;

  return resultingPath;
};
</script>
