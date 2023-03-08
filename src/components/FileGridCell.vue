<template>
  <div
    v-click-outside="clickOutsideConfig"
    class="flex flex-col-reverse max-w-sm border-solid border-2 border-white rounded hover:bg-gray-100 hover:border-gray-100 justify-end"
    :class="{
      'bg-gray-100 border-gray-100 hover:bg-gray-200 hover:border-gray-200':
        selected,
    }"
    @click="click"
    @click.right="clickRight"
    @dblclick="dblClick"
  >
    <CellContextMenu
      :is-active="isContextMenuActive"
      :boundaries-element="boundariesElement"
      :x-position="cursorXposition"
      :y-position="cursorYposition"
      @delete-file="deleteFile"
      @download-file="downloadFile"
    />
    <h1 class="last break-words mt-2">{{ props.name }}</h1>
    <div class="h-[80px] w-[80px] my-0 mx-auto mt-2">
      <img
        v-if="type === 'document'"
        class="h-[80px]"
        src="../assets/docs.png"
        alt="document"
      />
      <img
        v-else-if="type === 'folder'"
        src="../assets/yellow-folder.png"
        alt="folder"
        class="h-[80px] w-[80px] my-0 mx-auto mt-2"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";
import CellContextMenu from "./CellContextMenu.vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  selected: {
    type: Boolean,
    required: false,
  },
  type: {
    type: String,
    default: "document",
  },
  boundariesElement: {
    type: Object,
    default: () => {},
    required: false,
  },
});

const emit = defineEmits([
  "cellClicked",
  "clickedOutside",
  "deleteFile",
  "downloadFile",
  "openFolder",
]);

const isContextMenuActive = ref(false);
const cursorXposition = ref(0);
const cursorYposition = ref(0);

const click = () => {
  isContextMenuActive.value = false;

  emit("cellClicked", props.name);
};

const clickRight = (evt) => {
  isContextMenuActive.value = true;

  cursorXposition.value = evt.clientX;
  cursorYposition.value = evt.clientY;
  emit("cellClicked", props.name);
};

const dblClick = () => {
  if (props.type === "folder") {
    emit("openFolder", props.path);
  }
};

const deleteFile = () => {
  emit("deleteFile", props.path, props.type);
};

const downloadFile = () => {
  emit("downloadFile", props.name, props.path, props.type);
};

const clickOutside = () => {
  isContextMenuActive.value = false;
};

const clickOutsideConfig = {
  handler: clickOutside,
  events: ["dblclick", "click", "contextmenu"],
};
</script>
