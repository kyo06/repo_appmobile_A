import React, {useState} from "react";
import ListGroup from 'react-bootstrap/ListGroup';


const VolsAller = ({vols}) => {



  return (
    <>
    <p>Aller : Lyon à destination de Barcelone</p>
    <ListGroup>
      <ListGroup.Item>{vols.AeroportArv + " " + vols.AeroportArv}</ListGroup.Item>
  
    </ListGroup>
    </>
  );
};

export default VolsAller;
