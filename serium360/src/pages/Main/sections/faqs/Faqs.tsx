import './Faqs.css';
import FaqCard from '../../components/FaqCard/FaqCard';

const Faq = () => {

  return (
    <section className='faqs__main'>
        <div className='cent-faqs'>
            <h2 className='titleServices__Main'>PREGUNTAS FRECUENTES</h2>
            <div className='columns-faqs-main'>
                <div className='side-l'>
                    <FaqCard timeAOS={500} question={'¿Qué tipo de servicios ofrecen?'} answer={'Ofrecemos soluciones integrales en HSE y MRO, adaptadas a distintos sectores industriales.'} side={'right'} />   
                    <FaqCard question={'¿Qué incluye el servicio de MRO?'} answer={'Incluye mantenimiento, reparación y optimización de equipos, sistemas de climatización e infraestructura.'} timeAOS={1000} side={'right'} /> 
                    <FaqCard question={'¿Qué abarca HSE?'} answer={'Incluye gestión de seguridad, salud ocupacional y gestión ambiental para prevenir riesgos y cumplir normativas.'} timeAOS={1500} side={'right'} /> 
                    <FaqCard question={'¿En qué sectores industriales trabajan?'} answer={'Trabajamos con sectores como oil & gas, minería, construcción, manufactura y energías renovables, entre otros.'} timeAOS={2000} side={'right'} /> 
                    <FaqCard question={'¿Cuentan con certificaciones de calidad?'} answer={' Sí, contamos con certificaciones ISO 9001, ISO 14001 e ISO 45001, garantizando estándares internacionales en todos nuestros servicios.'} timeAOS={2500} side={'right'} /> 
                    <FaqCard question={'¿Ofrecen servicios de emergencia o mantenimiento urgente?'} answer={'Contamos con equipos disponibles las 24 horas, los 7 días de la semana, para atender situaciones de emergencia y minimizar tiempos de inactividad.'} timeAOS={3000} side={'right'} /> 
                </div>
                <div className='side-r'>
                    <FaqCard question={'¿Trabajan con energías renovables?'} answer={'Sí, realizamos mantenimiento y soporte a equipos de energía renovable para asegurar su correcto funcionamiento.'} timeAOS={500} side={'left'} /> 
                    <FaqCard question={'¿Ofrecen servicios personalizados?'} answer={'Sí, adaptamos cada solución según las necesidades específicas de cada cliente y operación.'} timeAOS={1000} side={'left'} /> 
                    <FaqCard question={'¿Realizan mantenimiento preventivo?'} answer={'Sí, diseñamos planes preventivos para evitar fallas y mejorar la eficiencia operativa.'} timeAOS={1500} side={'left'} /> 
                    <FaqCard question={'¿Cómo es el proceso para contratar sus servicios?'} answer={'El proceso comienza con una consulta inicial para evaluar sus necesidades, seguida de una propuesta técnica y económica adaptada a su operación.'} timeAOS={2000} side={'left'} /> 
                    <FaqCard question={'¿Realizan capacitaciones al personal de las empresas?'} answer={' Sí, ofrecemos programas de capacitación en seguridad ocupacional, manejo de residuos, normativas ambientales y uso correcto de equipos industriales.'} timeAOS={2500} side={'left'} /> 
                    <FaqCard question={'¿Trabajan con empresas de todos los tamaños?'} answer={'Atendemos tanto a pequeñas y medianas empresas como a grandes corporaciones, adaptando nuestras soluciones a la escala y complejidad de cada operación.'} timeAOS={3000} side={'left'} /> 
                </div>
            </div>
        </div>
    </section>
  );
};

export default Faq;