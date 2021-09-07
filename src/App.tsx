import React from "react";
import Input from "./components/Input";
import Operators from "./components/Operators";
import NumbersRow from "./components/NumbersRow";
import LeftPanel from "./components/LeftPanel";

function App() {

  return (
    <div>
      <div className="calculator">
        <Input />
        <div className="buttons">
          <Operators />
          <LeftPanel rows={4} />
          <div className="equal">=</div>
        </div>
      </div>
    </div>
  );
}

export default App;
