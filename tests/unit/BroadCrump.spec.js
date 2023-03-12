import { mount } from "@vue/test-utils";
import BroadCrump from "@/components/BroadCrump";

describe("BroadCrump.vue", () => {
  describe("when component created", () => {
    const testCases = [
      {
        itemList: ["a", "b", "c", "d"],
        result: "a/b/c/d",
      },
      {
        itemList: ["a"],
        result: "a",
      },
      {
        itemList: ["start", "b", "c", "d", "end"],
        result: "start/b/c/d/end",
      },
      {
        itemList: [],
        result: "",
      },
    ];

    testCases.forEach(({ itemList, result }) => {
      it("should render incoming array", () => {
        const wrapper = mount(BroadCrump, {
          props: { itemList },
        });

        const element = wrapper.find("div");

        expect(element.text()).toBe(result);
      });
    });
  });

  describe("when user click on crump item", () => {
    const testCases = [
      {
        itemList: ["a", "b", "c", "d"],
        clickedItem: "c",
        result: "a/b/c",
      },
      {
        itemList: ["photo", "Luga", "nature"],
        clickedItem: "photo",
        result: "photo",
      },
    ];

    testCases.forEach(({ itemList, clickedItem, result }) => {
      it("should rewrite path after click and emit it", async () => {
        const wrapper = mount(BroadCrump, {
          props: {
            itemList,
          },
        });

        await wrapper.vm.click(clickedItem);

        const element = wrapper.find("div");

        expect(element.text()).toBe(result);

        expect(wrapper.emitted("itemClicked").at(0).at(0)).toBe(clickedItem);
      });
    });
  });
});
