import React, { FC } from "react";
import Operator from "./Operator";

interface OperatorsProps {
  getChar: (char: string, flag?: boolean) => void;
}

const Operators: FC<OperatorsProps> = ({ getChar }) => {
  const a: string[] = ["+", "-", "*", "/"];
  return (
    <div className="operators">
      {a.map((e, i) => (
        <Operator getCharHandler={getChar} key={i} value={e} />
      ))}
    </div>
  );
};

export default Operators;
