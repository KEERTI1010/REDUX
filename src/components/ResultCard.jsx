import React from 'react'

const ResultCard = ({item}) => {
  return (
    <div className='w-[20vw] h-40 bg-amber-200 rounded'>
      {item.type == 'photo' ? <img src={item.src} alt="" />: ''}
      {item.type == "video" ? "" : ""}
      {item.type == "gif" ? "" : ""}
        <h1 className='text-amber-900'>{item.title}</h1>
    </div>
  )
}

export default ResultCard
