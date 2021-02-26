import React, { useState } from "react";
import Title from "../Title";
import css from "./User.module.css";
import UserId from "../UserId";
import Recap from "../Recap";

import { UserProfil } from "../../utils/User";
import { ListAller } from "../../utils/ListAller";

const User = () => {
  const [listUser ] = useState(UserProfil);
  const [list ] = useState(ListAller);

  return (
    <>
      <div className={css.container}>
        <Title>Bienvenue sur votre Profil</Title>

        {listUser.map((t) => (
          <UserId user={t} key={t.id} />
        ))}

        <button className={css.button} type="submit">
          Modifier
        </button>

        <h5 className={css.center}>Vos voyages à venir</h5>

        {list.map((t) => (
          <Recap vols={t} key={t.id} />
        ))}
      </div>
    </>
  );
};

export default User;
