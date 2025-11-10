import './projects.css'
import { Carousel } from 'antd';
import { Image } from 'antd';

//images
import jac from '../../assets/Projects/navarro/jacc.png'
import esp from '../../assets/Projects/navarro/esp.png'
import tech from '../../assets/Projects/navarro/tech.png'
function Projects() {
  return (
    <>
        <section id='projects'>
          <Carousel arrows infinite={false}>
            <div>
              <div className='Container-Projects-Carrousel'>
                <div className='Text-slide-project'>
                  <div className='text-sup-slidepr'>
                    <h2>Proyecto <span>Navarro</span></h2>
                    <p>Este proyecto representa la unión entre diseño contemporáneo y confort cotidiano. Cada espacio fue pensado para disfrutar tanto del interior como del exterior, con materiales cálidos, detalles en madera y una iluminación natural que realza cada ambiente. La terraza, con su pérgola y jacuzzi integrados, crea un entorno ideal para el descanso y la convivencia. Desde los acabados hasta la estructura, el proyecto refleja dedicación, estilo y compromiso con la calidad.</p>
                  </div>
                  <div className='text-inf-slidepr'>
                    <p><b>Inicio</b>: 20/01/2000</p>
                    <p><b>Final</b>: 22/01/2005</p>
                  </div>
                </div>
                <div className='ImageProject'>
                  <div class="parent">
                    <div class="div1">
                      <Image height={'100%'} src={tech}/>
                    </div>
                    <div class="div2"><Image height={'100%'} src={esp}/></div>
                    <div class="div3"><Image height={'100%'} src={jac}/></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='Container-Projects-Carrousel'>
                <div className='ImageProject'>
                  <div class="parent">
                    <div class="div1">
                      <Image height={'100%'} src={tech}/>
                    </div>
                    <div class="div2"><Image height={'100%'} src={esp}/></div>
                    <div class="div3"><Image height={'100%'} src={jac}/></div>
                  </div>
                </div>
                <div className='Text-slide-project'>
                  <div className='text-sup-slidepr'>
                    <h2>Proyecto <span>Navarro</span></h2>
                    <p>Este proyecto representa la unión entre diseño contemporáneo y confort cotidiano. Cada espacio fue pensado para disfrutar tanto del interior como del exterior, con materiales cálidos, detalles en madera y una iluminación natural que realza cada ambiente. La terraza, con su pérgola y jacuzzi integrados, crea un entorno ideal para el descanso y la convivencia. Desde los acabados hasta la estructura, el proyecto refleja dedicación, estilo y compromiso con la calidad.</p>
                  </div>
                  <div className='text-inf-slidepr'>
                    <p><b>Inicio</b>: 20/01/2000</p>
                    <p><b>Final</b>: 22/01/2005</p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </section>
    </>
  )
}

export default Projects