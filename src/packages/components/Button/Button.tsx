import React from "react";

const Button: React.FunctionComponent<Props> = ({ children, type }: Props) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type}>{children}</button>
);

Button.defaultProps = {
  type: "button",
};

export type Props = {
  type?: "submit" | "button" | "reset";
  children: React.ReactNode;
};

export default Button;
