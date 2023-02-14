<template>
  <div
    @click.self="onClickSelf"
    v-click-outside="onClickOutside"
    class="grid grid-cols-2 gap-2 p-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
  >
    <FileCell
      :selected="isChosen(name)"
      @cell-clicked="onClick"
      v-for="name in fileList"
      :key="name"
      >{{ name }}</FileCell
    >
  </div>
</template>

<script setup>
import ContextMenu from "../components/ContextMenu.vue";
import FileCell from "./FileCell.vue";
import { defineProps, ref } from "vue";

const chosenCellName = ref(null);

const props = defineProps({
  fileList: {
    type: Array,
    required: true,
  },
});

const isChosen = (name) => name === chosenCellName.value;

const onClick = (name) => {
  chosenCellName.value = name;
};

const onClickOutside = () => {
  chosenCellName.value = null;
};

const onClickSelf = () => {
  chosenCellName.value = null;
};
</script>
