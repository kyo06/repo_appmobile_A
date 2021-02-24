import React, { useState } from "react";
import NavBar from "../NavBar";
import Title from "../Title";
import Buttons from "../Buttons";
import VolAller from "../VolAller";
import VolRetour from "../VolRetour";


const Confirm = () => {

  const initialList = [
    {
      id:1,
      AeroportDep:"Lyon",
      AeroportArv:"Madrid",
      Date:"Dim.22 Fév",
      DateR:"Jeu.25 Fév",
      Prix:"26,00€",
      HeureDep:"12:35",
      HeureArr:"14:25",
      TypePers:"Adulte",
      NbPers:"2"
    },
  ];

  const [list, setList] = useState(initialList);

  return (
    <>
    <NavBar />

    <Title>Confirmer votre réservation</Title>

   {list.map((t) => (
        <VolAller
          vols={t}
          key= {t.id} 
          />
      ))}

{list.map((t) => (
        <VolRetour
          vols={t}
          key= {t.id} 
          />
      ))}


    <Buttons>Accéder au paiement</Buttons>
    </>
  );


};

export default Confirm;
