import React from "react";
import css from './Recap.module.css'


const Recap =  ({vols}) => {

  return (
    <>
       <div>    
             <p className={css.lign}><img src="miniPlane.jpg" alt="icon miniplane" height="20"/> {vols.NoVolDep}</p>
          </div>

      <div className={css.orange}>
            <p>
              Aller :  {vols.AeroportDep + " -> " + vols.AeroportArv} <br />
                    {vols.Date} <br />
              Dép {vols.HeureDep + " Arr " + vols.HeureArr} <br />
              Vos options de vol <br />
              Up Front siège {vols.FsDep} <br />
              Up Front siège {vols.FsDep2} 
            </p>
      </div>

      <div>    
             <p className={css.lign}><img src="miniPlane.jpg" alt="icon miniplane" height="20"/> {vols.NoVolArv}</p>
          </div>

      <div className={css.orange}>
            <p>
              Aller :  {vols.AeroportArv + " -> " + vols.AeroportDep} <br />
                    {vols.DateR} <br />
              Dép {vols.HeureDep + " Arr " + vols.HeureArr} <br />
              Vos options de vol <br />
              Up Front siège {vols.FsArv} <br />
              Up Front siège {vols.FsArv2} 
            </p>
      </div>

    </>
  );

}
export default Recap;
