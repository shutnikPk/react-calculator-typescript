import React, { FC } from "react";
interface OperatorProps {
  value: string;
  getCharHandler: (char: string, flag: boolean) => void;
}

const Operator: FC<OperatorProps> = ({ value, getCharHandler }) => {
  return <div onClick={() => getCharHandler(value, true)}>{value}</div>;
};

export default Operator;
