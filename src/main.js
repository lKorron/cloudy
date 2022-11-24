import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAtkvfPAph6V8TFIPw3z83Wa9aq8WeC_OE",
  authDomain: "cloudy-e2f8e.firebaseapp.com",
  projectId: "cloudy-e2f8e",
  storageBucket: "cloudy-e2f8e.appspot.com",
  messagingSenderId: "948042477004",
  appId: "1:948042477004:web:a1aa1bb08f06da402c4169",
};

const app = initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
