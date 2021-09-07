import React, { FC } from "react";
import Button from "./Button";

interface NumbersRowProps {
  columns: number;
}

const NumbersRow: FC<NumbersRowProps> = ({ columns }) => {
  const arr: number[] = [];
  for (let i: number = 0; i < columns; i++) {
    arr.push(i);
  }

  console.log(arr);
  return (
    <div className="numbers">
      {arr.map(() => (
        <Button />
      ))}
    </div>
  );
};

export default NumbersRow;
