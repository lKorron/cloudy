<template>
  <div
    @click="onClick"
    class="flex flex-col-reverse max-w-sm border-solid border-2 border-white rounded hover:bg-gray-100 hover:border-gray-100 justify-end"
    :class="{
      'bg-gray-100 border-gray-100 hover:bg-gray-200 hover:border-gray-200':
        selected,
    }"
  >
    <h1 class="last break-words mt-2"><slot></slot></h1>
    <div class="h-[80px] w-[80px] my-0 mx-auto mt-2">
      <img class="h-[80px]" src="../assets/docs.png" alt="document" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, getCurrentInstance, defineEmits } from "vue";

const key = getCurrentInstance().vnode.key;

const props = defineProps({
  selected: {
    type: Boolean,
    required: false,
  },
});

const emit = defineEmits(["cellClicked", "clickedOutside"]);

const onClick = () => {
  emit("cellClicked", key);
};
</script>
