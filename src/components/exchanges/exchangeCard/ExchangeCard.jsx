import { Fragment } from 'react'
import  Button  from 'react-bootstrap/Button'
import  Card  from 'react-bootstrap/Card'
import  Container  from 'react-bootstrap/Container'

export const ExchangeCard = (props) => {

    return (
        <Fragment>
            <Container key={props.Id}>
                    <Card  style={{ align: 'center', width: '20rem', marginTop: '2em' }}>
                    <Card.Img variant="top" src={`https://www.cryptocompare.com${props.logoUrl}`}  />
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>
                        {props.description}
                        </Card.Text>
                        <Button href={props.href} style={{float: 'right'}} >{props.name}</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{props.centralizationType}</small>
                    </Card.Footer>
                    </Card>
                </Container>          
        </Fragment>
    )
}
