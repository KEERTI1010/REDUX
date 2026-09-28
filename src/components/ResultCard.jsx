

const ResultCard = ({item}) => {

  const addToCollection = (item) => {
    
    const oldData = JSON.parse(localStorage.getItem("collection")) || []
    console.log(oldData);
    const newData = [...oldData,item]
    console.log(newData)

    localStorage.setItem('collection',JSON.stringify(newData))
  }
  return (
      <div className='w-[18vw]  relative h-80 rounded-xl overflow-hidden  bg-white'>
        <a target = '_blank'  className='h-full' href={item.url}>
          {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" />: ''}
          {item.type == "video" ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src}></video> : ""}
          {item.type == "gif" ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ""}
        </a>
        <div id='bottom' className='flex justify-between gap-3 items-center w-full px-4 py-6 absolute bottom-0 text-white'>
          <h2 className='text-black capitalize h-14 overflow-hidden font-bold text-center'>{item.title}</h2>
          <button
          onClick={() => {
            addToCollection(item)
          }}
          className="bg-blue-600 active-scale-95 text-white rounded px-3 py-1 cursor-pointer  font-medium ">Save</button>
        </div>
      </div>
  )
}

export default ResultCard
