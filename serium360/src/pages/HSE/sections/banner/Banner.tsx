import React from 'react';

const Banner: React.FC = () => {
  return (
    <div id="ban" className="banner">
      <div className="blueRay">
        <div className="centa">
          <div className="textContBanner">
            <h1>HIGIENE, <span>SEGURIDAD</span> Y MEDIOAMBIENTE</h1>
            <p>
              Cumpliendo normativas, garantizando seguridad y protegiendo el medioambiente con
              responsabilidad y compromiso legal.
            </p>
            <button className="buttonContBan">
              <a href="#contactHSE">CONTACTAR</a>
            </button>
          </div>
        </div>
      </div>
      <div className="greenRay"></div>
    </div>
  );
};

export default Banner;
