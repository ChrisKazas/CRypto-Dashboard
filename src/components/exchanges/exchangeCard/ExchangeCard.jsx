import  Button  from 'react-bootstrap/Button'
import  Card  from 'react-bootstrap/Card'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'




export const ExchangeCard = (props) => {

    return (
        <div style={{float: 'right'}}>
            <Card  style={{ width: '15rem', marginBottom: '.5rem', marginTop: '.5rem' }}>
            <Card.Header>
            <Tabs id="exchangeCardTab" className="mb-3">
                <Tab eventKey="exchange" title="Exchange">
                    <Card.Title style={{borderTop: '2px'}}>
                        {props.name}: 
                        <small style={{fontSize:'15px'}} className="text-muted">{props.centralizationType}</small>
                    </Card.Title>
                    <Card.Img variant="top" src={`https://www.cryptocompare.com${props.logoUrl}`}  />
                    
                </Tab>
                <Tab eventKey="profile" title="About">
                <Card.Body>
                <Card.Title style={{borderTop: '2px'}}>
                    {props.name}
                </Card.Title>
                    <Card.Text>
                    {props.description}
                    </Card.Text>
                </Card.Body>
                </Tab>
            </Tabs>
            </Card.Header>
            <Card.Body>
                <h6>Crypto Asset Classes:</h6>
                <ul>
                    {
                    props.items.map((i)=> (
                        <li key={i}>{i}</li>
                        ))
                    }
                </ul>
            </Card.Body>  
            <Card.Footer>
                <Button href={props.href} style={{float: 'right'}} variant="outline-info">Visit {props.name}</Button>
            </Card.Footer>
            </Card>       
        </div>
    )
}
