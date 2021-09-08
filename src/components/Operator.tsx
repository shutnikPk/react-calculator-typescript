import React, { FC } from "react";
interface OperatorProps {
  value: string;
  getCharHandler: (char:string) => string;
}

const Operator: FC<OperatorProps> = ({ value, getCharHandler }) => {
  return <div onClick={() => getCharHandler(value)}>{value}</div>;
};

export default Operator;
