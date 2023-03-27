<template>
  <AsyncPopup ref="signoutPopup">
    <YesNoForm
      @confirm-choice="signOut()"
      @reject-choice="signoutPopup.close()"
      >Do you want to sign out?
    </YesNoForm>
  </AsyncPopup>

  <div class="flex justify-end w-[90%] mx-auto">
    <div data-test="username">{{ user.displayName }}</div>
    <BaseButton
      data-test="logoutButton"
      class="ml-2"
      @click="openPopup()"
    >
      Sign out
    </BaseButton>
  </div>
</template>

<script setup>
import BaseButton from "./base/BaseButton.vue";
import { ref } from "vue";
import { signOut } from "@/composables/auth";
import AsyncPopup from "./AsyncPopup.vue";
import YesNoForm from "./YesNoForm.vue";

defineProps({
  user: {
    type: Object,
    required: true,
  },
});

const signoutPopup = ref(null);

const openPopup = () => {
  signoutPopup.value.open();
};
</script>
