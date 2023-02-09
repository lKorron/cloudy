<template>
  <ContentPanel desktop>
    <template #header>Store files</template>
    <template #default>storage</template>
  </ContentPanel>
</template>

<script setup>
import ContentPanel from "@/components/ContentPanel.vue";
import router from "@/router";

import { getAuth } from "@firebase/auth";

const auth = getAuth();

auth.onAuthStateChanged((user) => {
  if (!user) {
    router.replace({ name: "login" });
  }
});
</script>

<style lang="scss" scoped></style>
