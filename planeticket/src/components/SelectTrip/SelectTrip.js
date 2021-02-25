import React, {useState} from "react";
import NavBar from "../NavBar";
import Title from "../Title";
// import VolsAller from "../VolsAller";
import VolsRetour from "../VolsRetour";
import css from "./SelectTrip.module.css";
import {Form} from 'react-bootstrap'; 
import {ListAller} from "../../utils/ListAller";




const SelectTrip = () => {

const search = JSON.parse(localStorage.getItem("search"));
  
 const selection = {

  Prix:"",
  HeureDep:"",
  HeureArr:""

};
  
  const [form, setForm] = useState(selection);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    localStorage.setItem("choice", JSON.stringify(form));
  
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({...form, [name]: value});
    console.log(name, value);
  }

  return (
    <>
    <NavBar />
    <Title>Résultats de votre recherche</Title>

    <div className={css.container}>

    <Form onSubmit={handleSubmit}>

       <Form.Group name="selectionAller" onChange={handleChange}>
      

    {ListAller.map((t) => ( <>

          <div>    
          <p className={css.lign}><img src="miniPlane.jpg" alt="icon miniplane" height="20"/> Aller :  {search.AeroportDep + " à déstination de " + search.AeroportArv}</p>
          </div>
      
        <div className={css.orange}>

        <p className={css.inline} name="Date">{t.Date}</p> 
        <p className={css.inline} name="Prix"> {t.Prix}€</p> <br/>

        <input className={css.radio} type="radio" name="volAller" />
      
        <p className={css.inline} name="HeureDep"> Dép {t.HeureDep} </p> 
        <p className={css.inline} name="HeureArr">Arr {t.HeureArr}</p>

      </div>
     </> ))}
      
      </Form.Group>
    
      <Form.Group name="selectionRetour" onChange={handleChange}>

    {ListAller.map((t) => (
        <VolsRetour
          vols={t}
          key= {t.id} 
          />
      ))}

    </Form.Group>

  <button className={css.button} type="submit">Réserver</button>

</Form>

  </div>
    </>
  );
};

export default SelectTrip;
