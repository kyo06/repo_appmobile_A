import React, { useState } from "react";
import Title from "../Title";
import css from './User.module.css'
import UserId from "../UserId"
import Recap from "../Recap"

import {UserProfil} from "../../utils/User";
import {ListAller} from "../../utils/ListAller";
import Buttons from "../Buttons";




const User = () => {

  const [listUser, setListUser] = useState(UserProfil);
  const [list, setList] = useState(ListAller);

 
  return (
    <>
    <div className={css.container}>

    <Title>Bienvenue sur votre Profil</Title>

       {listUser.map((t) => (
        <UserId
          user={t}
          key= {t.id} 
          />
      ))}

      <Buttons>Modifier</Buttons>

      <h5 className={css.center}>Vos voyages à venir</h5>

      {list.map((t) => (
        <Recap
          vols={t}
          key= {t.id} 
          />
      ))}

    <Buttons>Modifier</Buttons>

    </div>
    </>
  );
};

export default User;
