import {useSelector} from 'react-redux'
import ResultGrid from '../components/ResultGrid'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'

const HomePage = () => {
  const {query} = useSelector ((store) => store.search)
  return (
    <div>

        <div className=' py-5 px-10 bg-[var(--c1)]'>
           <h2 className='text-2xl font-medium'>Media Search</h2>

           <div>

           </div>
        </div>

        <SearchBar />
        {query != ''?
        <div><Tabs />
        <ResultGrid /></div>:''}


    </div>
  )
}

export default HomePage
