<template>
  <div
    class="hover:bg-slate-300"
    @click="click"
  >
    <slot>Option</slot>
  </div>
</template>

<script setup>
const emit = defineEmits(["item-click"]);

const click = () => {
  emit("item-click");
};
</script>
