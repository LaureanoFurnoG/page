import React from 'react';
import './Banner.css'

const Banner: React.FC = () => {
  return (
    <div className="bannerMRO">
      <div className='color-textConainer'>
        <div data-aos="fade-right" className='space-textCon'>
          <h1>MANTENIMIENTO, <span className='optColor'>OPTIMIZACIÓN</span> Y REPARACIÓN DE <span>CALIDAD </span></h1>
          <p>Servicios MRO especializados para maximizar la vida útil de tus activos y reducir paradas. </p>
          <div className='buttons-bannMRO'>
            <button className='btn-ColorMRO' onClick={() => location.href='#contactMRO'}>CONTACTAR</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
