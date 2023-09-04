
import React, { useState, useEffect } from "react";

const YourComponent = () => {
  const [input1Value, setInput1Value] = useState<string>("");
  const [input2Value, setInput2Value] = useState<string>("");

  useEffect(() => {
    // Load saved values from localStorage when the component mounts
    const savedInput1Value = localStorage.getItem("input1Value");
    const savedInput2Value = localStorage.getItem("input2Value");

    if (savedInput1Value) setInput1Value(savedInput1Value);
    if (savedInput2Value) setInput2Value(savedInput2Value);
  }, []);

  const handleInputChange1 = (event) => {
    const newValue = event.target.value;
    setInput1Value(newValue);
    localStorage.setItem("TEST:input1Value", newValue);
  };

  const handleInputChange2 = (event) => {
    const newValue = event.target.value;
    setInput2Value(newValue);
    localStorage.setItem("TEST:input2Value", newValue);
  };

  return (
    <div>
      <input
        type="text"
        value={input1Value}
        onChange={handleInputChange1}
        placeholder="Input 1"
      />
      <input
        type="text"
        value={input2Value}
        onChange={handleInputChange2}
        placeholder="Input 2"
      />
    </div>
  );
};
export default YourComponent;
