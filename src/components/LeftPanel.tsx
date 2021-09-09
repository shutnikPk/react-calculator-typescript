import React, { FC } from "react";
import NumbersRow from "./NumbersRow";
interface LeftPanelProps {
  rows: number;
  getChar: (char: string) => void;
}

const LeftPanel: FC<LeftPanelProps> = ({ rows, getChar }) => {
  const columns: number = 3;
  const a = [
    ["9", "8", "7"],
    ["6", "5", "4"],
    ["3", "2", "1"],
    ["0", ".", "AC"],
  ];
  const arr: number[] = [];
  for (let i = 0; i < rows; i++) {
    arr.push(i);
  }
  return (
    <div className="leftPanel">
      {arr.map((e, i) => (
        <NumbersRow
          key={i}
          getChar={getChar}
          columns={columns}
          rowNumbers={a[i]}
        />
      ))}
    </div>
  );
};

export default LeftPanel;
