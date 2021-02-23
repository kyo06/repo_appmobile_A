import React, {  } from "react";
import NavBar from "../NavBar";
import Title from "../Title";
import TypeVol from "../TypeVol";
import RechercheVol from "../RechercheVol";
import TravelType from "../TravelType";
import Buttons from "../Buttons";


const HomePage = () => {
 
    return (
    <>
        <NavBar />
        <Title>Trouver un Vol</Title>
        <TypeVol /> <br/>
        <RechercheVol />
        <TravelType />
        <Buttons>Afficher les Vols </Buttons> 
    </>
    )
  }

export default HomePage;
