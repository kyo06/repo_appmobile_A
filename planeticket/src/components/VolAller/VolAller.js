import React from "react";
import css from "./VolAller.module.css";

const VolAller = ({vols}) => {

  return (
    <>
          <div>    
             <p className={css.lign}><img src="miniPlane.jpg" alt="icon miniplane" height="20"/> Aller :  {vols.AeroportDep + " à déstination de " + vols.AeroportArv}</p>
          </div>

          <div className={css.orange}>
            <p>{vols.Date + " -> " + vols.Prix}</p>
            <p>Dép {vols.HeureDep + " Arr " + vols.HeureArr}</p>
        
          </div>
    </>
  );

};

export default VolAller;
