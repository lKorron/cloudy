<template>
  <FileGridContextMenu
    :is-active="isContextMenuActive"
    :boundaries-element="gridElement"
    :x-position="cursorXposition"
    :y-position="cursorYposition"
    @create-folder="createFolder"
  />
  <BroadCrump :item-list="['Микуся', 'Рисунки', 'Лето']" />
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
import { ref } from "vue";

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
});

const emit = defineEmits([
  "createFolder",
  "openFolder",
  "downloadFile",
  "deleteFile",
]);

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

const createFolder = () => {
  emit("createFolder");
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
