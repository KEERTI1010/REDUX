import React from 'react'

const ResultCard = ({item}) => {
  return (
    <div>
      <div className='w-[18vw]  relative h-80 bg-white rounded'>
        <div className='h-full'>
          {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" />: ''}
          {item.type == "video" ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src}></video> : ""}
          {item.type == "gif" ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ""}
        </div>
        <div id='bottom' className='w-full px-6 py-10 absolute bottom-0 text-white'>
          <h2 className='text-black capitalize font-bold text-center'>{item.title}</h2>
        </div>
      </div>
    </div>
  )
}

export default ResultCard
