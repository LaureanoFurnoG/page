import './Navbar.css'
import React, { useEffect, useState } from "react";

function Header() {
  const [menuActive, setMenuAct] = useState(false)


  const activeMenu = () =>{
    setMenuAct(!menuActive)
  }
  
  useEffect(() =>{
    if(menuActive == false){
      document.querySelector('.background-MenuR')?.classList.remove('top-menu')
    }else{
      document.querySelector('.background-MenuR')?.classList.add('top-menu')
    }
  }, [menuActive])
  return (
    <>
        <header className='color-background-white'>
            <nav>
                <img src="" className='logo' alt="" />
                <ul>
                    <li><a className='font-bebas color-text-black' href="#about">NOSOTROS</a></li>
                    <li><a className='font-bebas color-text-black' href="#projects">OBRAS</a></li>
                    <li><a className='font-bebas color-text-black' href="clients">NUESTROS CLIENTES</a></li>
                    <li><a className='font-bebas color-text-black' href="#faqs">PREGUNTAS FRECUENTES</a></li>
                </ul>
            </nav>
            <div className='contact-zone color-background'>
                <a className='font-bebas color-text-white' href="#contact">CONTACTAR</a>
                <div className="Down-menu">
                    <div className="containerMenu">
                        <svg onClick={() => activeMenu()} className="icon-Menu-Res" xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#1f1f1f"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                    </div>
                </div>
            </div>
            <div className="background-MenuR">
                <ul className="list-headerMenu MENU-responsive">
                <li><a onClick={() => activeMenu()} href="#About-section">SOBRE NOSOTROS</a></li>
                <li><a onClick={() => activeMenu()} href="#Services-section">SERVICIOS</a></li>
                <li><a onClick={() => activeMenu()} href="#Apprec-section">VALORACIONES</a></li>
                <li className="contact-header"><a onClick={() => activeMenu()} href="#Contact-section">CONTACTAR</a></li>
                </ul>
            </div>
        </header>
    </>
  )
}

export default Header