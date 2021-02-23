// import ListGroup from 'react-bootstrap/ListGroup';
import css from "./VolsAller.module.css";


const VolsAller = ({vols}) => {



  return (
    <>
          <div>    
             <p className={css.lign}><img src="miniPlane.jpg" alt="icon miniplane" height="20"/> Aller :  {vols.AeroportDep + " à déstination de " + vols.AeroportArv}</p>
          </div>

          <div className={css.orange}>
            <p>{vols.Date + " -> " + vols.Prix}</p>
            <p>Dép {vols.HeureDep + " Arr " + vols.HeureArr}</p>
        
          </div>
    </>
  );
};

export default VolsAller;
