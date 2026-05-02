import React from 'react';
import EmblaCarousel from '../../components/carrusel/EmblaCarousel';

const Services: React.FC = () => {

  return (
    <div className="cont-cen-serv">
      
      <EmblaCarousel slides={[1, 2]}/>
    </div>
  );
};

export default Services;
