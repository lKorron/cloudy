<template>
  <div
    class="min-h-[124px]"
    @click.self.right="onRightClick"
  ></div>
</template>

<script>
export default {
  name: "EmptyCell",
  emits: ["rightClick"],
  methods: {
    onRightClick(event) {
      this.$emit("rightClick", event);
    },
  },
};
</script>
