<template>
  <ContentPanel>
    <template #header>Login</template>
    <template #default>
      <Form
        v-slot="{ meta }"
        class="text-xs min-[350px]:text-base max-w-sm mx-auto p-2 md:max-w-md"
        @submit="signIn"
      >
        <div class="mb-5">
          <div class="flex justify-between items-center">
            <label for="login">Email</label>
            <Field
              id="email"
              v-model="email"
              rules="required|email"
              placeholder="example@gmail.com"
              type="email"
              name="email"
              class="pl-1 border-b border-solid border-gray-400 focus:outline-none"
            />
          </div>
          <ErrorMessage
            v-slot="{ message }"
            name="email"
          >
            <div class="text-right text-red-500">{{ message }}</div>
          </ErrorMessage>
        </div>
        <div class="mb-5">
          <div class="flex justify-between items-center">
            <label
              for="password"
              class="mr-5"
              >Password</label
            >
            <Field
              id="password"
              v-model="password"
              :rules="{ required: true, min: 6 }"
              placeholder="Enter your password"
              type="password"
              name="password"
              class="pl-1 border-b border-solid border-gray-400 focus:outline-none"
            />
          </div>
          <ErrorMessage
            v-slot="{ message }"
            name="password"
          >
            <div class="text-right text-red-500">{{ message }}</div>
          </ErrorMessage>
        </div>
        <div class="flex mb-2">
          <input
            id="remember"
            type="checkbox"
            name="isRemember"
            class="mr-1"
          />
          <label for="remember">Remember me</label>
        </div>

        <BaseButton :disabled="!meta.valid">Sign in</BaseButton>

        <div class="leading-5 mt-1">or</div>

        <button
          class="text-xs hover:underline"
          @click.prevent="goToRegister"
        >
          Sign up
        </button>
      </Form></template
    >
  </ContentPanel>
</template>

<script setup>
import { ref } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import ContentPanel from "../components/ContentPanel.vue";
import router from "@/router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import BaseButton from "@/components/base/BaseButton.vue";

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
  router.push({ name: "documents" });
};
</script>

<style lang="scss" scoped></style>
