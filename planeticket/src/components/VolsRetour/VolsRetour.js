import React from "react";
import css from "./VolsRetour.module.css";

const VolsRetour = ({vols}) => {

  return (
    <>
          <div>    
             <p className={css.lign}><img src="miniPlane.jpg" alt="icon miniplane" height="20"/> Retour :  {vols.AeroportArv  + " à déstination de " + vols.AeroportDep}</p>
          </div>

          <div className={css.orange}>
            <label>{vols.DateR + " -> " + vols.Prix} € <br />
            Dép {vols.HeureDep + " Arr " + vols.HeureArr}</label> 
            <input className={css.checkbox} type="radio" id="volsRetour" name="volsRetour" />
          </div>
    </>
  );


};

export default VolsRetour;
