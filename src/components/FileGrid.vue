<template>
  <FileGridContextMenu
    :is-active="isContextMenuActive"
    :boundaries-element="gridElement"
    :x-position="cursorXposition"
    :y-position="cursorYposition"
    @create-folder="createFolder"
  />
  <div
    ref="gridElement"
    v-click-outside="onClickOutside"
    class="grid grid-cols-2 gap-2 p-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
    @contextmenu.capture.prevent
    @click.left="onLeftClick"
    @click.right="onRightClick"
    @click.self="onClickSelf"
  >
    <FileGridCell
      v-for="{ name, type } in fileList"
      :key="name"
      :selected="isChosen(name)"
      :type="type"
      @cell-clicked="onClick"
      >{{ name }}</FileGridCell
    >
  </div>
</template>

<script setup>
import FileGridContextMenu from "./FileGridContextMenu.vue";
import FileGridCell from "./FileGridCell.vue";
import { defineProps, defineEmits, ref, onMounted, onUnmounted } from "vue";

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

const emit = defineEmits(["create-folder"]);

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

const createFolder = () => {
  emit("create-folder");
};
</script>
