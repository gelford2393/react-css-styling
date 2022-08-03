import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";
import { FormControl } from "./CourseInputStyle";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    event.target.value.trim().length > 0 && setIsValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const validInput = (stat, value) => {
      setIsValid(stat);
      props.onAddGoal(value);
    };
    enteredValue.trim().length === 0
      ? setIsValid(false)
      : validInput(true, enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${
          !isValid ? styles.invalid : ""
        }`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
