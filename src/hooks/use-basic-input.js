import { useState } from "react";

const useBasicInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const isInputValid = validateValue(enteredValue);
  const isError = !isInputValid && inputTouched;

  const inputHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const blurHandler = () => {
    setInputTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setInputTouched(false);
  };

  return {
    value: enteredValue,
    isValid: isInputValid,
    isError,
    inputHandler,
    blurHandler,
    reset,
  };
};

export default useBasicInput;
