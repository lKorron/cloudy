<template>
  <div class="container">
    <div class="mt-6 max-w-md mx-auto bg-white rounded-md border-black">
      <h1 class="text-xl font-bold pt-4 mb-5">Login</h1>
      <form action="" class="max-w-sm mx-auto p-2">
        <div class="flex justify-between">
          <label for="login" class="mr-5">Login/email</label>
          <input
            placeholder="example@gmail.com"
            type="text"
            name="login"
            id="login"
            class="pl-1 border-b border-solid border-gray-400 mb-5 text-gray-400 focus:text-black"
          />
        </div>
        <div class="flex justify-between">
          <label for="password" class="mr-5">Password</label>
          <input
            placeholder="Enter your password"
            type="password"
            name="password"
            id="password"
            class="pl-1 border-b border-solid border-gray-400 mb-5 text-gray-400 focus:text-black"
          />
        </div>
        <button
          class="hover:scale-105 transition bg-sky-200 pl-3 pr-3 rounded-md"
        >
          Sign in
        </button>
      </form>
    </div>
  </div>
</template>

<script setup></script>
