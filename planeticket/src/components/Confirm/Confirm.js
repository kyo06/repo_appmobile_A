import React, { useState } from "react";
import NavBar from "../NavBar";
import Title from "../Title";
import Buttons from "../Buttons";
import VolAller from "../VolsAller";
// import VolRetour from "../VolsRetour";


const Confirm = () => {

  const initialList = [
    {
      id:1,
      AeroportDep:"Lyon",
      AeroportArv:"Madrid",
      Date:"Dim.22 Fév",
      DateR:"Jeu.25 Fév",
      Prix:"57,00€",
      HeureDep:"12:35",
      HeureArr:"14:25",
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


    <Buttons>Accéder au paiement</Buttons>
    </>
  );


};

export default Confirm;
