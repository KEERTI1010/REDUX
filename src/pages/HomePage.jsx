import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import ResultGrid from '../components/ResultGrid'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'

const HomePage = () => {
  const {query} = useSelector ((store) => store.search)
  return (
    <div>

        <div className='flex justify-between items-center py-5 px-10 bg-(--c1)'>
           <h2 className='text-2xl font-semibold'>Media Search</h2>
           <div className='flex gap-5 items-center'>
              <Link className='text-lg bg-(--c4) rounded text-(--c1) px-2 py-1' to='/'>Search</Link>
              <Link className='text-lg bg-(--c4) rounded text-(--c1) px-2 py-1' to='/collection'>Collection</Link>
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
