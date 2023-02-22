<template>
  <div
    v-show="active"
    ref="element"
    class="w-52 bg-white border rounded-md shadow-md absolute cursor-pointer"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps, ref, watch } from "vue";
import { createPopper } from "@popperjs/core";

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
</script>
