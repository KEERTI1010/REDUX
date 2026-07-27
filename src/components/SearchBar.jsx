import React, { useState } from 'react'

const SearchBar = () => {

    const [text, settext] = useState('')

    const submitHandler = () => {
      console.log("Form Submitted");
    }

  return (
    <div>
        <form onSubmit={submitHandler} className='flex bg-blue-950 gap-5 p-10'>
            <input required className = "w-full border-white border-2 m-4 p-2 rounded-b-md px-4 text-xl text-white " type="text"
             placeholder = 'Search Anything....'  />
            <button className = "active:scale-95 cursor-pointer border-white border-2 m-4 p-2 rounded-b-md px-4 text-xl text-white ">Search</button>
        </form>
    </div>
  )
}

export default SearchBar
