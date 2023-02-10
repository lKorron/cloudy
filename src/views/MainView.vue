<template>
  <ContentPanel desktop>
    <template #header>Store files</template>
    <template #default>
      <input type="file" name="file" id="file" />
    </template>
  </ContentPanel>
</template>

<script setup>
import ContentPanel from "@/components/ContentPanel.vue";
import router from "@/router";

import { getAuth } from "@firebase/auth";
import { getStorage, ref } from "firebase/storage";

const auth = getAuth();

auth.onAuthStateChanged((user) => {
  if (!user) {
    router.replace({ name: "login" });
  }
});

const storage = getStorage();
</script>

<style lang="scss" scoped></style>
