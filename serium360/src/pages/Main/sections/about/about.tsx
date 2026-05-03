import './about.css'
import CardsAbout from '../../../../components/CardsAbout/CardsAbout'
import Mision from '../../assets/about-images/mision.webp'
import Vision from '../../assets/about-images/vision.webp'
import Values from '../../assets/about-images/values.webp'
import image from '../../assets/about-images/image.webp'
function About() {

  return (
    <>
        <section id='about'>
          <div className='cent-About'>
            <img className='about-image' src={image} alt="about-edif" />
            <div className='text-about'>
              <h2>Sobre <span className='color-text'>SERIUM360</span></h2>
              <p>Somos una empresa enfocada en brindar soluciones integrales en HSE y MRO, combinando experiencia técnica con altos estándares de seguridad. Nuestro objetivo es acompañar a las organizaciones en la mejora continua de sus operaciones.</p>
              <p>Trabajamos junto a nuestros clientes para identificar riesgos, optimizar procesos y garantizar el cumplimiento de normativas. Entendemos que cada operación es única, por lo que adaptamos nuestras soluciones a cada contexto.</p>
              <p>Nos comprometemos con la calidad, la eficiencia y la seguridad en cada proyecto. Buscamos generar relaciones a largo plazo basadas en la confianza y resultados concretos.</p>
              <div className='m-v-v'>
                <CardsAbout timeAOS={1000} title={'MISIÓN'} icon={Mision} text={"Brindar servicios de MRO y HSE que aseguren la continuidad operativa de nuestros clientes, reduciendo riesgos, costos y tiempos de inactividad mediante soluciones técnicas eficientes, medibles y adaptadas a cada operación."} />
                <CardsAbout timeAOS={1500} title={'VISIÓN'} icon={Vision} text={"Ser una empresa referente en MRO y HSE en la región, reconocida por su capacidad de prevenir incidentes, optimizar activos y aportar valor real al negocio de nuestros clientes, más allá del cumplimiento normativo."} />
                <CardsAbout timeAOS={2000} title={'VALORES'} icon={Values} text={"Priorizamos la seguridad, trabajamos con eficiencia basada en datos, actuamos con transparencia y adaptamos cada solución al contexto del cliente, con responsabilidad ambiental."} />
              </div>
              <button className='btn-Color' onClick={() => location.href='#contactMain'}>CONTACTAR</button>
            </div>
          </div>
        </section>
    </>
  )
}

export default About