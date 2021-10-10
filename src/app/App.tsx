import { Global, useTheme, css } from "@emotion/react";
import NumbersMatrix from "@cloudtunes/components/NumbersMatrix";
import Globals from "@cloudtunes/themes/default/globals";
import Test from "./Test";

const App = () => {
  const theme = useTheme();

  return (
    <>
      <Global styles={Globals} />
      <Global
        styles={css`
          html {
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            font-family: ${theme.fonts.default};
            margin: 0;
            height: 100vh;
            font-size: 1.75vh;
          }

          #app {
            width: 100%;
            height: 100%;
            background-color: ${theme.colors.secondary};
          }
        `}
      />
      <section
        css={css`
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <Test />
        <NumbersMatrix lower={1} upper={100} />
      </section>
    </>
  );
};

export default App;
