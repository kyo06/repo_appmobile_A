import React from "react";
import css from "./VolAller.module.css";

const VolAller = ({vols}) => {

  return (
    <>
         

          <div className={css.orange}>
          <p>Aller :  {vols.AeroportDep + " -> " + vols.AeroportArv} <br />
            {vols.Date + " -> " + vols.Prix} <br />
            Dép {vols.HeureDep + " Arr " + vols.HeureArr} <br />
            Vos Tarifs : {vols.TypePers + " " + vols.NbPers + " x " + vols.Prix}
          </p>
        
          </div>
    </>
  );

};

export default VolAller;
