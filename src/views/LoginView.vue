<template>
  <div
    class="mt-6 max-w-md mx-auto bg-white rounded-md border-black md:max-w-lg"
  >
    <h2 class="text-[25px] font-bold pt-4 mb-5">Login</h2>
    <form action="" class="max-w-sm mx-auto p-2 md:max-w-md">
      <div class="flex justify-between">
        <label for="login">Login/email</label>
        <input
          placeholder="example@gmail.com"
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
      <div class="flex mb-2">
        <input type="checkbox" name="isRemember" id="remember" class="mr-1" />
        <label for="remember">Remember me</label>
      </div>
      <button
        class="hover:scale-105 transition-transform border-none bg-sky-200 pl-3 pr-3 rounded-md"
      >
        Sign in
      </button>
      <div class="leading-5 mt-1">or</div>
      <button class="text-xs hover:underline">Sign up</button>
    </form>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
