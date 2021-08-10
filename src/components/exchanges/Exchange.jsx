import { useAxios } from './AxiosHook'
import Container  from 'react-bootstrap/Container'
import Loading  from '../loading/Loading'
import {Errors}  from '../errors/Errors'
import { ExchangeCard } from './exchangeCard/ExchangeCard'

export default function Exchange() {

    const { data, loading, error} =  useAxios()
    console.log('Calling from Exchange.jsx')
  
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
                        <Container key={d.Id}>
                          <ExchangeCard src={`https://www.cryptocompare.com${d.LogoUrl}`}
                                        name={d.Name}
                                        description={d.Description}
                                        href={d.AffiliateURL}
                                        logoUrl={d.LogoUrl}
                                        centralizationType={d.CentralizationType}
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
