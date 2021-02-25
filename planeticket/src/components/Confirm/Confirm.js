import React, { useState } from "react";
import Title from "../Title";
import VolAller from "../VolAller";
import VolRetour from "../VolRetour";
import css from './Confirm.module.css'


import {ListAller} from "../../utils/ListAller";

const Confirm = () => {

  const initialList = [
    {
      id:1,
      AeroportDep:"Lyon",
      AeroportArv:"Madrid",
      Date:"Dim.22 Fév",
      DateR:"Jeu.25 Fév",
      Prix:26,
      HeureDep:"12:35",
      HeureArr:"14:25",
      TypePers:"Adulte",
      NbPers:2
    },
  ];

  const [list, setList] = useState(ListAller);

  return (
    <>
    <div className={css.container}>

    <Title>Confirmer votre réservation</Title>

   {ListAller.map((t) => (
        <VolAller
          vols={t}
          key= {t.id} 
          />
      ))}

  {ListAller.map((t) => (
        <VolRetour
          vols={t}
          key= {t.id} 
          />
      ))}

  {list.map((t) => (
    
        <>
          <div>
            <img src="visa.png" alt="icon visa" height="30px"/> <br />
            <img src="mastercard.png" alt="icon visa" height="18px"/>
          </div>
    
          <div>
            <p className={css.total}>TOTAL : {(t.Prix)*(t.Adulte)*2} € </p>
          </div>
          <div>
            <p className={css.italic}>Non remboursable. Modifiable sous réserve de frais. <br />
            Le prix inclut tous les frais et taxes applicables.</p>
          </div>
        </>
      ))}



<button className={css.button} type="submit">Réserver</button>
    </div>
    </>
  );


};

export default Confirm;
