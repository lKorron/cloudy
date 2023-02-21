<template>
  <ContentPanel desktop>
    <template #header></template>
    <template #default>
      <div class="w-[256px] h-[256px] my-0 mx-auto">
        <img
          src="../assets/404.png"
          alt="404 not found"
        />
      </div>

      <h1 class="text-[1.5625rem]">Oops - page does not exist</h1>

      <div class="pb-10">
        <RouterLink
          to="/"
          class="hover:text-blue-400 text-lg"
          >Home</RouterLink
        >
      </div>
    </template>
  </ContentPanel>
</template>

<script setup>
import ContentPanel from "@/components/ContentPanel.vue";
import { RouterLink } from "vue-router";
</script>
