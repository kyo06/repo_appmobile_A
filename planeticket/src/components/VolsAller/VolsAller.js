// import ListGroup from 'react-bootstrap/ListGroup';
import css from "./VolsAller.module.css";


const VolsAller = ({vols, color}) => {



  return (
    <>
          <div>    
             <p className={css.lign}><img src="miniPlane.jpg" alt="icon miniplane" height="20"/> Aller :  {vols.AeroportDep + " à déstination de " + vols.AeroportArv}</p>
          </div>
          
          <div className={css.orange}>
            <label>{vols.Date + " -> " + vols.Prix} <br />
            Dép {vols.HeureDep + " Arr " + vols.HeureArr}</label> 
            <input className={css.checkbox} type="checkbox" id="volsAller" name="volsAller" />
          </div>
    </>
  );
};

export default VolsAller;
