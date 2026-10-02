import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { clearCollection} from '../redux/features/collectionSlice'

const CollectionPage = () => {
  const collection=useSelector(state=>state.collection.items)
  const dispatch = useDispatch()
  const clearAll = () => {
    dispatch(clearCollection())
  }

  return (
    <div className=' overflow-auto px-10 py-6'>
      <div className='flex justify-between mb-6'>
        <h2 className='text-xl font-medium'>My Collection </h2>
        <button onClick={() => {
          clearAll()
        }} 
        className= ' active:scale-95 transition cursor-pointer bg-red-600 px-5 py-2 text-base font-medium rounded '>Clear Collection</button>
      </div>
      <div className="w-full flex justify-start flex-wrap gap-6" >
        {collection.map((item,idx)=>{
          return  <div key={idx}>
            <CollectionCard item={item} />
          </div>
        })}
      </div>
    </div>
  )
}

export default CollectionPage
