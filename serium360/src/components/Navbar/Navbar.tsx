import React, { useState } from 'react';
import logo from '../../assets/logo.webp';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import "./Navbar.css"
type Props = {
  about: string;
  faqs: string;
  contact: string;
  services: string;
}
const Navbar: React.FC<Props> = ({about, faqs, services, contact}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navigateToSection = (path: string, hash: string) => {
    if (location.pathname === path) {
      location.href = hash;
    } else {
      location.href = `${path}${hash}`;
    }
  };

  const onClick: MenuProps['onClick'] = ({ key }) => {
    if (key === "2") navigateToSection("/hse", "#servicesHSE");
    if (key === "1") navigateToSection("/mro", "#servicesMRO");
  };

  const items: MenuProps['items'] = [
    {
      label: 'MRO',
      key: '1',
    },
    {
      label: 'HSE',
      key: '2',
    },
  ];
  return (
    <div className="cajaMenu">
      <nav>
        <div className="contBanNav">
          <img
            onClick={() => { window.location.href = '/'; }}
            src={logo}
            id="logo"
            alt=""
          />
          <ul className="lista">
            <li><a href={about}>NOSOTROS</a></li>
            <li>  
              <Dropdown className='licursor' menu={{ items, onClick }}>
                <a onClick={(e) => { e.preventDefault(); window.location.href = services; }}>
                  <Space>
                    SERVICIOS
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li><a href={faqs}>PREGUNTAS FRECUENTES</a></li>
            <li><a className="conCont" href={contact}>CONTACTAR</a></li>
          </ul>

          {/* Menú responsive */}
          <div className="cajaMenuRep">
            <input
              type="checkbox"
              id="checkMenRep"
              checked={menuOpen}
              onChange={() => setMenuOpen(!menuOpen)}
            />
            <label htmlFor="checkMenRep" className="checkbtnRep">
              <i id="abrir" className="fa-solid fa-bars"></i>
            </label>
            <ul
              id="ulREP"
              className={menuOpen ? '' : 'sacarMenuRep'}
            >
              <li><a href={about} onClick={closeMenu}>NOSOTROS</a></li>
              <li>              
              <Dropdown className='licursor' menu={{ items, onClick }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    SERVICIOS
                  </Space>
                </a>
              </Dropdown></li>
              <li><a href={faqs} onClick={closeMenu}>PREGUNTAS FRECUENTES</a></li>
              <li><a href={contact} onClick={closeMenu}>CONTACTAR</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Barra verde */}
      <div id="barraVerde">
        <div className="contBanNav">
          <div className="contIzq">
            <div onClick={() => { window.location.href = 'mailto:contacto@serium360.com'; }}>
              <i className="fa-regular fa-envelope"></i>
              <p>contacto@serium360.com</p>
            </div>
            <div onClick={() => { window.location.href = 'https://api.whatsapp.com/send?phone=5491166312030'; }}>
              <i className="fa-brands fa-whatsapp"></i>
              <p>+54 9 11 6631-2030</p>
            </div>
          </div>
          <ul className="iconosDer">
            <div>
              <i
                onClick={() => { window.location.href = 'https://www.facebook.com/profile.php?id=61572862797658'; }}
                className="fa-brands fa-facebook-f"
              ></i>
            </div>
            <div>
              <i
                onClick={() => { window.location.href = 'https://www.instagram.com/serium360/'; }}
                className="fa-brands fa-instagram"
              ></i>
            </div>
            <div>
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
