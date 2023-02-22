<template>
  <div
    class="flex flex-col-reverse max-w-sm border-solid border-2 border-white rounded hover:bg-gray-100 hover:border-gray-100 justify-end"
    :class="{
      'bg-gray-100 border-gray-100 hover:bg-gray-200 hover:border-gray-200':
        selected,
    }"
    @click="click"
    @click.right="clickRight"
  >
    <h1 class="last break-words mt-2"><slot></slot></h1>
    <div class="h-[80px] w-[80px] my-0 mx-auto mt-2">
      <img
        v-if="type === 'document'"
        class="h-[80px]"
        src="../assets/docs.png"
        alt="document"
      />
      <img
        v-else-if="type === 'folder'"
        src="../assets/yellow-folder.png"
        alt="folder"
        class="h-[80px] w-[80px] my-0 mx-auto mt-2"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps, getCurrentInstance, defineEmits } from "vue";

const props = defineProps({
  selected: {
    type: Boolean,
    required: false,
  },
  type: {
    type: String,
    default: "document",
  },
});

const emit = defineEmits(["cellClicked", "clickedOutside"]);

const key = getCurrentInstance().vnode.key;

const click = () => {
  emit("cellClicked", key);
};

const clickRight = () => {
  // console.log("right clicked");
};
</script>
