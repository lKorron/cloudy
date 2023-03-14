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
        baseItem: null,
        clickedItem: "c",
        rendered: "a/b/c",
        emitted: "a/b/c",
      },
      {
        itemList: ["photo", "Luga", "nature"],
        baseItem: null,
        clickedItem: "photo",
        rendered: "photo",
        emitted: "photo",
      },
      {
        itemList: ["photo", "Luga", "nature"],
        baseItem: "Leto",
        clickedItem: "photo",
        rendered: "Leto/photo",
        emitted: "photo",
      },
      {
        itemList: ["photo", "Luga", "nature"],
        baseItem: "Leto",
        clickedItem: "Leto",
        rendered: "Leto",
        emitted: "",
      },
    ];

    testCases.forEach(
      ({ itemList, baseItem, clickedItem, rendered, emitted }) => {
        it("should rewrite path after click and emit it", async () => {
          const wrapper = mount(BroadCrump, {
            props: {
              itemList,
              baseItem,
            },
          });

          if (clickedItem === baseItem) {
            await wrapper.vm.baseItemClick(clickedItem);
          } else {
            await wrapper.vm.click(clickedItem);
          }

          const element = wrapper.find("div");

          expect(element.text()).toBe(rendered);

          expect(wrapper.emitted("itemClicked").at(0).at(0)).toBe(emitted);
        });
      }
    );
  });
});
