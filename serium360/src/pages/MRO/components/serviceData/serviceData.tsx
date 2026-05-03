import React from 'react';
import './serviceData.css'

type service ={
    Title: string,
    Desc: string,
    Image: string,
}

type Props = {
  serviceSelected?: service | null;
}

const ServiceData: React.FC<Props> = ({serviceSelected}) => {
  return (
    <div data-aos="fade-right" className='service-text-part'>
        <h2>{serviceSelected?.Title}</h2>
        <p>{serviceSelected?.Desc}</p>
    </div>
  );
};

export default ServiceData;
