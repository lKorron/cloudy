import { mount } from "@vue/test-utils";
import BroadCrumpItem from "@/components/BroadCrumpItem.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = mount(BroadCrumpItem, {
      props: {
        value: "Miku",
      },
    });

    const todo = wrapper.get("[data-test='todo']");

    console.log(todo.text());
    expect(todo.text()).toBe("Miku");
  });
});
