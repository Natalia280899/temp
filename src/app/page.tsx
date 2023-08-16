"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

const Home = () => {
  const [input1Value, setInput1Value] = useState<string>("");
  const [input2Value, setInput2Value] = useState<string>("");

  useEffect(() => {
    // Load saved values from localStorage when the component mounts
    const savedInput1Value = localStorage.getItem("input1Value");
    const savedInput2Value = localStorage.getItem("input2Value");

    if (savedInput1Value) setInput1Value(savedInput1Value);
    if (savedInput2Value) setInput2Value(savedInput2Value);
  }, []);

  const handleInputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInput1Value(newValue);
    localStorage.setItem("TEST:input1Value", newValue);
  };

  const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInput2Value(newValue);
    localStorage.setItem("TEST:input2Value", newValue);
  };

  return (
    <div>
      <input
        className={styles.input}
        type="text"
        value={input1Value}
        onChange={handleInputChange1}
        placeholder="Input 1"
      />
      <input
        className={styles.input}
        type="text"
        value={input2Value}
        onChange={handleInputChange2}
        placeholder="Input 2"
      />
    </div>
  );
};

export default Home;
