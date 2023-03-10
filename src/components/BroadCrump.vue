<template>
  <div class="flex flex-row justify-center">
    <BroadCrumpItem
      v-for="(item, index) in itemList"
      :key="index"
      :value="item"
      :last="index === itemList.length - 1"
      @item-clicked="click"
    />
  </div>
</template>

<script setup>
import BroadCrumpItem from "./BroadCrumpItem.vue";

const props = defineProps({
  itemList: {
    type: Array,
    reqruired: true,
    default: () => ["foo", "baz", "bar"],
  },
});

const click = (value) => {
  console.log(value);
};
</script>
