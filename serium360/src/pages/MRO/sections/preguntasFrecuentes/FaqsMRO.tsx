import React from 'react';
import pregIcon from '../../assets/images/preg.webp';
import './FaqsMRO.css'
const PreguntasFrecuentes: React.FC = () => {
  return (
    <div className="PqC">
      <div className="pregText">
        <h2>PREGUNTAS FRECUENTES</h2>
        <div className="pregContainer">

          <div className="container1">
            <div data-aos="fade-right" data-aos-duration="1000" className="PR">
              <img src={pregIcon} alt="" />
              <div>
                <p className="pregunta">¿Qué servicios ofrece Serium 360 HSE Consulting?</p>
                <p className="respuesta">
                  Ofrecemos consultoría en higiene, seguridad y medio ambiente,
                  incluyendo auditorías, evaluaciones de riesgos, capacitaciones y gestión de protocolos normativos como
                  mediciones de iluminación, impacto acústico, carga térmica, ergonomía y más.
                </p>
              </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="1500" className="PR">
              <img src={pregIcon} alt="" />
              <div>
                <p className="pregunta">¿Trabajan con empresas de cualquier tamaño?</p>
                <p className="respuesta">
                  Sí. En Serium 360 HSE Consulting, todos los clientes son igual de importantes, sin importar si se trata de una PyME, una industria o una gran empresa. Nos adaptamos a las necesidades de cada organización.
                </p>
              </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="2000" className="PR">
              <img src={pregIcon} alt="" />
              <div>
                <p className="pregunta">¿Por qué es importante cumplir con la normativa en seguridad e higiene?</p>
                <p className="respuesta">
                  El cumplimiento normativo no solo evita sanciones legales, sino que también protege la salud de los trabajadores, reduce riesgos laborales y mejora la eficiencia operativa.
                </p>
              </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="2500" className="PR">
              <img src={pregIcon} alt="" />
              <div>
                <p className="pregunta">¿Qué normativas cumplen los estudios y mediciones que realizan?</p>
                <p className="respuesta">
                  Nuestros servicios se ajustan a la legislación vigente en Argentina, incluyendo normativas de la Superintendencia de Riesgos del Trabajo (SRT), Resoluciones del Ministerio de Trabajo, la Ley 19.587 de Higiene y Seguridad en el Trabajo y estándares ISO.
                </p>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" className="container2">
            <div data-aos="fade-left" data-aos-duration="1000" className="PR">
              <img src={pregIcon} alt="" />
              <div>
                <p className="pregunta">¿En qué zonas brindan sus servicios?</p>
                <p className="respuesta">
                  Nuestra sede está en Buenos Aires, Argentina, pero trabajamos en todo el territorio nacional, brindando asesoramiento y soluciones a empresas de diversas provincias.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="1500" className="PR">
              <img src={pregIcon} alt="" />
              <div>
                <p className="pregunta">¿Cómo se realizan las mediciones de impacto acústico, iluminación o carga térmica?</p>
                <p className="respuesta">
                  Utilizamos equipos certificados y metodologías aprobadas por la normativa vigente para realizar mediciones ambientales en el ámbito laboral, garantizando resultados precisos y auditables.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="2000" className="PR">
              <img src={pregIcon} alt="" />
              <div>
                <p className="pregunta">¿Ofrecen capacitaciones para empresas?</p>
                <p className="respuesta">
                  Sí. Brindamos capacitaciones en seguridad e higiene laboral, manejo de emergencias, brigadas de incendios, ergonomía, manipulación de sustancias peligrosas y cursos habilitantes según la Resolución SRT 960/15.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="2500" className="PR">
              <img src={pregIcon} alt="" />
              <div>
                <p className="pregunta">¿Cómo puedo solicitar un servicio o presupuesto?</p>
                <p className="respuesta">
                  Puedes contactarnos a través de nuestro sitio web, correo electrónico o teléfono. Nuestro equipo te asesorará y ofrecerá una solución adaptada a las necesidades de tu empresa.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PreguntasFrecuentes;
