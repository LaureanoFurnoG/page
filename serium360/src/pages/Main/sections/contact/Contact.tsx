import React from 'react';
import Footer from '../../../../components/Footer/Footer';
import imageContact from '../../assets/contact/image.png';
import './contact.css';
import axios from 'axios';

const Contact: React.FC = () => {
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const values = {
      emailClient: 'laureanofurno@gmail.com',
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="centCont">
        <div className="formulario">
          <form onSubmit={handleSubmit}>
            <input type="text"  name="inputForm1" placeholder="Nombre y apellido" />
            <input type="email" name="inputForm2" placeholder="Email" />
            <input type="tel"   name="inputForm4" placeholder="Telefono" />
            <input type="text"  name="inputForm5" className="message" placeholder="Mensaje" />
            <input type="submit" value="ENVIAR" />
          </form>
          <img src={imageContact} alt="" />
        </div>
      </div>
      <Footer about={'#aboutMain'} services={'#servicesMain'} faqs={'#faqsMain'} contact={'#contactMain'}/>
    </>
  );
};

export default Contact;