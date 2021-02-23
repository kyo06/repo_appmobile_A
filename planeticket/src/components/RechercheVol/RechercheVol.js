import React, {useState} from "react";
import Form from 'react-bootstrap/Form'; 

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const RechercheVol = () => {
  
const [startDate, setStartDate] = useState(new Date());
    return (
    <> 
    <Form>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>De </Form.Label>
          <Form.Control as="select">
              <option>Lyon</option>
              <option>Barcelone</option>
          </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>A</Form.Label>
          <Form.Control as="select">
              <option>Lyon</option>
              <option>Barcelone</option>
          </Form.Control>
      </Form.Group>
  </Form>

      <p>Du :
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> </p>
      <p>Au :
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> </p>
    </>
    );
};

export default RechercheVol;
