import {Fragment} from 'react'
import {useApi} from './ApiHook'
import { CoinCard } from './coinCard/CoinCard'
import {Errors}  from '../errors/Errors'
import Loading from '../loading/Loading'
import Container from 'react-bootstrap/Container'



// const cc = require('cryptocompare')


export const Coins = () => {


    const {data, error, loading} = useApi()
    console.log('Calling from Coins.jsx')
   
    return (
        <div>
            {loading ? (<Loading loading={loading} />) : (
                <div>
                    {error && (
                      <Errors  />
                    )}
                    {
                      data.map((d) => (
                          <CoinCard
                            key={d[1].Id} 
                            name={d[1].FullName}
                            description={d[1].Description}
                            url={d[1].Url}
                            logoUrl={d[1].ImageUrl}
                            assetTokenStatus={d[1].AssetTokenStatus}
                            proofType={d[1].ProofType}
                          />
                      ))
                    }
                </div>
            )}
        </div>
    )


}