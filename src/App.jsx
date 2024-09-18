import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    const operators = ["+", "-", "*", "/"];
    const lastChar = input[input.length - 1];

    if (input === "0") {
      if (value === ".") {
        setInput(input + value); // Permitir '0.'
      } else if (!operators.includes(value)) {
        setInput(value); // Sustituir '0' inicial por el número presionado
      }
    } else {
      if (operators.includes(lastChar) && operators.includes(value)) {
        if (value === "-" && lastChar !== "-") {
          setInput(input + value); // Permitir '-' después de otro operador
        } else {
          return; // No permitir múltiples operadores seguidos excepto '-'
        }
      } else {
        setInput(input + value);
      }
    }
  };

  const handleClear = () => {
    setInput("0");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      const evaluatedResult = eval(input.replace(/[^-()\d/*+.]/g, "")); // Evaluar la expresión de forma segura
      setResult(evaluatedResult.toString());
      setInput(evaluatedResult.toString());
      setInput("0");
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="main">
      <div className="calculator">
        <div className="display" id="display">
          <input type="text" value={input} readOnly />
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
          <button onClick={() => handleClick("1")} id="one">
            1
          </button>
          <button onClick={() => handleClick("2")} id="two">
            2
          </button>
          <button onClick={() => handleClick("3")} id="three">
            3
          </button>
          <button onClick={() => handleClick("+")} id="add">
            +
          </button>
          <button onClick={() => handleClick("4")} id="four">
            4
          </button>
          <button onClick={() => handleClick("5")} id="five">
            5
          </button>
          <button onClick={() => handleClick("6")} id="six">
            6
          </button>
          <button onClick={() => handleClick("-")} id="subtract">
            -
          </button>
          <button onClick={() => handleClick("7")} id="seven">
            7
          </button>
          <button onClick={() => handleClick("8")} id="eight">
            8
          </button>
          <button onClick={() => handleClick("9")} id="nine">
            9
          </button>
          <button onClick={() => handleClick("*")} id="multiply">
            *
          </button>
          <button onClick={() => handleClick(".")} id="decimal">
            .
          </button>
          <button onClick={() => handleClick("0")} id="zero">
            0
          </button>
          <button onClick={() => handleClick("/")} id="divide">
            /
          </button>
          <button onClick={handleClear} id="clear">
            AC
          </button>
          <button onClick={handleCalculate} id="equals">
            =
          </button>
        </div>
      </div>
      <a href="https://crimson3d.github.io/frontend-mentor-html-css-challenges/index.html">Made by José Antonio Sánchez Fuentes</a>
    </div>
  );
}

export default App;
