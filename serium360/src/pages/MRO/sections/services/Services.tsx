import React, { useState } from 'react';
import EmblaCarousel from '../../components/carrusel/EmblaCarousel';
import ServiceData from '../../components/serviceData/serviceData';
import './style.css'
import air from '../../assets/images/services/air.webp'
import hid from '../../assets/images/services/hid.webp'
import lav from '../../assets/images/services/lav.webp'
import paint from '../../assets/images/services/paint.webp'

type service ={
    Title: string,
    Desc: string,
    Image: string,
}

const Services: React.FC = () => {
  const services = [
    {
      Title: "INSTALACIÓN Y MANTENIMIENTO DE SISTEMAS DE AIRE ACONDICIONADO",
      Desc: "Montaje, diagnóstico y mantenimiento de equipos de climatización, optimizando su rendimiento, eficiencia energética y vida útil.",
      Image: air
    },
    {
      Title: "INSTALACIÓN Y MANTENIMIENTO DE GENERADORES RENOVABLES",
      Desc: "Cumpliendo normativas, garantizando seguridad y protegiendo el medioambiente con responsabilidad y compromiso legal.",
      Image: hid
    },
    {
      Title: "SERVICIOS DE LIMPIEZA TÉCNICA Y LAVADO A PRESIÓN",
      Desc: "Limpieza profesional de superficies mediante equipos de alta presión, garantizando la eliminación eficaz de suciedad, residuos y agentes contaminantes.",
      Image: lav
    },
    {
      Title: "SERVICIOS PROFESIONALES DE PINTURA",
      Desc: "Aplicación de recubrimientos en interiores y exteriores, con terminaciones duraderas, uniformes y adaptadas a cada tipo de superficie.",
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
