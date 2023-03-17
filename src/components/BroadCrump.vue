<template>
  <div class="flex flex-row justify-center">
    <BroadCrumpItem
      v-if="baseItem"
      :value="baseItem"
      :last="items.at(0) === ''"
      @item-clicked="baseItemClick"
    />

    <BroadCrumpItem
      v-for="(item, index) in items"
      :key="index"
      :value="item"
      :last="index === items.length - 1"
      data-test="item"
      @item-clicked="click"
    />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import BroadCrumpItem from "./BroadCrumpItem.vue";

const props = defineProps({
  itemList: {
    type: Array,
    reqruired: true,
    default: () => ["foo", "baz", "bar"],
  },
  baseItem: {
    type: String,
    reqruired: false,
    default: () => null,
  },
});

const emit = defineEmits(["itemClicked"]);

const items = ref(props.itemList);

watch(
  () => props.itemList,
  () => {
    items.value = props.itemList;
  }
);

const baseItemClick = () => {
  items.value = [""];

  emit("itemClicked", "");
};

const click = (itemName) => {
  changeCrump(itemName);

  emit("itemClicked", items.value.join("/"));
};

const changeCrump = (itemName) => {
  const updatedItems = [];

  for (let i = 0; i < items.value.length; i++) {
    const element = items.value[i];
    updatedItems.push(element);

    if (element === itemName) {
      break;
    }
  }

  items.value = updatedItems;
};
</script>
