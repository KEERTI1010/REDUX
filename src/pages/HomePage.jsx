
import ResultGrid from '../components/ResultGrid'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'

const HomePage = () => {
  return (
    <div>

        <div className='text-center p-5 bg-blue-900 text-2xl font-semibold'>
            Media Search
        </div>

        <SearchBar />
        <Tabs />
        <ResultGrid />
    </div>
  )
}

export default HomePage
