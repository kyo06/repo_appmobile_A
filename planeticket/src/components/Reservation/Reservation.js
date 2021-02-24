import React, { useState } from "react";
import ButtonCancel from "../ButtonCancel";
import Title from "../Title";
import NavBar from "../NavBar";
import css from './Reservation.module.css'
import Recap from "../Recap";

import {ListAller} from "../../utils/ListAller";




const Reservation = () => {

  const [list, setList] = useState(ListAller);
 
  return (
    <>
    <div className={css.container}>
    <NavBar />
    <Title>Récapitulatif réservation</Title>

    {list.map((t) => (
        <Recap
          vols={t}
          key= {t.id} 
          />
      ))}
   
    <ButtonCancel>Annuler réservation</ButtonCancel>
    </div>
    </>
  );




};

export default Reservation;
