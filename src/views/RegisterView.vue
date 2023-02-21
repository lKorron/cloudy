<template>
  <ContentPanel>
    <template #header>Sign up</template>
    <template #default>
      <Form
        @submit="signUp"
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
            <label for="login">Username</label>
            <Field
              v-model="login"
              rules="required"
              placeholder="Create an username"
              type="text"
              name="login"
              id="login"
              class="pl-1 border-b border-solid border-gray-400 focus:outline-none"
            />
          </div>
          <ErrorMessage name="login" v-slot="{ message }">
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

        <div class="mb-5">
          <div class="flex justify-between items-center">
            <label for="password">Repeat password</label>
            <Field
              v-model="confirmPassword"
              :rules="{ required: true, isPassword: password }"
              placeholder="Repeat your password"
              type="password"
              name="password-repeat"
              id="password-repeat"
              class="pl-1 border-b border-solid border-gray-400 focus:outline-none"
            />
          </div>
          <ErrorMessage name="password-repeat" v-slot="{ message }">
            <div class="text-right text-red-500">{{ message }}</div>
          </ErrorMessage>
        </div>

        <BaseButton :disabled="!meta.valid">Sign up</BaseButton>
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
</script>

<style lang="scss" scoped></style>
