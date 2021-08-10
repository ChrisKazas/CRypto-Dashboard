import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'



export const CoinCard = (props) => {

    // console.log(props)

    return (
        <div>
            <Card  style={{ width: '15rem', marginBottom: '1rem', marginTop: '1rem' }}>
            <Card.Header>
            <Tabs id="exchangeCardTab" className="mb-3">
                <Tab eventKey="home" title="Coin">
                    <Card.Title style={{borderTop: '2px'}}>{props.name}</Card.Title>
                    <Card.Img variant="top" src={`https://www.cryptocompare.com${props.logoUrl}`}  />
                </Tab>
                <Tab eventKey="profile" title="About">
                <Card.Body>
                <Card.Title style={{borderTop: '2px'}}>{props.name}</Card.Title>
                    <Card.Text>
                    {props.description}
                    </Card.Text>
                </Card.Body>
                </Tab>
            </Tabs>
            </Card.Header>
            <Card.Body>
                <h6>Mining Class</h6>
                <ul>
                    <li>{props.proofType}</li>
                </ul>
            </Card.Body>
            <Card.Footer>
                <Button 
                    href={`https://www.cryptocompare.com${props.url}`} 
                    style={{float: 'right'}} 
                    variant="outline-info">{props.name} Overview
                </Button>
            </Card.Footer>
            </Card>         
        </div>
    )
}