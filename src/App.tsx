import React, { useState } from "react";
import Input from "./components/Input";
import Operators from "./components/Operators";
import NumbersRow from "./components/NumbersRow";
import LeftPanel from "./components/LeftPanel";

function App() {
  const [output, setOtutput] = useState("0");

  const row: number = 4;

  const getChar = (char: string): string => {
    console.log(char);
    return char;
  };

  return (
    <div>
      <div className="calculator">
        <Input output={output} />
        <div className="buttons">
          <Operators getChar={getChar} />
          <LeftPanel rows={4} />
          <div className="equal">=</div>
        </div>
      </div>
    </div>
  );
}

export default App;
