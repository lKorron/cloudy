import { mount } from "@vue/test-utils";
import CurrentUser from "@/components/CurrentUser";

describe("CurrentUser.vue", () => {
  let wrapper;
  let user;

  beforeEach(() => {
    user = {
      displayName: "Ivan",
    };

    const wrapper = mount(CurrentUser, {
      props: {
        user,
      },
    });
  });

  it("should render username", () => {
    let name = wrapper.get("[data-test='username']");

    expect(name.text()).toBe("Ivan");
  });

  it("should logout by clicking button", async () => {
    let logoutButton = wrapper.get("[data-test='logoutButton'");

    await logoutButton.trigger("click");

    expect(user.displayName).toBeFalsy();
  });
});
