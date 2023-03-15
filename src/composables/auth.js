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
      username.value = user.displayName;
      uid.value = user.uid;
    }
  });

  const getUser = () => {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          resolve(user);
        } else {
          reject("user is not defined");
        }
      });
    });
  };

  return { username, getUser };
}
