import './App.css'
import MainPage from './pages/Main/MainPage'
import HSE from './pages/HSE/HSE'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 800,
    });
  }, []);
  return (
    <>
    <BrowserRouter basename="/page/">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
          <Route path='/hse' element={<HSE/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
