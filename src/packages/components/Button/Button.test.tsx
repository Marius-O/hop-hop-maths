import "@testing-library/jest-dom";

import React from "react";
import { render, screen } from "@testing-library/react";
import Button, { Props as ButtonProps } from "./Button";

test.each`
  type
  ${"submit"}
  ${"reset"}
  ${"button"}
`("it renders button of type $type", async ({ type }: Partial<ButtonProps>) => {
  const buttonText = "TEST";
  render(<Button type={type}>{buttonText}</Button>);

  expect(await screen.findByText(buttonText)).toBeVisible();
});

test("it defaults type to 'button' button", async () => {
  const buttonText = "TEST";
  render(<Button>{buttonText}</Button>);

  const element = await screen.findByText(buttonText);
  expect(element.getAttribute("type")).toBe("button");
});
