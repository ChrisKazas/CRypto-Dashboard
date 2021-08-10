import {useEffect, useState} from 'react'

const cc = require('cryptocompare')



export const useApi = () => {
    
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    let getCoins = async () => {
        cc.setApiKey('ebd536ee4bbacfe0e02fec2f198234e5f8fe824477321a398ffcb8b06fde73ac')

        try{
            let coins = await cc.coinList()
            let obj = await Object.entries(coins.Data)
            let arr = []
            for(const key of Object.keys(obj)){
                arr.push(obj[key])
            }
            console.log(arr)
            setData(arr)
        }catch(e){
            setError('Error: ')
            console.log(e)
        }finally{
            console.log('Loading done')
            setLoading(false)
        }
           
    }

    useEffect(() => {
        getCoins()
    }, [])

    
    return {data, error, loading }
}
