import { mount } from "@vue/test-utils";
import BroadCrumpItem from "@/components/BroadCrumpItem";

describe("BroadCrumpItem.vue", () => {
  it("renders value from prop", () => {
    const testValue = "testValue";

    const wrapper = mount(BroadCrumpItem, {
      props: {
        value: testValue,
      },
    });

    const item = wrapper.get("[data-test='item']");

    expect(item.text()).toBe(testValue);
  });

  it("do not render /, if component last", () => {
    const wrapper = mount(BroadCrumpItem, {
      props: {
        last: true,
      },
    });
    const slash = wrapper.find("[data-test='slash']");

    expect(slash.exists()).toBe(false);
  });

  it("emit the name", () => {
    const wrapper = mount(BroadCrumpItem, {
      props: {
        value: "name",
      },
    });

    const item = wrapper.get("[data-test='item']");

    item.trigger("click");
    item.trigger("click");

    const clickEvent = wrapper.emitted("itemClicked");

    expect(clickEvent).toHaveLength(2);
    expect(clickEvent[0]).toEqual(["name"]);
  });
});
