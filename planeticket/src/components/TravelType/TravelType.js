import React from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const TravelType = () => {
  return (
   <> 
  
    <Form.Row className="align-items-center">
      <Col xs="auto" className="my-1">
        <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
          Preference
        </Form.Label>
        <Form.Control
          as="select"
          className="mr-sm-2"
          id="inlineFormCustomSelect"
          custom
          name="Adulte"
          
        >
          <option value="0">Adulte(s) (16+)</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Form.Control>
        <Form.Control
          as="select"
          className="mr-sm-2"
          id="inlineFormCustomSelect"
          custom
        >
          <option value="0">Enfants (2-15 ans)</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Form.Control>
        <Form.Control
          as="select"
          className="mr-sm-2"
          id="inlineFormCustomSelect"
          custom
        >
          <option value="0">Bébés (0-2 ans)</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Form.Control>
      </Col>
    </Form.Row>
   
    </>

  )

};

export default TravelType;
