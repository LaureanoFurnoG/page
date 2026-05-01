import React from 'react';
import aboutImg from '../../assets/images/about.webp';

const About: React.FC = () => {
  return (
    <>
      <div className="about-us">
        <img data-aos="fade-right" src={aboutImg} alt="" />
        <div data-aos="fade-left" className="cajaText">
          <h2>¿QUIENES <span>SOMOS</span>?</h2>
          <p>
            En Serium 360 HSE Consulting, nos especializamos en ofrecer soluciones integrales en higiene,
            seguridad y medio ambiente para empresas de todos los sectores. Nuestro enfoque se basa en la
            excelencia, la innovación y el cumplimiento normativo, ayudando a nuestros clientes a prevenir
            riesgos, optimizar condiciones laborales y garantizar el cumplimiento de la legislación vigente en
            Argentina.
          </p>
          <p>
            Contamos con un equipo de profesionales altamente capacitados en higiene, seguridad y medio
            ambiente, comprometidos con el desarrollo de soluciones innovadoras y efectivas para cada cliente.
          </p>
          <p>
            Creemos que no existen clientes grandes ni pequeños, sino compañías y organizaciones con necesidades
            específicas que merecen la misma dedicación y compromiso. Desde pequeñas empresas hasta grandes
            industrias, trabajamos con el mismo nivel de excelencia, asegurando que cada proyecto reciba un
            enfoque integral y personalizado.
          </p>
          <button onClick={() => { window.location.href = '#contactHSE'; }}>CONTACTAR</button>
        </div>
      </div>

    </>
  );
};

export default About;
