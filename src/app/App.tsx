import { Global, useTheme, css } from "@emotion/react";
import Button from "@cloudtunes/components/Button";
import NumbersMatrix from "@cloudtunes/components/NumbersMatrix";
import Globals from "@cloudtunes/themes/default/globals";

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
        `}
      />
      <section>
        <div>App</div>
        <Button>TEST</Button>
        <NumbersMatrix lower={1} upper={100} lineLength={10} />
      </section>
    </>
  );
};

export default App;
