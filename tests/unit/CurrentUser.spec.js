import { mount, shallowMount } from "@vue/test-utils";
import CurrentUser from "@/components/CurrentUser";
import AsyncPupup from "@/components/AsyncPopup";
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
      displayName: "Korron",
    };

    wrapper = mount(CurrentUser, {
      props: {
        user,
      },
    });
  });

  it("should render username", () => {
    let name = wrapper.get("[data-test='username']");

    expect(name.text()).toBe("Korron");
  });

  it("should sign out by clicking button", async () => {
    const mockOpen = (wrapper.vm.openPopup = jest.fn());

    let logoutButton = wrapper.get("[data-test='logoutButton'");

    await logoutButton.trigger("click");

    expect(mockOpen).toHaveBeenCalled();
  });
});
