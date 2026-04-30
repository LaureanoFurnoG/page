import './banner.css'
import Header from '../../../../components/Navbar/Navbar'
import imageEd from '../../../../assets/rasc.png'
function Banner() {

  return (
    <>
        <div>
            <Header about={'#about'} faqs={'#faqsMain'} services={'#servicesMain'} contact={'#contactMain'} />
            <div className='banner-t'>
              <div className='bann-container'>
                <div className='texts-Bann'>
                  <h1>SOLUCIONES INTEGRALES EN <span className='color-text'>HSE</span> Y <span className='color-text-2'>MRO</span></h1>
                  <p>Garantizamos seguridad, eficiencia y mantenimiento confiable para potenciar tus operaciones.</p>
                  <div className='buttons-bann'>
                    <button className='btn-Color'>CONTACTAR</button>
                  </div>
                </div>
              </div>
              <img className='ed-rasc' src={imageEd} alt="" />
            </div>
        </div>
    </>
  )
}

export default Banner