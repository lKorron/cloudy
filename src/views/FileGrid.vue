<template>
  <div
    class="grid grid-cols-2 gap-2 p-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
  >
    <FileCell v-for="name in fileList" :key="name">{{ name }}</FileCell>
  </div>
</template>

<script setup>
import FileCell from "./FileCell.vue";
import { defineProps } from "vue";

const props = defineProps({
  fileList: {
    type: Array,
    required: true,
  },
});
</script>
