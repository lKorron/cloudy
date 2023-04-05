<template>
  <div class="z-10">
    <ContextMenu
      :is-active="isActive"
      :boundaries-element="boundariesElement"
      :x-position="xPosition"
      :y-position="yPosition"
    >
      <ContextMenuItem
        class="hover:rounded-t-md"
        @item-click="renameFile"
      >
        Rename
      </ContextMenuItem>

      <ContextMenuItem @item-click="deleteFile"> Delete </ContextMenuItem>

      <ContextMenuItem
        class="border-t-2 hover:rounded-b-md"
        @item-click="downloadFile"
      >
        Download
      </ContextMenuItem>
    </ContextMenu>
  </div>
</template>

<script setup>
import ContextMenu from "./ContextMenu.vue";
import ContextMenuItem from "./ContextMenuItem.vue";

const props = defineProps({
  isActive: {
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

const emit = defineEmits(["deleteFile", "downloadFile", "renameFile"]);

const renameFile = () => {
  emit("renameFile");
};

const deleteFile = () => {
  emit("deleteFile");
};

const downloadFile = () => {
  emit("downloadFile");
};
</script>
