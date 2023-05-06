<template>
  <ContentPanel desktop>
    <template #header>User settings</template>
    <template #default>
      <div class="flex flex-col">
        <div class="w-24 rounded-full mx-auto relative">
          <img
            class="w-24"
            src="@/assets/avatar.png"
            alt="avatar"
          />

          <div
            class="absolute w-6 bottom-1 right-0 hover:scale-105 transition-transform cursor-pointer"
          >
            <img
              class="w-6"
              src="@/assets/edit.png"
              alt="edit"
            />
          </div>
        </div>

        <section class="mb-2 pl-3 pr-3 flex justify-center items-center">
          <div class="w-[100%] max-w-md">
            <div class="flex justify-between mx-auto mt-2">
              <div class="mr-4">Username</div>
              <div class="break-all">Korron_ext</div>
            </div>

            <div class="flex justify-between mx-auto">
              <div class="mr-4">Email</div>
              <div class="break-all">lkorron@yandex.ru</div>
            </div>

            <div class="flex justify-between mx-auto">
              <div class="mr-4">Password</div>
              <div class="break-all">*******</div>
            </div>
          </div>
        </section>

        <RouterLink
          to="documents"
          class="mb-2 hover:underline hover:text-blue-500 w-fit mx-auto"
          >Back to main page</RouterLink
        >
      </div>
    </template>
  </ContentPanel>
</template>

<script setup>
import ContentPanel from "../components/ContentPanel.vue";
</script>
