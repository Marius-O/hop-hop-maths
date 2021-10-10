import { css, useTheme } from "@emotion/react";

const NumbersMatrix = ({ lower, upper }: Props) => {
  const theme = useTheme();

  return (
    <section
      css={css`
        display: inline-flex;
        flex-flow: column;
        align-items: flex-end;
      `}
    >
      {[...Array(Math.ceil((upper - lower) / 10)).keys()].map((line) => (
        <div
          css={css`
            display: flex;
          `}
        >
          {[...Array(10).keys()].map((index) => (
            <div
              css={css`
                padding: 0.5rem;
                text-align: right;
                width: 3rem;
                height: 3rem;
                background-color: ${theme.colors.primary};
              `}
            >
              {line * 10 + index + 1}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export type Props = {
  lower: number;
  upper: number;
};

export default NumbersMatrix;
