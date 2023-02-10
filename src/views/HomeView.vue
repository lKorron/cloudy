<template>
  <div class="container">
    <div class="relative inline-block">
      <img
        src="../assets/cloud.png"
        alt="cloud"
        class="h-10 absolute left-[-45px] top-3"
      />
      <h1 class="mx-auto font-bold text-[30px] mt-3">Cloudy</h1>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";

import { getAuth } from "@firebase/auth";
const auth = getAuth();

auth.onAuthStateChanged((user) => {
  if (user) {
    router.replace({ name: "main" });
  } else {
    router.replace({ name: "login" });
  }
});
</script>
