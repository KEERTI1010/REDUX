import React from 'react'
import { useDispatch } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
    const tabs = ["photos","videos","GIFs"]
    const dispatch = useDispatch()

  return (
    <div className='flex gap-10 p-10'>
        {tabs.map(function(elem,idx){
            return(
            <button className="bg-blue-800 cursor-pointer active:scale-95 py-1 px-4 rounded uppercase" 
            key={idx}
            onClick={()=> {
                dispatch(setActiveTabs(elem))
            }}
            >
                {elem}
            </button>
        )
        })}
    </div>
  )
}

export default Tabs
