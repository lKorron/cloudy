<template>
  <div>
    <span
      class="hover:underline hover:cursor-pointer hover:text-blue-500"
      data-test="item"
      @click="click"
    >
      {{ value }}</span
    >
    <span
      v-if="!last"
      data-test="slash"
      >/</span
    >
  </div>
</template>

<script setup>
const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  last: {
    type: Boolean,
  },
});

const emit = defineEmits(["itemClicked"]);

const click = () => emit("itemClicked", props.value);
</script>
