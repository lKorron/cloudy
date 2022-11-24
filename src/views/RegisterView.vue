<template>
  <content-panel>
    <template #header>Sign in</template>
    <template #default>
      <Form
        @submit="register"
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

        <button
          class="hover:scale-105 transition-transform border-none bg-sky-200 pl-3 pr-3 rounded-md mb-2 cursor-pointer"
          :class="{
            'opacity-25 cursor-not-allowed hover:transform-none': !meta.valid,
          }"
        >
          Sign up
        </button>
      </Form>
    </template>
  </content-panel>
</template>

<script setup>
import { ref } from "vue";
import ContentPanel from "../components/ContentPanel.vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const email = ref();
const login = ref();

const password = ref();
const confirmPassword = ref();

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((userCredentianal) => {})
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
