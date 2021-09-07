import React, { FC } from "react";
import NumbersRow from "./NumbersRow";
interface LeftPanelProps {
  rows: number;
}

const LeftPanel: FC<LeftPanelProps> = ({ rows }) => {
      const obj = {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "0": "0",
        ".": ".",
      };
  const arr: number[] = [];
  for (let i = 0; i < rows; i++) {
    arr.push(i);
  }
  return (
    <div className="leftPanel">
      {arr.map((e) => (
        <NumbersRow columns={3} />
      ))}
    </div>
  );
};

export default LeftPanel;
