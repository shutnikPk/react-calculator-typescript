import React, { FC } from "react";

interface InputProps {
  output: string;
}

const Input: FC<InputProps> = ({ output }) => {
  return <div className="input">{output}</div>;
};

export default Input;
