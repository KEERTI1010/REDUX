import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {

    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(setQuery(text))
      setText("")

    }

  return (
    <div>
        <form onSubmit={(e) => {submitHandler(e)}}className='flex bg-blue-950 gap-5 p-10'>
            <input
            value={text}
            onChange={(e)=>{
              setText(e.target.value);
            }}
            required 
            className = "w-full border-white border-2 m-4 p-2 rounded-b-md px-4 text-xl text-white " type="text"
            placeholder = 'Search Anything....'  />
            <button className = "active:scale-95 cursor-pointer border-white border-2 m-4 p-2 rounded-b-md px-4 text-xl text-white ">Search</button>
        </form>
    </div>
  )
}

export default SearchBar
