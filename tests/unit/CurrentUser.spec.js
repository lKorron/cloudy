import { mount } from "@vue/test-utils";
import CurrentUser from "@/components/CurrentUser";
import { signOut } from "@/composables/auth";

jest.mock("@/composables/auth", () => {
  return {
    __esModule: true,
    signOut: jest.fn(() => {}),
  };
});

describe("CurrentUser.vue", () => {
  let wrapper;
  let user;

  beforeEach(() => {
    user = {
      displayName: "Ivan",
    };

    wrapper = mount(CurrentUser, {
      props: {
        user,
      },
    });
  });

  it("should render username", () => {
    let name = wrapper.get("[data-test='username']");

    expect(name.text()).toBe("Ivan");
  });

  it("should sign out by clicking button", async () => {
    let logoutButton = wrapper.get("[data-test='logoutButton'");

    await logoutButton.trigger("click");

    expect(signOut).toBeCalledTimes(1);
  });
});
