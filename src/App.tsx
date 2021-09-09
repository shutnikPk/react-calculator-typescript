import React, { useState } from "react";
import Input from "./components/Input";
import Operators from "./components/Operators";
import NumbersRow from "./components/NumbersRow";
import LeftPanel from "./components/LeftPanel";
import Equal from "./components/Equal";
import evaluate from "./utils/eval.js";

let isLastCharOperator = false;

function App() {
  const [output, setOtutput] = useState("0");

  const row: number = 4;

  const getChar = (char: string, isOperator: boolean = false): void => {
    if (isLastCharOperator && isOperator) {
      let expression: string[] = output.split("");
      expression[expression.length - 1] = char;
      setOtutput(expression.join(""));
      return;
    }

    if (char === "AC") {
      isLastCharOperator = isOperator;
      setOtutput("0");
      return;
    }
    if (output === "0" && char === "0") return;
    if (output === "0" && char !== "0") {
      setOtutput(char);
      return;
    }
    setOtutput(output + char);
    isLastCharOperator = isOperator;
    return;
  };

  const changeOutput = (): void => {
    setOtutput(evaluate(output));
  };

  return (
    <div>
      <div className="calculator">
        <Input output={output} />
        <div className="buttons">
          <Operators getChar={getChar} />
          <LeftPanel getChar={getChar} rows={row} />
          <Equal changeOutputHandler={changeOutput} />
        </div>
      </div>
    </div>
  );
}

export default App;
