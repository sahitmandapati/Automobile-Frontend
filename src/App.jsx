import './App.css'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Vans from './components/Vans'
import VansDetails from './components/VansDetails'

import "../server"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
        <Route path='/vans/:id' element={<VansDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
