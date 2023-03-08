<template>
  <div
    class="mt-6 max-w-md mx-auto bg-white rounded-md border-black md:max-w-lg shadow-lg"
    :class="{ 'md:max-w-6xl': desktop }"
  >
    <h2 class="text-[25px] font-bold pt-4 mb-5"><slot name="header"></slot></h2>

    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  desktop: {
    type: Boolean,
    requierd: false,
  },
});
</script>
