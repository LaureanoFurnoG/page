import React from 'react';
import aboutImg from '../../assets/images/about.webp';
import Footer from '../../../../components/Footer/Footer';
import axios from 'axios';
import Swal from 'sweetalert2'

const Contacto: React.FC = () => {
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const values = {
      emailClient: 'contacto@serium360.com',
      inputForm1: data.get('inputForm1'),
      inputForm2: data.get('inputForm2'),
      inputForm4: data.get('inputForm4'),
      inputForm5: data.get('inputForm5'),
    };
    try {
      await axios.post(
        "https://send-emails-three.vercel.app/api/sendEmail",
        values,
        { headers: { 'Content-Type': 'application/json' } }
      );
      Swal.fire({
        title: "Formulario enviado con éxito",
        text: "Gracias por contactarnos. Nuestro equipo se pondrá en contacto a la brevedad.",
        icon: "success",
      });

    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Algo salio mal",
        text: "Lamentablemente el formulario no fue enviado correctamente, vuelve a intentar o contacta por correo.",
        icon: "error",
      });
    }

    (document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea') as NodeListOf<HTMLInputElement>)
      .forEach(el => el.value = '');
  };

  return (
    <>
      <div className="centCont">
        <div className="formulario">
          <form onSubmit={handleSubmit}>
            <input type="text"  name="inputForm1" placeholder="Nombre y apellido" required/>
            <input type="email" name="inputForm2" placeholder="Email" required/>
            <input type="tel"   name="inputForm4" placeholder="Telefono" required/>
            <input type="text"  name="inputForm5" className="message" placeholder="Mensaje" required/>
            <input type="submit" value="ENVIAR" />
          </form>
          <img src={aboutImg} alt="" />
        </div>
      </div>
      <Footer about={'#aboutHSE'} faqs={'#faqsHSE'} contact={'#contactHSE'} services={'#servicesHSE'} />
    </>
  );
};

export default Contacto;
