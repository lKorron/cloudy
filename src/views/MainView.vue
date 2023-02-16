<template>
  <AsyncPopup ref="popup"></AsyncPopup>
  <ContentPanel desktop>
    <template #header>Store files</template>
    <template #default>
      <div class="mb-5">Login as {{ username }}</div>
      <FileGrid
        :file-list="fileNamesList"
        @create-folder="popup.open()"
      ></FileGrid>
      <input
        class="mb-10 hidden"
        type="file"
        name="file"
        id="fileElem"
        @change="onFileUploaded"
      />
    </template>
  </ContentPanel>
</template>

<script setup>
import ContentPanel from "@/components/ContentPanel.vue";
import FileGrid from "../components/FileGrid.vue";

import { ref, onMounted } from "vue";
import { useStorage, useAuth } from "@/composables/storage";
import AsyncPopup from "@/components/AsyncPopup.vue";

const { username } = useAuth();
const { fileNamesList, uploadToStorage } = useStorage();

const popup = ref(null);

const onFileUploaded = (evt) => {
  console.log(evt.target.files[0].name);
  const file = evt.target.files[0];
  uploadToStorage(file);
};

onMounted(() => {
  popup.value.open();
});
</script>

<style lang="scss" scoped></style>
