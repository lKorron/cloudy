<template>
  <div class="flex justify-end w-[90%] mx-auto">
    <div class="">{{ user.displayName }}</div>
    <BaseButton
      class="ml-2"
      @click="signOut"
      >Sign out</BaseButton
    >
  </div>
</template>

<script setup>
import BaseButton from "./base/BaseButton.vue";
import { signOut } from "@/composables/auth";

defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>
