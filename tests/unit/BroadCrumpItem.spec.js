import { mount } from "@vue/test-utils";
import BroadCrumpItem from "@/components/BroadCrumpItem";

describe("BroadCrumpItem.vue", () => {
  let name;
  let wrapper;

  beforeEach(() => {
    name = "name";

    wrapper = mount(BroadCrumpItem, {
      props: { value: name, last: true },
    });
  });

  it("renders value from prop", () => {
    const item = wrapper.get("[data-test='item']");

    expect(item.text()).toBe(name);
  });

  it("do not render /, if component last", async () => {
    let slash = wrapper.find("[data-test='slash']");
    expect(slash.exists()).toBe(false);

    await wrapper.setProps({ last: false });
    slash = wrapper.find("[data-test='slash']");
    expect(slash.exists()).toBe(true);
  });

  it("emit the name on click", () => {
    const item = wrapper.get("[data-test='item']");

    item.trigger("click");
    item.trigger("click");

    const clickEvent = wrapper.emitted("itemClicked");

    expect(clickEvent).toHaveLength(2);
    expect(clickEvent[0]).toEqual([name]);
  });
});
