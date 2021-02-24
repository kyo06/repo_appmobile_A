import React from "react";
import css from './ButtonCancel.module.css'


const ButtonCancel = ({children}) => {
  return <><button className={css.Buttons}> {children} </button> </>;
};

export default ButtonCancel;
