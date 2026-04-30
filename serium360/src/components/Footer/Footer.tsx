import React from 'react';
type Props = {
  about: string;
  faqs: string;
  contact: string;
  services: string;
}
const Footer: React.FC<Props> = ({about, faqs, services, contact}) => {
  return (
    <footer>
      <div className="centFooter">
        <div className="hip">
          <ul>
            <li><h3>SECCIONES</h3></li>
            <li><a href={about}>NOSOTROS</a></li>
            <li><a href={services}>SERVICIOS</a></li>
            <li><a href={faqs}>PREGUNTAS FRECUENTES</a></li>
            <li><a href={contact}>CONTACTAR</a></li>
          </ul>
          <ul>
            <li><h3>CONTACTOS</h3></li>
            <li><a href="mailto:contacto@serium360.com">EMAIL contacto@serium360.com</a></li>
            <li><a href="https://api.whatsapp.com/send?phone=5491166312030">TLF: +54 911 6631-2030</a></li>
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
          </ul>
        </div>
        <ul className="credits">
          <li><p>Serium360 ©® 2025 Copyright All Rights Reserved.</p></li>
          <li><p>Material gráfico de: www.freepik.es</p></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
