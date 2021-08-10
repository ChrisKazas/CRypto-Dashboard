import { useState, useEffect } from 'react'
import axios from 'axios'

export const useAxios = () => {
    
    const [data, setData] = useState(undefined);
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    
    const URL = 'https://min-api.cryptocompare.com/data/exchanges/general?api_key={ebd536ee4bbacfe0e02fec2f198234e5f8fe824477321a398ffcb8b06fde73ac}'
    
    const fetchData = async () => {
        try{
            const res = await axios.get(URL)
            let obj = await Object.entries(res.data)[5][1]
            let arr = []
            for(const key of Object.keys(obj)){
                arr.push(obj[key])
            }
            setData(arr)
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
    
    useEffect(()=>{    
        fetchData()        
    },[])

    return {data, error, loading}
}


