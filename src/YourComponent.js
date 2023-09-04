import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const YourComponent = (inputData1, inputData2, outputData) => {
  const [input1Value, setInput1Value] = useState("");
  const [input2Value, setInput2Value] = useState("");

  useEffect(() => {
    // Load saved values from localStorage when the component mounts
    const savedInput1Value = localStorage.getItem("TEST:input1Value");
    const savedInput2Value = localStorage.getItem("TEST:input2Value");

    if (!inputData1) {
      if (savedInput1Value) setInput1Value(savedInput1Value);
    } else {
      setInput1Value(inputData1);
    }

    if (!inputData1) {
      if (savedInput2Value) setInput2Value(savedInput2Value);
    } else {
      setInput2Value(inputData2);
    }
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
    <div className={styles.container}>
      <input
        type="text"
        value={input1Value}
        onChange={handleInputChange1}
        placeholder="Input 1"
        className={styles.input}
      />
      <input
        type="text"
        value={input2Value}
        onChange={handleInputChange2}
        placeholder="Input 2"
        className={styles.input}
      />

      <button
        className={styles.button}
        onClick={() => outputData({ input1Value, input2Value })}
      >
        OUTPUT!
      </button>
    </div>
  );
};

export default YourComponent;
