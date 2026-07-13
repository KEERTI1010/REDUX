import React, { useState } from 'react'

const SearchBar = () => {

    const [text, settext] = useState('')

  return (
    <div>
        <form>
            <input className = "border-white border-2 text-center m-4 p-2 rounded-b-md px-4 text-xl text-white " type="text"
             placeholder = 'Search Anything....'  />
            <button className = "border-white border-2 text-center m-4 p-2 rounded-b-md px-4 text-xl text-white ">Search</button>
        </form>
    </div>
  )
}

export default SearchBar
