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
    },
    {
      id:2,
      AeroportDep:"Lyon",
      AeroportArv:"Madrid",
    },
    {
      id:3,
      AeroportDep:"Lyon",
      AeroportArv:"Madrid",
    },
    {
      id:4,
      AeroportDep:"Lyon",
      AeroportArv:"Madrid",
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
