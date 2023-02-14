<template>
  <div
    v-show="active"
    class="w-52 bg-white border rounded-md shadow-md absolute cursor-pointer"
    :style="{ left: x, top: y }"
  >
    <div class="hover:bg-slate-300 rounded-t-md">Create folder</div>
    <div class="hover:bg-slate-300 rounded-b-md">Upload file</div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const x = computed(() => props.xPosition + "px");
const y = computed(() => props.yPosition + "px");

const props = defineProps({
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
</script>
