<template>
  <ContextMenu
    :boundaries-element="gridElement"
    :active="isContextMenuActive"
    :x-position="cursorXposition"
    :y-position="cursorYposition"
  ></ContextMenu>
  <div
    ref="gridElement"
    @contextmenu.capture.prevent
    @click.left="onLeftClick"
    @click.right="onRightClick"
    @click.self="onClickSelf"
    v-click-outside="onClickOutside"
    class="grid grid-cols-2 gap-2 p-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
  >
    <FileCell
      :selected="isChosen(name)"
      @cell-clicked="onClick"
      v-for="name in fileList"
      :key="name"
      >{{ name }}</FileCell
    >
  </div>
</template>

<script setup>
import ContextMenu from "./ContextMenu.vue";
import FileCell from "./FileCell.vue";
import { defineProps, ref, onMounted, onUnmounted } from "vue";

onMounted(() => {
  document.addEventListener("contextmenu", onContextMenuOutside);
});

onUnmounted(() => {
  document.removeEventListener("contextmenu", onContextMenuOutside);
});

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

const isChosen = (name) => name === chosenCellName.value;

const onClick = (name) => {
  chosenCellName.value = name;
};

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

const onContextMenuOutside = (evt) => {
  const inside = evt.target.closest(".grid");

  if (!inside) {
    isContextMenuActive.value = false;
  }
};
</script>
