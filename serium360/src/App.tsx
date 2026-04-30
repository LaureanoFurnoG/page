import './App.css'
import MainPage from './pages/Main/MainPage'
import HSE from './pages/HSE/HSE'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

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
