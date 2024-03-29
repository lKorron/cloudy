<template>
  <ContentPanel>
    <template #header>Sign up</template>
    <template #default>
      <Form
        v-slot="{ meta }"
        class="text-xs min-[350px]:text-base max-w-sm mx-auto p-2 md:max-w-md"
        @submit="signUp"
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
            <label for="login">Username</label>
            <Field
              id="login"
              v-model="login"
              rules="required"
              placeholder="Create an username"
              type="text"
              name="login"
              class="pl-1 border-b border-solid border-gray-400 focus:outline-none"
            />
          </div>
          <ErrorMessage
            v-slot="{ message }"
            name="login"
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

        <div class="mb-5">
          <div class="flex justify-between items-center">
            <label for="password">Repeat password</label>
            <Field
              id="password-repeat"
              v-model="confirmPassword"
              :rules="{ required: true, isPassword: password }"
              placeholder="Repeat your password"
              type="password"
              name="password-repeat"
              class="pl-1 border-b border-solid border-gray-400 focus:outline-none"
            />
          </div>
          <ErrorMessage
            v-slot="{ message }"
            name="password-repeat"
          >
            <div class="text-right text-red-500">{{ message }}</div>
          </ErrorMessage>
        </div>

        <BaseButton :disabled="!meta.valid">Sign up</BaseButton>
        <div class="leading-5 mt-1">or</div>

        <button
          class="text-xs hover:underline"
          @click.prevent="goToLogin"
        >
          Sign in
        </button>
      </Form>
    </template>
  </ContentPanel>
</template>

<script setup>
import { ref } from "vue";
import ContentPanel from "../components/ContentPanel.vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import router from "@/router";
import BaseButton from "@/components/base/BaseButton.vue";

const email = ref("");
const login = ref("");

const password = ref("");
const confirmPassword = ref("");

const signUp = () => {
  const auth = getAuth();

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(({ user }) => {
      updateProfile(user, { displayName: login.value }).then(() => {
        sendEmailVerification(auth.currentUser).then(() => {
          console.log("email sended");
          router.push({ name: "login" });
        });
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.error(
        `Creating user error ${errorMessage} with code ${errorCode}`
      );
    });
};

const goToLogin = () => {
  router.push({ name: "login" });
};
</script>

<style lang="scss" scoped></style>
