import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import { initializeApp } from "firebase/app";
import { defineRule } from "vee-validate";
import { required, email, is } from "@vee-validate/rules";
import vClickOutside from "click-outside-vue3";

const requiredWrapper = (value) => {
  return required(value) || "This field is required";
};

const isPassword = (value, params) => {
  return is(value, params) || "Passwords must be the same";
};

defineRule("required", requiredWrapper);
defineRule("email", email);
defineRule("isPassword", isPassword);

defineRule("min", (value, [limit]) => {
  if (!value || !value.length) {
    return true;
  }
  if (value.length < limit) {
    return `Password must be at least ${limit} characters`;
  }
  return true;
});

const firebaseConfig = {
  apiKey: "AIzaSyAtkvfPAph6V8TFIPw3z83Wa9aq8WeC_OE",
  authDomain: "cloudy-e2f8e.firebaseapp.com",
  projectId: "cloudy-e2f8e",
  storageBucket: "cloudy-e2f8e.appspot.com",
  messagingSenderId: "948042477004",
  appId: "1:948042477004:web:a1aa1bb08f06da402c4169",
};

const fierebaseApp = initializeApp(firebaseConfig);

const app = createApp(App).use(router).use(vClickOutside).mount("#app");
