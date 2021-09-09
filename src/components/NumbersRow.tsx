import React, { FC } from "react";
import Button from "./Button";

interface NumbersRowProps {
  columns: number;
  rowNumbers: string[];
  getChar: (char: string) => void;
}

const NumbersRow: FC<NumbersRowProps> = ({ columns, rowNumbers, getChar }) => {
  const arr: number[] = [];
  for (let i: number = 0; i < columns; i++) {
    arr.push(i);
  }
  return (
    <div className="numbers">
      {arr.map((e, i) => (
        <Button key={i} getCharHandler={getChar} value={rowNumbers[i]} />
      ))}
    </div>
  );
};

export default NumbersRow;
