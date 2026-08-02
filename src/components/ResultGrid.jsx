import { useDispatch, useSelector } from "react-redux"
import {fetchPhotos,fetchVideos,fetchGIF} from "../api/mediaApi"
import { setQuery,setLoading,setError,setResults } from "../redux/features/searchSlice"
import { useEffect } from "react"

const ResultGrid = () => {

    const {query,activeTab,results,loading,error} = useSelector((store)=> store.search)

    useEffect(function (){

        const getData = async ()=>{

            let data
            if(activeTab == "photos"){
                data = await fetchPhotos(query)
            }
            if(activeTab == "videos"){
                data = await fetchVideos(query)
            }
            if(activeTab == "gif"){
                data = await fetchGIF(query)
            }
            console.log(data);
    }

        getData()
    }, [query,activeTab])
    return (
    <div>
        
    </div>
  )
}

export default ResultGrid

