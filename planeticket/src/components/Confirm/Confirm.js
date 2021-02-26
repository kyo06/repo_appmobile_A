import React, { useState, somme } from "react";
import Title from "../Title";
import css from "./Confirm.module.css";
import { useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import { ListAller } from "../../utils/ListAller";
import { ListRetour } from "../../utils/ListRetour";
import { Link } from "react-router-dom";

const Confirm = () => {
  const choice = JSON.parse(localStorage.getItem("choice"));
  const search = JSON.parse(localStorage.getItem("search"));

  console.log(choice.PrixAller);

  const calculPrix = () => {
    const nbAdulte = search.Adulte;
    const nbEnfant = search.Enfant;
    const nbBebe = search.Bebe;
    const prixA = choice.PrixAller;
    const prixR = choice.PrixRetour;
    const nb = eval(nbAdulte + "+" + nbEnfant + "+" + nbBebe);
    const PrixTot = prixA * nb + prixR * nb;
    return PrixTot;
  };

  const prixTotal = {
    PrixTotal: "",
  };

  const [form, setForm] = useState(prixTotal);
  const [list, setList] = useState(ListAller);
  const [Horaires, setHoraires] = useState(choice);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    localStorage.setItem("prix", JSON.stringify(form));
    history.push("/reservation");
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
    console.log(name, value);
  };

  return (
    <>
      <div className={css.container}>
        <Title>Confirmer votre réservation</Title>

        {ListAller.map((t) => (
          <div className={css.orange}>
            <p>
              <Link to="/">
                <img className={css.img} src="pencil.png" alt="icon pencil" />
              </Link>
              Aller : {t.AeroportDep + " -> " + t.AeroportArv} <br />
              {t.Date} <br />
              Dép {t.HeureDep + " Arr " + t.HeureArr} <br />
              Vos Tarifs : {t.TypePers + " " + t.NbPers + " x " + t.Prix} €
            </p>
          </div>
        ))}

        {ListRetour.map((t) => (
          <div className={css.orangered}>
            <Link to="/">
              <img className={css.img} src="pencil.png" alt="icon pencil" />
            </Link>
            <p>
              Retour : {t.AeroportArv + " -> " + t.AeroportDep} <br />
              {t.DateR} <br />
              Dép {t.HeureDep + " Arr " + t.HeureArr} <br />
              Vos Tarifs : {t.TypePers + " " + t.NbPers + " x " + t.Prix} €
            </p>
          </div>
        ))}

        <>
          <Form onSubmit={handleSubmit}>
            <div>
              <img src="visa.png" alt="icon visa" height="30px" /> <br />
              <img src="mastercard.png" alt="icon visa" height="18px" />
            </div>

            <div>
              <input type="hidden" name="PrixTotal" value={calculPrix()} />
              <label className={css.total}>TOTAL : {calculPrix()} €</label>
            </div>
            <div>
              <p className={css.italic}>
                Non remboursable. Modifiable sous réserve de frais. <br />
                Le prix inclut tous les frais et taxes applicables.
              </p>
            </div>

            <button className={css.button} type="submit">
              Accéder au paiement
            </button>
          </Form>
        </>
      </div>
    </>
  );
};

export default Confirm;
