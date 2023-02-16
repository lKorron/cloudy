<template>
  <button
    class="hover:scale-105 transition-transform border-none bg-sky-200 pl-3 pr-3 rounded-md mb-2 cursor-pointer"
    :class="{
      'opacity-25 cursor-not-allowed hover:transform-none': disabled,
    }"
    :disabled="disabled"
  >
    <slot>ok</slot>
  </button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  disabled: {
    type: Boolean,
  },
});
</script>
