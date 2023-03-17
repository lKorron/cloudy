import { initializeApp } from "firebase/app";
import { useAuth } from "@/composables/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtkvfPAph6V8TFIPw3z83Wa9aq8WeC_OE",
  authDomain: "cloudy-e2f8e.firebaseapp.com",
  projectId: "cloudy-e2f8e",
  storageBucket: "cloudy-e2f8e.appspot.com",
  messagingSenderId: "948042477004",
  appId: "1:948042477004:web:a1aa1bb08f06da402c4169",
};

initializeApp(firebaseConfig);

describe("getUser", () => {
  it("should return promise with userData", () => {
    const { getUser } = useAuth();
    // return getUser().then((user) => console.log(user));

    expect(getUser()).rejects.toEqual(new Error("user is not defined"));
  });
});
