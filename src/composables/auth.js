import { ref } from "vue";
import router from "@/router";
import { getAuth, onAuthStateChanged } from "@firebase/auth";

export function useAuth() {
  const auth = getAuth();
  const username = ref("");
  const uid = ref("");

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.replace({ name: "login" });
    } else {
      username.value !== user.displayName &&
        username.value !== "" &&
        localStorage.removeItem("userData");

      username.value = user.displayName;
      uid.value = user.uid;
    }
  });

  const getUser = () => {
    return new Promise((resolve, reject) => {
      const userString = localStorage.getItem("userData");

      if (userString) {
        resolve(JSON.parse(userString));
      } else {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            let userData = JSON.stringify(user);

            localStorage.setItem("userData", userData);
            resolve(user);
          } else {
            reject(new Error("user is not defined"));
          }
        });
      }
    });
  };

  return { username, getUser };
}
