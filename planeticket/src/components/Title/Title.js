import React from "react";
import css from "./Title.module.css";

const Title = ({children}) => {
  return <><h1 className={css.title}> {children} </h1> <hr></hr></>;
};

export default Title;
