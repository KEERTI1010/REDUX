// import React from 'react'
import {Route,Routes} from 'react-router-dom'
import HomePage from "./pages/HomePage"
import CollectionPage from "./pages/CollectionPage"
const App = () => {
  return (
    <div className='h-screen w-full bg-black text-amber-50'>
        
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path = '/collection' element={<CollectionPage />} />
        </Routes>
    </div>
  )
}

export default App
