<template>
  <div
    class="flex flex-col-reverse max-w-sm border-solid border-2 border-white rounded hover:bg-gray-100 hover:border-gray-100 justify-end relative"
    :class="{
      'bg-gray-100 border-gray-100 hover:bg-gray-200 hover:border-gray-200':
        selected,
    }"
    @click="click"
    @click.right="openContext"
    @dblclick="openFolder"
  >
    <BaseSettings
      v-if="mobile"
      @click.stop="openContext"
    />

    <h1 class="last break-words mt-2">{{ props.name }}</h1>
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
import { ref } from "vue";
import isMobile from "@/modules/isMobile";
import BaseSettings from "./base/BaseSettings.vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  selected: {
    type: Boolean,
    required: false,
  },
  type: {
    type: String,
    default: "document",
  },
  boundariesElement: {
    type: Object,
    default: () => {},
    required: false,
  },
});

const emit = defineEmits(["cellClicked", "openFolder", "openCellContext"]);

const mobile = isMobile();

const click = () => {
  mobile ? emit("openFolder", props.path) : emit("cellClicked", props.name);
};

const openContext = (evt) => {
  emit("cellClicked", props.name);

  const mouseData = {
    x: evt.clientX,
    y: evt.clientY,
  };

  const itemData = {
    name: props.name,
    path: props.path,
    type: props.type,
  };

  Object.freeze(mouseData);
  Object.freeze(itemData);

  emit("openCellContext", mouseData, itemData);
};

const openFolder = () => {
  if (props.type === "folder") {
    emit("openFolder", props.path);
  }
};
</script>
