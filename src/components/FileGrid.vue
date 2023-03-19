<template>
  <FileGridContextMenu
    :is-active="isContextMenuActive"
    :boundaries-element="gridElement"
    :x-position="cursorXposition"
    :y-position="cursorYposition"
    @create-folder="createFolder"
  />
  <BroadCrump
    :item-list="shortPathList"
    :base-item="'documents'"
    @item-clicked="onBroadClick"
  />

  <div
    ref="gridElement"
    v-click-outside="clickOutsideConfig"
    class="grid grid-cols-2 gap-2 p-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
    @contextmenu.capture.prevent
    @click.left="onLeftClick"
    @click.self.right="onRightClick"
    @click.self="onClickSelf"
  >
    <FileGridCell
      v-for="{ name, path, type } in fileList"
      :key="path"
      :name="name"
      :path="path"
      :boundaries-element="gridElement"
      :selected="isChosen(name)"
      :type="type"
      @cell-clicked="onClick"
      @rename-file="renameFile"
      @delete-file="deleteFile"
      @download-file="downloadFile"
      @open-folder="openFolder"
      >{{ name }}</FileGridCell
    >
  </div>
</template>

<script setup>
import FileGridContextMenu from "./FileGridContextMenu.vue";
import FileGridCell from "./FileGridCell.vue";
import BroadCrump from "./BroadCrump.vue";
import { ref, computed } from "vue";

const gridElement = ref(null);
const isContextMenuActive = ref(false);
const cursorXposition = ref(0);
const cursorYposition = ref(0);
const chosenCellName = ref(null);

const props = defineProps({
  fileList: {
    type: Array,
    required: true,
  },
  currentPath: {
    type: String,
    default: () => "",
  },
});

const emit = defineEmits([
  "createFolder",
  "openFolder",
  "renameFile",
  "downloadFile",
  "deleteFile",
  "broadClick",
]);

const pathList = computed(() => props.currentPath.split("/"));

const shortPathList = computed(() => {
  const techItemsNumber = 2;
  return pathList.value.slice(techItemsNumber);
});

const isChosen = (name) => name === chosenCellName.value;

const onClickOutside = () => {
  chosenCellName.value = null;
  isContextMenuActive.value = false;
};

const onClickSelf = () => {
  chosenCellName.value = null;
};

const onLeftClick = () => {
  isContextMenuActive.value = false;
};

const onRightClick = (evt) => {
  isContextMenuActive.value = true;

  cursorXposition.value = evt.clientX;
  cursorYposition.value = evt.clientY;
};

const onClick = (name) => {
  chosenCellName.value = name;
  isContextMenuActive.value = false;
};

const onBroadClick = (path) => {
  const basePathArray = [...pathList.value].splice(0, 2);
  const pathArray = [...basePathArray, ...path.split("/")];
  const pathString = pathArray.join("/");

  emit("broadClick", pathString);
};

const createFolder = () => {
  emit("createFolder");
};

const renameFile = (filePath, fileType) => {
  emit("renameFile", filePath, fileType);
};

const deleteFile = (filePath, fileType) => {
  emit("deleteFile", filePath, fileType);
};

const downloadFile = (fileName, filePath, fileType) => {
  emit("downloadFile", fileName, filePath, fileType);
};

const openFolder = (folderPath) => {
  emit("openFolder", folderPath);
};

const clickOutsideConfig = {
  handler: onClickOutside,
  events: ["dblclick", "click", "contextmenu"],
};
</script>
