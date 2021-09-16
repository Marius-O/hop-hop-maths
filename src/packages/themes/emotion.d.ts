import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
    };
    fonts: {
      default: string;
      tile: string;
    };
  }
}
