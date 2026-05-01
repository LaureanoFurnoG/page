import React, { useState } from 'react';

import CargaT       from '../../assets/images/servicios/protocolos/CargaT.webp';
import Vibraciones  from '../../assets/images/servicios/protocolos/Vibraciones.webp';
import CargaFuego   from '../../assets/images/servicios/protocolos/CargaFuego.webp';
import Ergonomia    from '../../assets/images/servicios/protocolos/ergonomia.webp';
import Iluminacion  from '../../assets/images/servicios/protocolos/iluminacion.webp';
import Contaminantes from '../../assets/images/servicios/protocolos/contaminantes.webp';

import Planes       from '../../assets/images/servicios/consultoria/planes.webp';
import Eval         from '../../assets/images/servicios/consultoria/eval.webp';
import Asesoramiento from '../../assets/images/servicios/consultoria/asesoramiento.webp';

import Impacto      from '../../assets/images/servicios/gestionamb/impacto.webp';
import Sistemas     from '../../assets/images/servicios/gestionamb/sistemas.webp';
import Residuos     from '../../assets/images/servicios/gestionamb/residuos.webp';
import Emisiones    from '../../assets/images/servicios/gestionamb/emisiones.webp';

import Altura       from '../../assets/images/servicios/cursos/altura.webp';
import Quimicos     from '../../assets/images/servicios/cursos/quimicos.webp';
import Brigada      from '../../assets/images/servicios/cursos/brigada.webp';
import Autoelevador from '../../assets/images/servicios/cursos/autoelevador.webp';

import Woman        from '../../assets/images/woman.webp';

type TabId = 'protocolos' | 'consultorias' | 'gestionAmb' | 'capacitaciones';

