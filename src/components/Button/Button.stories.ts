import type { Meta, StoryObj } from "@storybook/vue3";
import { userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import Button from "./Button.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Example/Button",
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["small", "medium", "large"] },
    backgroundColor: { control: "color" },
    onClick: { action: "clicked" },
  },
  args: { primary: false }, // default value
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
  play: async ({ args, canvasElement, step }) => {
    await step("interacting phase", async () => {
      await userEvent.click(canvasElement.querySelector("button")!);
      await userEvent.click(canvasElement.querySelector("button")!);
      await userEvent.click(canvasElement.querySelector("button")!);
      await userEvent.click(canvasElement.querySelector("button")!);
    });
    await userEvent.click(canvasElement.querySelector("button")!);
    await userEvent.click(canvasElement.querySelector("button")!);

    await expect(canvasElement.querySelector("button")?.textContent).toBe(
      "Button"
    );
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    label: "Button",
    size: "large",
  },
};

export const Small: Story = {
  args: {
    label: "Button",
    size: "small",
  },
};
