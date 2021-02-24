import React from "react";
import css from "./VolsRetour.module.css";

const VolsRetour = ({vols}) => {

  return (
    <>
          <div>    
             <p className={css.lign}><img src="miniPlane.jpg" alt="icon miniplane" height="20"/> Retour :  {vols.AeroportArv  + " à déstination de " + vols.AeroportDep}</p>
          </div>

          <div className={css.orange}>
            <p>{vols.DateR + " -> " + vols.Prix}</p>
            <p>Dép {vols.HeureDep + " Arr " + vols.HeureArr}</p>
        
          </div>
    </>
  );


};

export default VolsRetour;
