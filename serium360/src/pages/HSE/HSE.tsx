import React from 'react';
import './style.css';

import Navbar from '../../components/Navbar/Navbar';
import Banner from './sections/banner/Banner';
import About from './sections/about/About';
import Servicios from './sections/servicios/Servicios';
import PreguntasFrecuentes from './sections/preguntasFrecuentes/PreguntasFrecuentes';
import Contacto from './sections/contacto/Contacto';

const HSE: React.FC = () => {
  return (
    <>
      <header>
        <Navbar about={'#aboutHSE'} faqs={'#faqsHSE'} contact={'#contactHSE'} services={'#servicesHSE'} />
        <Banner />
      </header>

      <section id="aboutHSE">
        <About />
      </section>

      <section id="servicesHSE">
        <Servicios />
      </section>

      <section id="faqsHSE">
        <PreguntasFrecuentes />
      </section>

      <section id="contactHSE">
        <Contacto />
      </section>
    </>
  );
};

export default HSE;
