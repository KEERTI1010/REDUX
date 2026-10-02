// import React from 'react'
import {Route,Routes} from 'react-router-dom'
import HomePage from "./pages/HomePage"
import CollectionPage from "./pages/CollectionPage"
import Navbar from "./components/Navbar"
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className='h-screen w-full bg-black text-amber-50'>
    
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path = '/collection' element={<CollectionPage />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
