// import ListGroup from 'react-bootstrap/ListGroup';
import css from "./VolsAller.module.css";


const VolsAller = ({vols}) => {



  return (
    <>

            
        <div>    
             <p className={css.lign}><img src="miniPlane.jpg" alt="icon miniplane" height="20"/> Aller :  {vols.AeroportDep + " à déstination de " + vols.AeroportArv}</p>
        </div>
          
          <div className={css.orange}>

            <p className={css.inline} name="Date">{vols.Date}</p> 
            <p className={css.inline} name="Prix">{vols.Prix}</p> <br/>

            <input className={css.radio} type="radio" name="volAller" />
          
            <p className={css.inline} name="HeureDep"> Dép {vols.HeureDep} </p> 
            <p className={css.inline} name="HeureArr">Arr {vols.HeureArr}</p>

          </div>
    </>
  );
};

export default VolsAller;
