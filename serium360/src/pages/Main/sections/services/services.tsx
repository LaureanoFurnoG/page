import { useNavigate } from 'react-router-dom';
import './services.css'

function Services() {
  const navigate = useNavigate();
  return (
    <>
      <section id='services-main'>
        <div className='HSE_service service-panel'>
          <div className='service-panel__overlay' />
          <div className='service-panel__content'>
            <h2 data-aos="fade-right">Serium360 HSE</h2>
            <p data-aos="fade-right">
              Brindamos soluciones completas en seguridad, salud ocupacional y gestión ambiental,
              orientadas a la identificación, evaluación y mitigación de riesgos. Implementamos
              programas de control ambiental, manejo de residuos, cumplimiento normativo y
              capacitación del personal, promoviendo entornos de trabajo seguros y sostenibles
              alineados con las mejores prácticas de la industria.
            </p>
            <button className='service-panel__btn' onClick={() => { navigate('/hse'); window.scrollTo({ top: 0, behavior: 'instant' });} }>VER MAS</button>
          </div>
        </div>

        <div className='MRO_service service-panel'>
          <div className='service-panel__overlay' />
          <div className='service-panel__content'>
            <h2 data-aos="fade-left">Serium360 MRO</h2>
            <p data-aos="fade-left">
              Ofrecemos servicios integrales de mantenimiento, reparación y optimización de equipos
              e infraestructura, abarcando desde la reparación de unidades industriales hasta el
              mantenimiento de sistemas de climatización y equipos de energía renovable. Nuestro
              enfoque combina mantenimiento preventivo y correctivo para reducir fallas, minimizar
              tiempos de inactividad y garantizar la continuidad operativa. Además, trabajamos en la
              mejora del rendimiento de los activos, adaptándonos a las necesidades específicas de
              cada operación.
            </p>
            <button className='service-panel__btn' onClick={() => { navigate('/mro'); window.scrollTo({ top: 0, behavior: 'instant' });}}>VER MAS</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services