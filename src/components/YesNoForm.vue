<template>
  <div class="mx-auto">
    <h2 class="mb-10"><slot></slot></h2>
    <div class="flex justify-between w-3/5 xxs:w-1/2 xs:w-2/6 mx-auto">
      <BaseButton @click="confirm">Yes</BaseButton>
      <BaseButton @click="reject">No</BaseButton>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "./base/BaseButton.vue";

const emit = defineEmits(["confirmChoice", "rejectChoice"]);

const confirm = () => {
  emit("confirmChoice");
};
const reject = () => {
  emit("rejectChoice");
};
</script>
