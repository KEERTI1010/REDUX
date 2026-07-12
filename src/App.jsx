/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
*/

import { fetchPhotos, fetchVideos, fetchGIF} from './api/mediaApi'

const App = () => {
  return (
    <div className='h-screen w-full bg-gray-950 text-amber-50'>
        <button className='bg-amber-300 py-2 px-4 m-5' onClick = {async () => {
          const data = await fetchPhotos('cat')
          console.log(data.results);
        }} >Get Photos</button>

        <button className='bg-amber-300 py-2 px-4 m-5' onClick = {async () => {
          const data = await fetchVideos('cat')
          console.log(data.videos);
        }} >Get Videos</button>

        <button className='bg-amber-300 py-2 px-4 m-5' onClick = {async () => {
          const data = await fetchGIF('cat')
          console.log(data.data);
        }} >Get GIFS</button>
    </div>
  )
}

export default App