const Servicios: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('protocolos');

  return (
    <div className="cont-cen-serv">
      <div className="contService">
        <h2>SERVICIOS</h2>

        <nav className="menu">
          <ul id="menuUlServicios">
            <li
              id="consB"
              className={activeTab === 'consultorias' ? 'active' : ''}
              onClick={() => setActiveTab('consultorias')}
            >
              <p>CONSULTORÍA EN SEGURIDAD E HIGIENE</p>
            </li>
            <li
              id="protB"
              className={activeTab === 'protocolos' ? 'active' : ''}
              onClick={() => setActiveTab('protocolos')}
            >
              <p>PROTOCOLOS Y MEDICIONES NORMATIVAS</p>
            </li>
            <li
              id="gestB"
              className={activeTab === 'gestionAmb' ? 'active' : ''}
              onClick={() => setActiveTab('gestionAmb')}
            >
              <p>GESTIÓN AMBIENTAL Y SOSTENIBILIDAD</p>
            </li>
            <li
              id="capB"
              className={activeTab === 'capacitaciones' ? 'active' : ''}
              onClick={() => setActiveTab('capacitaciones')}
            >
              <p>CAPACITACIONES Y ENTRENAMIENTOS HSE</p>
            </li>
          </ul>
        </nav>

        <div
          id="protocolos"
          className={`contServicios-cards${activeTab === 'protocolos' ? ' active-cards' : ''}`}
        >
          <div className="service">
            <img src={CargaT} alt="" />
            <div className="verdeCParr">
              <p>Estudio de Carga térmica y confort Térmico</p>
              <p className="descServ">Carga Térmica y Confort Térmico (análisis para evaluar condiciones ambientales).</p>
            </div>
          </div>
          <div className="service">
            <img src={Vibraciones} alt="" />
            <div className="verdeCParr">
              <p>Medición de Vibraciones</p>
              <p className="descServ">Medición de Vibraciones (cumplimiento de la Res. SRT N° 295/03).</p>
            </div>
          </div>
          <div className="service">
            <img src={CargaFuego} alt="" />
            <div className="verdeCParr">
              <p>Medición de carga de fuego y planes de evacuacion</p>
              <p className="descServ">Medición de Carga de Fuego y Planes de Evacuación.</p>
            </div>
          </div>
          <div className="service">
            <img src={Ergonomia} alt="" />
            <div className="verdeCParr">
              <p>Estudios Ergonomicos</p>
              <p className="descServ">Ergonomía (evaluaciones de puestos de trabajo según Res. SRT N° 886/15).</p>
            </div>
          </div>
          <div className="service">
            <img src={Iluminacion} alt="" />
            <div className="verdeCParr">
              <p>Estudio de iluminación</p>
              <p className="descServ">Iluminación (mediciones según la Ley de Higiene y Seguridad y normativas SRT).</p>
            </div>
          </div>
          <div className="service">
            <img src={Contaminantes} alt="" />
            <div className="verdeCParr">
              <p>Medición de contaminantes Químicos</p>
              <p className="descServ">Medición de Contaminantes Químicos en Ambiente Laboral.</p>
            </div>
          </div>
        </div>

        <div
          id="consultorias"
          className={`contServicios-cards${activeTab === 'consultorias' ? ' active-cards' : ''}`}
        >
          <div className="service">
            <img src={Planes} alt="" />
            <div className="verdeCParr">
              <p>Planes de Seguridad y Programas de Prevención de Riesgos Laborales</p>
              <p className="descServ">Implementamos estrategias efectivas para minimizar riesgos en el entorno de trabajo, garantizando la seguridad y bienestar de los empleados.</p>
            </div>
          </div>
          <div className="service">
            <img src={Eval} alt="" />
            <div className="verdeCParr">
              <p>Auditorías de Seguridad en el Trabajo y Evaluaciones de Riesgo</p>
              <p className="descServ">Realizamos diagnósticos exhaustivos para identificar peligros y mejorar la gestión de seguridad, reduciendo incidentes laborales.</p>
            </div>
          </div>
          <div className="service">
            <img src={Asesoramiento} alt="" />
            <div className="verdeCParr">
              <p>Asesoramiento y Cumplimiento de Normativas Vigentes en ART y SRT</p>
              <p className="descServ">Brindamos orientación experta para asegurar el cumplimiento de la legislación vigente, optimizando la protección y prevención en el ámbito laboral.</p>
            </div>
          </div>
        </div>

        <div
          id="gestionAmb"
          className={`contServicios-cards${activeTab === 'gestionAmb' ? ' active-cards' : ''}`}
        >
          <div className="service">
            <img src={Impacto} alt="" />
            <div className="verdeCParr">
              <p>Estudios de Impacto Ambiental y Evaluaciones de Cumplimiento Legal</p>
              <p className="descServ">Analizamos y evaluamos los efectos ambientales de proyectos para garantizar el cumplimiento de la normativa vigente y minimizar su impacto.</p>
            </div>
          </div>
          <div className="service">
            <img src={Sistemas} alt="" />
            <div className="verdeCParr">
              <p>Implementación de Sistemas de Gestión Ambiental (ISO 14001)</p>
              <p className="descServ">Desarrollamos e implementamos sistemas eficientes para mejorar el desempeño ambiental de las organizaciones y asegurar su sostenibilidad.</p>
            </div>
          </div>
          <div className="service">
            <img src={Residuos} alt="" />
            <div className="verdeCParr">
              <p>Manejo y Gestión de Residuos Peligrosos</p>
              <p className="descServ">Aplicamos estrategias seguras y responsables para la manipulación, tratamiento y disposición final de residuos peligrosos, cumpliendo con la normativa vigente.</p>
            </div>
          </div>
          <div className="service">
            <img src={Emisiones} alt="" />
            <div className="verdeCParr">
              <p>Monitoreo de Emisiones y Vertidos Industriales</p>
              <p className="descServ">Realizamos controles exhaustivos para medir y reducir el impacto ambiental de las emisiones y descargas industriales, promoviendo una producción más limpia.</p>
            </div>
          </div>
        </div>

        <div
          id="capacitaciones"
          className={`contServicios-cards${activeTab === 'capacitaciones' ? ' active-cards' : ''}`}
        >
          <div className="service">
            <img src={Altura} alt="" />
            <div className="verdeCParr">
              <p>Seguridad en el Trabajo en Altura, Espacios Confinados y Seguridad Eléctrica</p>
              <p className="descServ">Implementamos medidas y capacitaciones para garantizar la protección de los trabajadores en entornos de alto riesgo, reduciendo accidentes y cumpliendo normativas.</p>
            </div>
          </div>
          <div className="service">
            <img src={Quimicos} alt="" />
            <div className="verdeCParr">
              <p>Manejo de Sustancias Peligrosas y Residuos Especiales</p>
              <p className="descServ">Aplicamos protocolos seguros para la manipulación, almacenamiento y disposición de materiales peligrosos, minimizando riesgos para la salud y el ambiente.</p>
            </div>
          </div>
          <div className="service">
            <img src={Brigada} alt="" />
            <div className="verdeCParr">
              <p>Formación de Brigadas de Emergencia y Simulacros de Evacuación</p>
              <p className="descServ">Capacitamos equipos especializados en respuesta a emergencias, asegurando una evacuación eficiente y la reducción de riesgos en situaciones críticas.</p>
            </div>
          </div>
          <div className="service">
            <img src={Autoelevador} alt="" />
            <div className="verdeCParr">
              <p>Cursos Habilitantes Según Normativa Vigente (Resolución SRT 960/15)</p>
              <p className="descServ">Ofrecemos formación certificada en seguridad laboral, cumpliendo con los requisitos legales para garantizar la protección y preparación de los trabajadores que utilicen autoelevadores.</p>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-left" className="imgCont">
        <img className="img-W" src={Woman} alt="" />
      </div>
    </div>
  );
};

export default Servicios;
