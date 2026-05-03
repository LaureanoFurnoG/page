import React, { useState } from 'react';
import EmblaCarousel from '../../components/carrusel/EmblaCarousel';
import ServiceData from '../../components/serviceData/serviceData';
import './style.css'
import air from '../../assets/images/services/air.png'
import hid from '../../assets/images/services/hid.png'
import lav from '../../assets/images/services/lav.png'
import paint from '../../assets/images/services/paint.png'

type service ={
    Title: string,
    Desc: string,
    Image: string,
}

const Services: React.FC = () => {
  const services = [
    {
      Title: "INSTALACIÓN Y MANTENIMIENTO DE GENERADORES RENOVABLES",
      Desc: "Cumpliendo normativas, garantizando seguridad y protegiendo el medioambiente con responsabilidad y compromiso legal.",
      Image: air
    },
    {
      Title: "INSTALACIÓN Y MANTENIMIENTO DE GENERADORES RENOVABLES",
      Desc: "Cumpliendo normativas, garantizando seguridad y protegiendo el medioambiente con responsabilidad y compromiso legal.",
      Image: hid
    },
    {
      Title: "INSTALACIÓN Y MANTENIMIENTO DE GENERADORES RENOVABLES",
      Desc: "Cumpliendo normativas, garantizando seguridad y protegiendo el medioambiente con responsabilidad y compromiso legal.",
      Image: lav
    },
    {
      Title: "INSTALACIÓN Y MANTENIMIENTO DE GENERADORES RENOVABLES",
      Desc: "Cumpliendo normativas, garantizando seguridad y protegiendo el medioambiente con responsabilidad y compromiso legal.",
      Image: paint
    }
  ]
  const [selectService, setSelectService] = useState<service | null>(services[0])
  
  return (
    <div className="cont-cen-servMRO" style={{background: `linear-gradient(rgba(57, 193, 92, 0.3), rgba(57, 193, 92, 0.3)), URL(${selectService?.Image})`}}>
      <div className='cent-C-S'>
        <ServiceData serviceSelected={selectService} />
        <EmblaCarousel slides={services} setSelectService={setSelectService}/>
      </div>
    </div>
  );
};

export default Services;
