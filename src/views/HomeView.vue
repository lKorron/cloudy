<template>
  <div></div>
</template>

<script setup>
import router from "@/router";

import { getAuth } from "@firebase/auth";
const auth = getAuth();

auth.onAuthStateChanged((user) => {
  if (user) {
    router.replace({ name: "documents" });
  } else {
    router.replace({ name: "login" });
  }
});
</script>
