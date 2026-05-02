import React from 'react';
import './style.css';

import Navbar from '../../components/Navbar/Navbar';
import Banner from './sections/banner/Banner';
import About from './sections/about/About';
import Servicios from './sections/services/Services';
import Contact from './sections/Contact/Contact';
import FaqsMRO from './sections/preguntasFrecuentes/FaqsMRO';

const MRO: React.FC = () => {
  return (
    <>
      <header>
        <Navbar about={'#aboutMRO'} faqs={'#faqsMRO'} contact={'#contactMRO'} services={'#servicesMRO'} />
        <Banner />
      </header>

      <section id="aboutMRO">
        <About />
      </section>

      <section id="servicesMRO">
        <Servicios />
      </section>

      <section id="faqsMRO">
        <FaqsMRO />
      </section>

      <section id="contactMRO">
        <Contact />
      </section>
    </>
  );
};

export default MRO;
