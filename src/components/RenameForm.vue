<template>
  <InputForm
    :placeholder="placeholder"
    :input-value="inputValue"
    @form-submitted="submitRename"
    ><slot></slot
  ></InputForm>
</template>

<script setup>
import InputForm from "./InputForm.vue";

const props = defineProps({
  placeholder: {
    type: String,
    default: "New file",
  },
  inputValue: {
    type: String,
    default: "",
  },
  oldName: {
    type: String,
    default: "",
  },

  fileType: {
    type: String,
    default: "document",
  },
});

const emit = defineEmits(["renameSubmitted"]);

const submitRename = (newName) => {
  emit("renameSubmitted", {
    oldName: props.oldName,
    newName,
    fileType: props.fileType,
  });
};
</script>
