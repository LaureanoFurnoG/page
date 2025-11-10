import './about.css'
import Bar from '../../components/bar-c/Bar'
import jac from '../../assets/Projects/navarro/jacc.png'

function About() {

  return (
    <>
        <section id='about'>
          <div className='cent-About'>
            <img src={jac} alt="about-edif" />
            <div className='text-about'>
              <h2>Sobre <span className='color-text'>NOMBRE</span></h2>
              <p>Somos una empresa constructora de gran trayectoria, con años de experiencia y un equipo profesional altamente capacitado. Nos especializamos en crear espacios que trascienden lo puramente material: más que construir, diseñamos lugares donde las personas puedan vivir, crecer y soñar.</p>
              <p>Cada proyecto que emprendemos refleja nuestro compromiso con la calidad, el valor y la excelencia, transformando ideas en realidades sólidas y humanas. Nos dedicamos a integrar innovación, funcionalidad y estética en cada obra, garantizando resultados que perduran en el tiempo y que generan un impacto positivo en quienes los habitan.</p>
              <p>Nuestra misión es ser referentes en construcción, combinando experiencia, profesionalismo y pasión en cada espacio que llevamos a la vida. Creemos que cada proyecto es una oportunidad para transformar sueños en espacios concretos, donde la calidad y la humanidad se encuentran en perfecta armonía.</p>
              <button className='btn-Color'>CONTACTAR</button>
            </div>
          </div>
          <div className='centBar'>
            <Bar metric1="100" metric2="20" metric3="50" prop1="Construcciones" prop2="Años de experiencia" prop3="Profesionales capacitados"/>
          </div>
        </section>
    </>
  )
}

export default About