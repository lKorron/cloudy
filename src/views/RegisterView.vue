<template>
  <content-panel>
    <template #header>Sign in</template>
    <template #default>
      <Form
        @submit="register"
        v-slot="{ meta }"
        class="text-xs min-[350px]:text-base max-w-sm mx-auto p-2 md:max-w-md"
      >
        <div class="flex justify-between">
          <label for="login">Email</label>
          <Field
            v-model="email"
            rules="required|email"
            placeholder="example@gmail.com"
            type="email"
            name="email"
            id="email"
            class="pl-1 border-b border-solid border-gray-400 mb-5 focus:outline-none"
          />
        </div>
        <div class="flex justify-between">
          <label for="login">Username</label>
          <Field
            v-model="login"
            rules="required"
            placeholder="Create an username"
            type="text"
            name="login"
            id="login"
            class="pl-1 border-b border-solid border-gray-400 mb-5 focus:outline-none"
          />
        </div>
        <div class="flex justify-between">
          <label for="password" class="mr-5">Password</label>
          <Field
            v-model="password"
            :rules="{ required: true, is: confirmPassword }"
            placeholder="Enter your password"
            type="password"
            name="password"
            id="password"
            class="pl-1 border-b border-solid border-gray-400 mb-5 focus:outline-none"
          />
        </div>
        <div class="flex justify-between md:text-md">
          <label for="password">Repeat password</label>
          <Field
            v-model="confirmPassword"
            :rules="{ required: true, is: password }"
            placeholder="Repeat your password"
            type="password"
            name="password-repeat"
            id="password-repeat"
            class="pl-1 border-b border-solid border-gray-400 mb-5 focus:outline-none"
          />
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
import { Form, Field, useForm } from "vee-validate";
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
