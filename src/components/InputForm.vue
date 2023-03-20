<template>
  <div class="w-96">
    <div class="flex flex-start">
      <h2 class="font-bold text-lg"><slot></slot></h2>
    </div>

    <form
      class="mt-10"
      @submit.prevent="submit"
    >
      <div>
        <input
          v-model="enteredName"
          :placeholder="props.placeholder"
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
import { ref, computed, onMounted } from "vue";

const props = defineProps({
  placeholder: {
    type: String,
    default: "New file",
  },
  inputValue: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["form-submitted"]);

const enteredName = ref("");
const isValid = computed(() => enteredName.value.length > 0);

onMounted(() => {
  enteredName.value = props.inputValue;
});

const submit = () => {
  emit("form-submitted", enteredName.value);
};
</script>
