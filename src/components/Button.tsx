import React, { FC } from "react";

export interface ButtonProps {
  value: string;
}

const Button: FC<ButtonProps> = ({ value }) => {
  return <div>{value}</div>;
};

export default Button;
