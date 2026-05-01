import './about.css'
import CardsAbout from '../../../../components/CardsAbout/CardsAbout'
import Mision from '../../assets/about-images/mision.png'
import Vision from '../../assets/about-images/vision.png'
import Values from '../../assets/about-images/values.png'
import image from '../../assets/about-images/image.png'
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
                <CardsAbout timeAOS={1000} title={'MISIÓN'} icon={Mision} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make "} />
                <CardsAbout timeAOS={1500} title={'VISIÓN'} icon={Vision} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make "} />
                <CardsAbout timeAOS={2000} title={'VALORES'} icon={Values} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make "} />
              </div>
              <button className='btn-Color' onClick={() => location.href='#contactMain'}>CONTACTAR</button>
            </div>
          </div>
        </section>
    </>
  )
}

export default About