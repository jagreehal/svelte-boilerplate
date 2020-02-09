import "@testing-library/jest-dom/extend-expect";

import { render, fireEvent } from "@testing-library/svelte";

import Component from "./HelloWorld.svelte";

test("can render component", () => {
  const { getByText } = render(Component, { name: "World" });

  expect(getByText("Hello World!")).toBeInTheDocument();
});

test("changes button text on click", async () => {
  const { getByText } = render(Component, { name: "World" });
  const button = getByText("Click Me");

  await fireEvent.click(button);

  expect(button.textContent).toBe("Button Clicked");
});
