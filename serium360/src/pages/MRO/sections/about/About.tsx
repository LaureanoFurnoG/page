import React from 'react';
import aboutImg from '../../assets/images/services/lav.png';
import './About.css'
const About: React.FC = () => {
  return (
    <>
      <div className="about-usMRO">
        <img data-aos="fade-right" src={aboutImg} alt="" />
        <div data-aos="fade-left" className="cajaText">
          <h2>¿QUIENES <span>SOMOS</span>?</h2>
          <p>
            Nos especializamos en servicios de mantenimiento, reparación y operaciones, enfocados en maximizar la vida útil de equipos e instalaciones. Nuestro enfoque está en la eficiencia operativa y la reducción de tiempos de inactividad.
          </p>
          <p>
            Contamos con un equipo capacitado que trabaja bajo estándares de calidad, asegurando intervenciones precisas y confiables. Aplicamos buenas prácticas para garantizar resultados duraderos.
          </p>
          <p>
            Acompañamos a nuestros clientes en cada etapa del mantenimiento, desde la planificación hasta la ejecución. Nuestro objetivo es mejorar el rendimiento de los activos y aportar valor real a sus operaciones.
          </p>
          <button onClick={() => { window.location.href = '#contactMRO'; }}>CONTACTAR</button>
        </div>
      </div>

    </>
  );
};

export default About;
