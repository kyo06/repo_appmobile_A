import React from "react";
import css from "./VolRetour.module.css";


const VolRetour = ({vols}) => {


  return (
    <>
            
      <div className={css.orange}>
          <img className={css.img} src="pencil.png" alt="icon pencil"/>
          
          <p>Retour :  {vols.AeroportArv + " -> " + vols.AeroportDep} <br />
            {vols.DateR} <br />
            Dép {vols.HeureDep + " Arr " + vols.HeureArr} <br />
            Vos Tarifs : {vols.TypePers + " " + vols.NbPers + " x " + vols.Prix} €
          </p>
      </div>

    </>
  );

};

export default VolRetour;
