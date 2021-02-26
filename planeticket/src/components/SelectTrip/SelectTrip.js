import React, { useState } from "react";
import Title from "../Title";
import VolsRetour from "../VolsRetour";
import css from "./SelectTrip.module.css";
import { Form } from "react-bootstrap";
import { ListAller } from "../../utils/ListAller";
import { ListRetour } from "../../utils/ListRetour";
import { useHistory } from "react-router-dom";

const SelectTrip = () => {
  const search = JSON.parse(localStorage.getItem("search"));

  const selection = {
    PrixAller: "",
    PrixRetour: "",
  };

  const [form, setForm] = useState(selection);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    localStorage.setItem("choice", JSON.stringify(form));
    history.push("/confirm");
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
    console.log(name, value);
  };

  return (
    <>
      <Title>Résultats de votre recherche</Title>

      <div className={css.container}>
        <Form onSubmit={handleSubmit}>
          <Form.Group name="selectionAller" onChange={handleChange}>
            {ListAller.map((t) => (
              <>
                <div>
                  <p className={css.lign}>
                    <img src="miniPlane.jpg" alt="icon miniplane" height="20" />{" "}
                    Aller :{" "}
                    {search.AeroportDep +
                      " à déstination de " +
                      search.AeroportArv}
                  </p>
                </div>

                <div className={css.orange}>
                  <p className={css.inline} name="Date">
                    {t.Date}{" "}
                  </p>
                  <input type="hidden" name="HeureDep" value={t.HeureDep} />
                  <label>Dép {t.HeureDep} </label>
                  <input type="hidden" name="HeureArr" value={t.HeureArr} />
                  <label> - Arr {t.HeureArr} </label>
                  <label> - {t.Prix} € </label>{" "}
                  <input type="radio" name="PrixAller" value={t.Prix} />
                </div>
              </>
            ))}
          </Form.Group>

          <Form.Group name="selectionRetour" onChange={handleChange}>
            {ListRetour.map((t) => (
              <>
                <div>
                  <p className={css.lign}>
                    <img src="miniPlane.jpg" alt="icon miniplane" height="20" />{" "}
                    Aller :{" "}
                    {search.AeroportDep +
                      " à déstination de " +
                      search.AeroportArv}
                  </p>
                </div>

                <div className={css.orange}>
                  <p className={css.inline} name="Date">
                    {t.Date}{" "}
                  </p>
                  <input type="hidden" name="HeureDep" value={t.HeureDep} />
                  <label>Dép {t.HeureDep} </label>
                  <input type="hidden" name="HeureArr" value={t.HeureArr} />
                  <label> - Arr {t.HeureArr} </label>
                  <label> - {t.Prix} € </label>{" "}
                  <input type="radio" name="PrixRetour" value={t.Prix} />
                </div>
              </>
            ))}
          </Form.Group>

          <button className={css.button} type="submit">
            Réserver
          </button>
        </Form>
      </div>
    </>
  );
};

export default SelectTrip;
