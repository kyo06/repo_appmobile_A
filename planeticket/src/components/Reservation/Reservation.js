import React, { useState } from "react";
import ButtonCancel from "../ButtonCancel";
import Title from "../Title";
import css from "./Reservation.module.css";
import Recap from "../Recap";

import { ListAller } from "../../utils/ListAller";

const Reservation = () => {

  const [list] = useState(ListAller);

  return (
    <>
      <div className={css.container}>
        <Title>Récapitulatif réservation</Title>

        {list.map((t) => (
          <Recap vols={t} key={t.id} />
        ))}

        <button className={css.button} type="submit">
          Annuler réservation
        </button>
      </div>
    </>
  );
};

export default Reservation;

