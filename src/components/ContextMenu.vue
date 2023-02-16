<template>
  <div
    ref="element"
    v-show="active"
    class="w-52 bg-white border rounded-md shadow-md absolute cursor-pointer"
  >
    <div class="hover:bg-slate-300 rounded-t-md">Create folder</div>
    <div class="hover:bg-slate-300 rounded-b-md">Upload file</div>
  </div>
</template>

<script setup>
import { defineProps, ref, watch, onMounted } from "vue";
import { createPopper } from "@popperjs/core";

const props = defineProps({
  boudariesElement: {
    required: true,
  },
  active: {
    type: Boolean,
  },
  xPosition: {
    type: Number,
  },
  yPosition: {
    type: Number,
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

watch(
  () => props.boudariesElement,
  () => setPopper()
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
          boundary: props.boudariesElement,
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

  popper.update();
};
</script>
