import React, {useState} from "react";
import {Form, FormCheck, Col} from 'react-bootstrap'; 
import "react-datepicker/dist/react-datepicker.css";
import {ListAller} from "../../utils/ListAller";
import {ListRetour} from "../../utils/ListRetour";
import css from "./RechercheVol.module.css";



const RechercheVol = () => {
  
const searchInitial = {
  AeroportDep:"",
  NoVolDep:"",
  FsDep:"",
  FsDep2:"",
  AeroportArv:"",
  NoVolArv:"",
  FsArv:"",
  FsArv2:"",
  Date:"",
  DateR:"",
  Prix:"",
  HeureDep:"",
  HeureArr:"",
  TypePers:"",
  NbPers:"",
  Direct:false
};
  
  const [form, setForm] = useState(searchInitial);

  const aeroports = ListAller.map((i) =>
  (<option value={i.AeroportDep}>{i.AeroportDep}</option>)
  )

  const aeroportsR = ListRetour.map((j) =>
  (<option value={j.AeroportArv}>{j.AeroportArv}</option>)
  )

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(form);
      localStorage.setItem("search", JSON.stringify(form));
      setForm(searchInitial);
    }

    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setForm({...form, [name]: value});
      console.log(name, value);
    }

    return (
    <> 
  <div className={css.container}>
    
    <Form onSubmit={handleSubmit}>
     <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>De </Form.Label>
          <Form.Control name="AeroportDep" onChange={handleChange} as="select">
            <option></option>
            {aeroports}
          </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>A</Form.Label>
          <Form.Control name="AeroportArv" onChange={handleChange} as="select">
          <option></option>
          {aeroportsR}
          </Form.Control>

          <Form.Group>
            <FormCheck type="checkbox" onChange={handleChange} name="Direct" label="Direct"/>
          </Form.Group>

          <Form.Group>
             Du : <input type="date" onChange={handleChange} name="Date" /> 
           </Form.Group>

           <Form.Group>
            Au : <input type="date" onChange={handleChange} name="DateR" />
          </Form.Group>


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
          onChange={handleChange}
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
          name="Enfant"
          onChange={handleChange}
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
          name="Bebe"
          onChange={handleChange}
        >
          <option value="0">Bébés (0-2 ans)</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Form.Control>
      </Col>
    </Form.Row>
      </Form.Group>

      <button className={css.button} type="submit">Afficher les vols ...</button>

  </Form>

  </div>

    </>
    );
};

export default RechercheVol;
