import "@testing-library/jest-dom";

import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "@emotion/react";
import { render, screen } from "@testing-library/react";
import defaultTheme from "@cloudtunes/themes/default";
import Tile, { Props as TileProps } from "./Tile";

const Themed = ({ children }: PropsWithChildren<any>) => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
);

test.each`
  number
  ${4}
  ${45}
`(
  "renders tile with number $number",
  async ({ number }: Partial<TileProps>) => {
    render(
      <Themed>
        <Tile number={number} />
      </Themed>
    );

    const element = await screen.getByText(number);
    expect(element).toBeVisible();
  }
);
