import './App.css'
import MainPage from './pages/Main/MainPage'
import HSE from './pages/HSE/HSE'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import MRO from './pages/MRO/MRO';
function App() {
  useEffect(() => {
    AOS.init({
      
    });
  }, []);
  return (
    <>
    <BrowserRouter basename="/page/">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
          <Route path='/hse' element={<HSE/>}/>
          <Route path='/mro' element={<MRO/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
