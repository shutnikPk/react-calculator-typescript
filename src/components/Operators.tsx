import React, { FC } from "react";

interface OperatorsProps {}

const Operators: FC<OperatorsProps> = () => {
  return (
    <div className="operators">
      <div>+</div>
      <div>-</div>
      <div>*</div>
      <div>/</div>
    </div>
  );
};

export default Operators;
