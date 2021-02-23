import React, {useState} from "react";
import NavBar from "../NavBar";
import Title from "../Title";
import VolsAller from "../VolsAller/VolsAller";

const SelectTrip = () => {

  const initialList = [
    {
      id:1,
      AeroportDep:"Lyon",
      AeroportArv:"Madrid",
      Date:"Dim.22 Fév",
      Prix:"57,00€",
      HeureDep:"12:35",
      HeureArr:"14:25",
    },
    {
      id:2,
      AeroportDep:"Lyon",
      AeroportArv:"Madrid",
      Date:"Lun.22 Fév",
      Prix:"35,00€",
      HeureDep:"12:35",
      HeureArr:"14:25",
    },
    {
      id:3,
      AeroportDep:"Lyon",
      AeroportArv:"Madrid",
      Date:"Mar.22 Fév",
      Prix:"26,00€",
      HeureDep:"12:35",
      HeureArr:"14:25",
    },
 

    ];

  const [list, setList] = useState(initialList);

  return (
    <>
    <NavBar />
    <Title>Résultats de votre recherche</Title>
    {list.map((t) => (
        <VolsAller
          vols={t}
          key= {t.id} 
          />
      ))}
    
    </>
  );
};

export default SelectTrip;
