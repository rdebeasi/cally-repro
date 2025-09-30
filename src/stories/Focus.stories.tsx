import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";
import { listeners } from "../vanilla-js-logger";

import { DatePicker } from "./DatePicker";
const RenderDemo = () => {
  // Set up event listeners after the app has rendered
  // There's probably a better way to do this :)
  setTimeout(() => {
    listeners(
      document.querySelector<HTMLButtonElement>("#example-button")!,
      document.querySelector<HTMLDivElement>("#container")!,
      document.querySelector<HTMLPreElement>("#output")!
    );
  }, 0);
  return (
    <div id="container" tabIndex={0}>
      <h1>Vite + TypeScript</h1>
      <div className="card">
        <button id="example-button" type="button">
          Click me
        </button>
      </div>
      <p>
        Click the button to focus the button. Click the container to focus the
        container.
      </p>
      <p>
        Note that focusing the button does not trigger a focus event on the
        container.
      </p>
      <pre id="output"></pre>
    </div>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Focus Handler",
  component: RenderDemo,
  render: () => {
    return RenderDemo();
  },
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
