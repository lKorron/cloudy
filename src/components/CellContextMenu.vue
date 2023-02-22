<template>
  <div>
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

      <ContextMenuItem
        class="hover:rounded-b-md"
        @item-click="deleteFile"
      >
        Delete
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

const renameFile = () => {
  console.log("renaming");
};

const deleteFile = () => {
  console.log("deleting");
};
</script>
