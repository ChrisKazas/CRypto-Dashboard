import { useAxios } from './AxiosHook'
import Container  from 'react-bootstrap/Container'
import Loading  from '../loading/Loading'
import {Errors}  from '../errors/Errors'
import { ExchangeCard } from './exchangeCard/ExchangeCard'

export default function Exchange() {

    const { data, loading, error} =  useAxios()
    console.log('Calling from Exchange.jsx')
  
    return (
        <div style={{float: 'right'}}>
            {loading ? (<Loading loading={loading} />) : (
                <div>
                    {error && (
                      <Errors  />
                    )}
                    {
                      data.map((d) => (
                          <ExchangeCard src={`https://www.cryptocompare.com${d.LogoUrl}`}
                                        name={d.Name}
                                        description={d.Description}
                                        href={d.AffiliateURL}
                                        logoUrl={d.LogoUrl}
                                        centralizationType={d.CentralizationType}
                                        key={d.Id}
                                        items={d.ItemType}
                          />
                      ))
                    }
                </div>
            )}
        </div>
    )
}
