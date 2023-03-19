import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

import Home from './components/Home'
import About from './components/About'
import Vans from './components/Vans'
import VansDetails from './components/VansDetails'

import HostNavigation from './components/Host/HostNavigation'
import Dashboard from './components/Host/Dashboard'
import Reviews from './components/Host/Reviews'
import Income from './components/Host/Income'
import HostVansList from './components/Host/HostVansList'
import HostVansListDetails from './components/Host/HostVansListDetails'

import "../server"



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VansDetails />} />
          <Route path='host' element={<HostNavigation />}>
            <Route index element={< Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='vans' element={<HostVansList />} />
            <Route path='vans/:id' element={<HostVansListDetails />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
