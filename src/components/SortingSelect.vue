<template>
  <div class="flex">
    <div class="w-[25px]">
      <img
        class="w-[25px]"
        src="@/assets/sort.png"
        alt="sort"
      />
    </div>

    <select
      v-model="sortingType"
      class="outline-none"
    >
      <option value="By name">By name</option>
      <option value="Reverse">Reverse</option>
    </select>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

const emit = defineEmits(["selectChanged"]);

const sortingType = ref("By name");
const sortingFunction = ref((a, b) =>
  a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
);

watch(sortingType, (value) => {
  setSortingFunction(value);
  localStorage.setItem("sortingType", value);

  emit("selectChanged", sortingFunction.value);
});

onMounted(() => {
  const type = localStorage.getItem("sortingType");

  type && (sortingType.value = type);

  setSortingFunction(sortingType.value);
  emit("selectChanged", sortingFunction.value);
});

const setSortingFunction = (sortingType) => {
  switch (sortingType) {
    case "By name":
      sortingFunction.value = (a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
      break;
    case "Reverse":
      sortingFunction.value = (a, b) =>
        a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1;
      break;
    default:
      sortingFunction.value = (a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
      break;
  }
};
</script>
