import { Fragment } from 'react' 
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap'

export const CoinCard = (props) => {

    // console.log(props)

    return (
        <Fragment>
            <Container key={props.Id}>
                    <Card  style={{ align: 'center', width: '20rem', marginTop: '2em' }}>
                    <Card.Img variant="top" src={`https://www.cryptocompare.com${props.logoUrl}`} />
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>{props.description}</Card.Text>
                        <Button href={`https://www.cryptocompare.com${props.url}`} style={{float: 'right'}} >{props.name}</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Footer</small>
                    </Card.Footer>
                    </Card>
                </Container>          
        </Fragment>
    )
}