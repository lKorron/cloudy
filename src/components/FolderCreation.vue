<template>
  <div class="w-96">
    <div class="flex flex-start">
      <h2 class="font-bold text-lg">Enter folder name</h2>
    </div>

    <form
      class="mt-10"
      @submit.prevent="submit"
    >
      <div>
        <input
          v-model="folderName"
          placeholder="New folder"
          class="border-gray-400 border-2 pl-2 rounded focus:border-blue-400 focus:border-2 focus:outline-none w-[100%] h-9"
          type="text"
        />
      </div>
      <div class="flex justify-end mt-10">
        <BaseButton :disabled="!isValid" />
      </div>
    </form>
  </div>
</template>

<script setup>
import BaseButton from "./base/BaseButton.vue";
import { ref, defineEmits, computed } from "vue";

const emit = defineEmits(["form-submitted"]);

const folderName = ref("");
const isValid = computed(() => folderName.value.length > 0);

const submit = () => {
  emit("form-submitted", folderName.value);
};
</script>
