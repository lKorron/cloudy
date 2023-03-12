<template>
  <div class="flex flex-row justify-center">
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
import { ref } from "vue";
import BroadCrumpItem from "./BroadCrumpItem.vue";

const props = defineProps({
  itemList: {
    type: Array,
    reqruired: true,
    default: () => ["foo", "baz", "bar"],
  },
});

const emit = defineEmits(["itemClicked"]);

const items = ref(props.itemList);

const click = (value) => {
  changeCrump(value);
  emit("itemClicked", value);
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
