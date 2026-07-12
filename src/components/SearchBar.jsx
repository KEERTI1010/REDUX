import React, { useState } from 'react'

const SearchBar = () => {

    const [text, settext] = useState('')

  return (
    <div>
        <form>
            <input type="text
             placeholder="search anything />
            <button>Search</button>
        </form>
    </div>
  )
}

export default SearchBar
