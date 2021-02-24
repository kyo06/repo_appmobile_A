import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

const UserId = ({user}) => {
  return (

<ListGroup>
  <ListGroup.Item>Nom : {user.Nom}</ListGroup.Item>
  <ListGroup.Item>Prénom : {user.Prenom}</ListGroup.Item>
  <ListGroup.Item>Date de naissance : {user.DateNais}</ListGroup.Item>
  <ListGroup.Item>Adresse : {user.Adresse}</ListGroup.Item>
  <ListGroup.Item>Ville - CP : {user.Ville + " - " + user.Cp}</ListGroup.Item>
  <ListGroup.Item>Téléphone :{user.Telephone}</ListGroup.Item>
  <ListGroup.Item>Mail : {user.Mail}</ListGroup.Item>
</ListGroup>

  )
};

export default UserId;
