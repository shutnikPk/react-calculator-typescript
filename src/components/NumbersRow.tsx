import React, { FC } from "react";
import Button from "./Button";

interface NumbersRowProps {
  columns: number;
  rowNumbers: string[];
}

const NumbersRow: FC<NumbersRowProps> = ({ columns, rowNumbers }) => {
  const arr: number[] = [];
  for (let i: number = 0; i < columns; i++) {
    arr.push(i);
  }
  return (
    <div className="numbers">
      {arr.map((e, i) => (
        <Button value={rowNumbers[i]} />
      ))}
    </div>
  );
};

export default NumbersRow;
