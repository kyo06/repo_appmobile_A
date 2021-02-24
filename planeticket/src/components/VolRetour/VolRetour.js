import React from "react";
import css from "./VolRetour.module.css";


const VolRetour = ({vols}) => {


  return (
    <>
            
            <div className={css.orange}>
          <p>Aller :  {vols.AeroportArv + " -> " + vols.AeroportDep} <br />
            {vols.DateR + " -> " + vols.Prix} <br />
            Dép {vols.HeureDep + " Arr " + vols.HeureArr} <br />
            Vos Tarifs : {vols.TypePers + " " + vols.NbPers + " x " + vols.Prix} €
          </p>
          </div>

    </>
  );

};

export default VolRetour;
