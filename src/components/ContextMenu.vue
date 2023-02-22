<template>
  <div
    v-show="active"
    ref="element"
    class="w-52 bg-white border rounded-md shadow-md absolute cursor-pointer"
  >
    <ContextMenuItem
      class="hover:rounded-t-md"
      @item-click="createFolder"
    >
      Create forlder
    </ContextMenuItem>

    <ContextMenuItem
      class="hover:rounded-b-md"
      @item-click="uploadFile"
    >
      Upload file
    </ContextMenuItem>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";
import { createPopper } from "@popperjs/core";
import ContextMenuItem from "./ContextMenuItem.vue";

const props = defineProps({
  boundariesElement: {
    required: true,
    type: null,
  },
  active: {
    type: Boolean,
  },
  xPosition: {
    type: Number,
    default: 0,
  },
  yPosition: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["create-folder"]);

const element = ref(null);
let popper;

watch(
  () => props.xPosition,
  () => openMenu()
);

watch(
  () => props.yPosition,
  () => openMenu()
);

const generateGetBoundingClientRect = (x = 0, y = 0) => {
  return () => ({
    width: 0,
    height: 0,
    top: y,
    right: x,
    bottom: y,
    left: x,
  });
};

const virtualElement = {
  getBoundingClientRect: generateGetBoundingClientRect(),
};

const setPopper = () => {
  popper = createPopper(virtualElement, element.value, {
    placement: "right-start",
    modifiers: [
      {
        name: "flip",
        options: {
          boundary: props.boundariesElement,
        },
      },
    ],
  });
};

const openMenu = () => {
  virtualElement.getBoundingClientRect = generateGetBoundingClientRect(
    props.xPosition,
    props.yPosition
  );

  if (popper) {
    popper.update();
  } else {
    setPopper();
  }
};

const createFolder = () => {
  emit("create-folder");
};

const uploadFile = () => {
  const fileElem = document.getElementById("fileElem");

  fileElem?.click();
};
</script>
