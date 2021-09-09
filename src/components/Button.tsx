import React, { FC } from "react";

export interface ButtonProps {
  value: string;
  getCharHandler: (char: string) => void;
}

const Button: FC<ButtonProps> = ({ value, getCharHandler }) => {
  return <div onClick={() => getCharHandler(value)}>{value}</div>;
};

export default Button;
