import './Banner.css'
import Header from '../../components/Navbar/Navbar'
import imageEd from '../../assets/rasc.png'
function Banner() {

  return (
    <>
        <section>
            <Header />
            <div className='banner-t'>
              <div className='bann-container'>
                <div className='texts-Bann'>
                  <h1>CADA <span className='color-text'>LADRILLO</span> CUENTA Y CONTARA UNA <span className='color-text'>HISTORIA</span></h1>
                  <p>Somos una empresa dedicada a crear espacios que trascienden lo material. Más que construir, diseñamos lugares donde las personas puedan vivir, crecer y soñar. Nuestro compromiso es transformar proyectos en realidades sólidas y humanas.</p>
                  <div className='buttons-bann'>
                    <button className='btn-Color'>CONTACTAR</button>
                    <button className='btn-Border'>VER TRABAJOS</button>
                  </div>
                </div>
              </div>
              <img className='ed-rasc' src={imageEd} alt="" />
            </div>
        </section>
    </>
  )
}

export default Banner