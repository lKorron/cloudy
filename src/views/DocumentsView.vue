<template>
  <DocumentsPanel
    v-if="user"
    :user="user"
  />
</template>

<script setup>
import DocumentsPanel from "@/components/DocumentsPanel.vue";
import { ref, onMounted } from "vue";
import { useAuth } from "@/composables/auth";

defineProps({
  directory: {
    type: String,
    default: "",
  },
});

const user = ref("");

const { getUser } = useAuth();

getUser().then((usr) => (user.value = usr));
</script>
