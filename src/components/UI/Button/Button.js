import React from "react";

import { ButtonStyle } from "./ButtonStyle";

const Button = (props) => {
  return (
    <ButtonStyle type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </ButtonStyle>
  );
};

export default Button;
