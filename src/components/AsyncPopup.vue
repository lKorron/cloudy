<template>
  <Transition
    name="popup"
    appear
  >
    <div
      v-if="isOpen"
      class="backdrop backdrop-blur-sm flex flex-row justify-center"
      @mouseover.self="state = 'wait'"
      @mouseout.self="state = 'idle'"
      @mousedown.self="state = 'down'"
      @mouseup.self="state == 'down' && (ignoreKeys ? '' : close())"
    >
      <div
        class="mb-40 bg-white rounded-md shadow-md relative p-3 w-60 xxs:w-80 xs:w-96"
        @click.stop
      >
        <div>
          <slot
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            reprehenderit dolor et aut nostrum quisquam, nisi earum mollitia
            hic, impedit saepe! Reiciendis ipsam atque minima ducimus doloremque
            omnis iure quos.</slot
          >
        </div>

        <slot name="close-button"
          ><button
            class="button absolute top-1 right-2 hover:scale-110 transition-transform"
            @click="close"
          >
            X
          </button></slot
        >
      </div>
    </div>
  </Transition>
  <div
    v-if="isOpen && darkBackground"
    class="background dark-background"
  ></div>
</template>

<script>
export default {
  props: {
    ignoreKeys: {
      type: Boolean,
      required: false,
    },
    darkBackground: {
      type: Boolean,
      required: false,
    },
  },

  popupController: null,

  data() {
    return {
      isOpen: false,
      state: "idle",
    };
  },

  mounted() {
    document.addEventListener("keydown", this.handleKeydown);
  },

  beforeUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  },

  methods: {
    open() {
      let resolve;
      let reject;

      const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });

      this.$options.popupController = { resolve, reject };

      //this.$options.popupController.resolve(true);
      this.isOpen = true;

      return promise;
    },
    close() {
      this.$options.popupController.resolve(true);
      this.isOpen = false;
      //emit
    },
    handleKeydown(evt) {
      if (this.ignoreKeys) {
        return;
      }

      if (evt.key === "Escape" && this.isOpen) {
        this.close();
      }
    },
  },
};
</script>

<style lang="scss">
.backdrop {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
}

.background {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.dark-background {
  background-color: rgba($color: #000, $alpha: 0.3);
}
</style>
