import React from "react";
import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

const Tile = ({ number }: Props) => {
  const theme = useTheme();
  return (
    <div
      className={css({
        font: theme.fonts.tile,
      })}
    >
      {number}
    </div>
  );
};

export type Props = {
  number: number;
};

export default Tile;
