import React, { FC } from "react";

interface EqualProps {
  changeOutputHandler: () => void;
}

const Equal: FC<EqualProps> = ({ changeOutputHandler }) => {
  return (
    <div onClick={changeOutputHandler} className="equal">
      =
    </div>
  );
};

export default Equal;
