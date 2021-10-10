import "@testing-library/jest-dom";

import React from "react";
import { render, screen } from "@testing-library/react";
import NumbersMatrix from "./NumbersMatrix";

test("it renders component", async () => {
  render(<NumbersMatrix lower={1} upper={100} />);

  expect(await screen.findByText("Board")).toBeVisible();
});
