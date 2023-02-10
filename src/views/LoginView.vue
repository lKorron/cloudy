<template>
  <content-panel>
    <template #header>Login</template>
    <template #default>
      <Form
        @submit="signIn"
        v-slot="{ meta }"
        class="text-xs min-[350px]:text-base max-w-sm mx-auto p-2 md:max-w-md"
      >
        <div class="mb-5">
          <div class="flex justify-between items-center">
            <label for="login">Email</label>
            <Field
              v-model="email"
              rules="required|email"
              placeholder="example@gmail.com"
              type="email"
              name="email"
              id="email"
              class="pl-1 border-b border-solid border-gray-400 focus:outline-none"
            />
          </div>
          <ErrorMessage name="email" v-slot="{ message }">
            <div class="text-right text-red-500">{{ message }}</div>
          </ErrorMessage>
        </div>
        <div class="mb-5">
          <div class="flex justify-between items-center">
            <label for="password" class="mr-5">Password</label>
            <Field
              v-model="password"
              :rules="{ required: true, min: 6 }"
              placeholder="Enter your password"
              type="password"
              name="password"
              id="password"
              class="pl-1 border-b border-solid border-gray-400 focus:outline-none"
            />
          </div>
          <ErrorMessage name="password" v-slot="{ message }">
            <div class="text-right text-red-500">{{ message }}</div>
          </ErrorMessage>
        </div>
        <div class="flex mb-2">
          <input type="checkbox" name="isRemember" id="remember" class="mr-1" />
          <label for="remember">Remember me</label>
        </div>
        <button
          class="hover:scale-105 transition-transform border-none bg-sky-200 pl-3 pr-3 rounded-md mb-2 cursor-pointer"
          :class="{
            'opacity-25 cursor-not-allowed hover:transform-none': !meta.valid,
          }"
          :disabled="!meta.valid"
        >
          Sign in
        </button>
        <div class="leading-5 mt-1">or</div>
        <button @click.prevent="goToRegister" class="text-xs hover:underline">
          Sign up
        </button>
      </Form></template
    >
  </content-panel>
</template>

<script setup>
import { ref } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import ContentPanel from "../components/ContentPanel.vue";
import router from "@/router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const email = ref("");
const password = ref("");

const signIn = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((userCredential) => {
      console.log("successfully signed up");
      goToMainPage();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Sign in error: ${errorMessage} with code ${errorCode}`);
    });
};

const goToRegister = () => {
  router.push({ name: "register" });
};

const goToMainPage = () => {
  router.push({ name: "main" });
};
</script>

<style lang="scss" scoped></style>
