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
                <p className="pregunta">¿Qué servicios incluye el MRO (Maintenance, Repair and Operations)?</p>
                <p className="respuesta">
                  Incluimos mantenimiento preventivo y correctivo, reparaciones técnicas, gestión de repuestos, inspecciones periódicas y soporte operativo para garantizar la continuidad y eficiencia de los equipos e instalaciones.
                </p>
              </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="1500" className="PR">
              <img src={pregIcon} alt="" />
              <div>
                <p className="pregunta">¿Qué tipo de equipos o instalaciones cubren?</p>
                <p className="respuesta">
                  Trabajamos con equipos industriales, sistemas eléctricos, climatización, infraestructura edilicia y otros activos críticos, adaptándonos a las necesidades específicas de cada operación.
                </p>
              </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="2000" className="PR">
              <img src={pregIcon} alt="" />
              <div>
                <p className="pregunta">¿Ofrecen mantenimiento preventivo además de reparaciones?</p>
                <p className="respuesta">
                  Sí. Implementamos planes de mantenimiento preventivo diseñados para reducir fallas, minimizar tiempos de inactividad y extender la vida útil de los equipos.
                </p>
              </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="2500" className="PR">
              <img src={pregIcon} alt="" />
              <div>
                <p className="pregunta">¿Cuál es el tiempo de respuesta ante una falla?</p>
                <p className="respuesta">
                  Contamos con protocolos de atención que priorizan incidencias críticas, brindando respuestas rápidas para reducir el impacto operativo y garantizar la continuidad del servicio.
                </p>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" className="container2">
            <div data-aos="fade-left" data-aos-duration="1000" className="PR">
              <img src={pregIcon} alt="" />
              <div>
                <p className="pregunta">¿Trabajan con empresas de distintos tamaños?</p>
                <p className="respuesta">
                  Sí. Brindamos servicios tanto a pequeñas y medianas empresas como a operaciones industriales de mayor escala, adaptando nuestros procesos a cada contexto.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="1500" className="PR">
              <img src={pregIcon} alt="" />
              <div>
                <p className="pregunta">¿Cómo gestionan los repuestos y consumibles?</p>
                <p className="respuesta">
                  Ofrecemos gestión integral de repuestos MRO, asegurando disponibilidad, trazabilidad y optimización de inventarios para evitar interrupciones en la operación.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="2000" className="PR">
              <img src={pregIcon} alt="" />
              <div>
                <p className="pregunta">¿Cumplen con normativas y estándares técnicos?</p>
                <p className="respuesta">
                  Nuestros procesos se alinean con normativas vigentes y buenas prácticas de mantenimiento, garantizando seguridad, confiabilidad y cumplimiento operativo.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="2500" className="PR">
              <img src={pregIcon} alt="" />
              <div>
                <p className="pregunta">¿Cómo puedo solicitar un servicio o plan de mantenimiento?</p>
                <p className="respuesta">
                  Podés contactarnos a través de nuestros canales para evaluar tus necesidades y diseñar una solución MRO ajustada a tu operación.
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
