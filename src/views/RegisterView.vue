<template>
  <content-panel>
    <template #header>Sign in</template>
    <template #default>
      <form
        action=""
        class="text-xs min-[350px]:text-base max-w-sm mx-auto p-2 md:max-w-md"
      >
        <div class="flex justify-between">
          <label for="login">Email</label>
          <input
            placeholder="example@gmail.com"
            type="email"
            name="email"
            id="email"
            class="pl-1 border-b border-solid border-gray-400 mb-5 text-gray-400 focus:text-black focus:outline-none"
          />
        </div>
        <div class="flex justify-between">
          <label for="login">Username</label>
          <input
            placeholder="Create an username"
            type="text"
            name="login"
            id="login"
            class="pl-1 border-b border-solid border-gray-400 mb-5 text-gray-400 focus:text-black focus:outline-none"
          />
        </div>
        <div class="flex justify-between">
          <label for="password" class="mr-5">Password</label>
          <input
            placeholder="Enter your password"
            type="password"
            name="password"
            id="password"
            class="pl-1 border-b border-solid border-gray-400 mb-5 text-gray-400 focus:text-black focus:outline-none"
          />
        </div>
        <div class="flex justify-between md:text-md">
          <label for="password">Repeat password</label>
          <input
            placeholder="Repeat your password"
            type="password"
            name="password"
            id="password-repeat"
            class="pl-1 border-b border-solid border-gray-400 mb-5 text-gray-400 focus:text-black focus:outline-none"
          />
        </div>

        <button
          class="hover:scale-105 transition-transform border-none bg-sky-200 pl-3 pr-3 rounded-md mb-2"
        >
          Sign up
        </button>
      </form>
    </template>
  </content-panel>
</template>

<script setup>
import ContentPanel from "../components/ContentPanel.vue";
</script>

<style lang="scss" scoped></style>
