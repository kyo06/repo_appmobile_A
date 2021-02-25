import React from "react";
import css from './Total.module.css'

const Total = ({vols}) => {

  return (
    <>
      <div>
        <img src="visa.png" alt="icon visa" height="30px"/> <br />
        <img src="mastercard.png" alt="icon visa" height="18px"/>
      </div>

      <div>
        <p className={css.total}>TOTAL : {(vols.Prix)*(vols.Adulte)*2} € </p>
      </div>
      <div>
        <p className={css.italic}>Non remboursable. Modifiable sous réserve de frais. <br />
        Le prix inclut tous les frais et taxes applicables.</p>
      </div>
</>

  )


};

export default Total;
