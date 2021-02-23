import React from "react";
import css from "./Buttons.module.css";

const Buttons = ({children}) => {
  return <><button className={css.Buttons}> {children} </button> </>;
};

export default Buttons;
