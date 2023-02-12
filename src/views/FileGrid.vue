<template>
  <div class="grid grid-cols-8 gap-2 p-2">
    <FileCell v-for="name in [1, 2, 3, 4]" :key="name">{{ name }}</FileCell>
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
