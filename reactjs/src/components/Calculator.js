import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  useRef,
} from "react";

import "./assets/css/calculator.css";
import Double from "./Double";

function Calculator() {
  const [dollar, setDollar] = useState(0);
  const [pound, setPound] = useState(0);
  //const [theme, setTheme] = useState("light");

  const count = useRef(0);

  count.current += 1;

  const dollarInput = useRef();
  const calculatorBody = useRef();

  const [rate, setRate] = useState(2);
  const double = useMemo(() => doubleTheDollar(dollar), [dollar]);
  const doubleFunction = useCallback(
    (value) => doubleTheDollar(value, rate),
    [rate]
  );

  // const pound = useRef(dollar*0.76);

  useEffect(() => {
    setPound(0.76 * dollar); //whenever dollar is changed
  }, [dollar]);

  useEffect(() => {
    setDollar(pound / 0.76); //generated whenever pound is changed
  }, [pound]);

  return (
    <div ref={calculatorBody}> 
    {/* className={theme} */}
      <h3>I rendered {count.current} time</h3>
      <h1>Calculator</h1>
      <div>
        Enter $:
        <input
          ref={dollarInput}
          type="number"
          value={dollar}
          onChange={(e) => setDollar(e.target.value)}
        />
      </div>

      <div>
        Enter pound:
        <input
          type="number"
          value={pound}
          onChange={(e) => setPound(e.target.value)}
        />
      </div>

      <div>Rupees = {dollar * 122}</div>
      <div>Euro = {pound * 0.84}</div>
      <Double doubleFunction={doubleFunction} value={dollar} />
      <button
        onClick={() =>
        //   setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
            calculatorBody.current.classList.toggle("dark")
        }
      >
        Change Theme
      </button>
      <button
        onClick={() => {
          dollarInput.current.focus()
        }}
      >
        Focus
      </button>
    </div>
  );
}

function doubleTheDollar(dollar, rate) {
  for (let i = 0; i < 99999; i++) {
    for (let j = 0; j < 999; j++) {}
  }

  return rate * dollar;
}

export default Calculator;
