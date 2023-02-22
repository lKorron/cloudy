<template>
  <div>
    <ContextMenu
      :active="active"
      :boundaries-element="boundariesElement"
      :x-position="xPosition"
      :y-position="yPosition"
      ><ContextMenuItem
        class="hover:rounded-t-md"
        @item-click="createFolder"
      >
        Create forlder
      </ContextMenuItem>

      <ContextMenuItem
        class="hover:rounded-b-md"
        @item-click="uploadFile"
      >
        Upload file
      </ContextMenuItem></ContextMenu
    >
  </div>
</template>

<script setup>
import ContextMenu from "./ContextMenu.vue";
import ContextMenuItem from "./ContextMenuItem.vue";

const props = defineProps({
  active: {
    type: Boolean,
  },

  boundariesElement: {
    required: true,
    type: null,
  },

  xPosition: {
    type: Number,
    default: 0,
  },

  yPosition: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["create-folder"]);

const createFolder = () => {
  emit("create-folder");
};

const uploadFile = () => {
  const fileElem = document.getElementById("fileElem");

  fileElem?.click();
};
</script>
