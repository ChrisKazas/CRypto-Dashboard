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
          <Container>
            {loading ? (<Loading loading={loading} />) : (
                <div>
                    {error && (
                      <Errors  />
                    )}
                    {
                      data.map((d) => (
                        <Container key={d[1].Id}>
                          <CoinCard 
                            name={d[1].FullName}
                            description={d[1].Description}
                            url={d[1].Url}
                            logoUrl={d[1].ImageUrl}
                          />
                        </Container>
                      ))
                    }
                </div>
            )}
          </Container>
        </div>
    )


}