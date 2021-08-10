import {Fragment, useEffect, useState} from 'react'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Navbar from 'react-bootstrap/Navbar'
import Nav  from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import BtcLogo from './assets/bitcoin-btc-logo.png'
import XrpLogo from './assets/xrp-xrp-logo.png'
import { ExchangeDD } from './ExchangeDD/ExchangeDD'
import { CC_API_KEY } from '../../config'

const cc = require('cryptocompare')

export const NavBar = () => {

    const [topExchanges, setTopExchanges] = useState()

    cc.setApiKey(CC_API_KEY)


    let getData = async () => {

        let data = await cc.topExchangesFull('BTC', 'USD', 10)
        setTopExchanges(data)
        
    }

    useEffect(()=>{
        getData()
    },[])


    return (
        <Fragment>
            <Navbar bg="primary" variant="dark" expand="lg" sticky='top' >
                <Container>
                    <Navbar.Brand href="#" style={{marginLeft: '1rem'}}>
                        <Image src={BtcLogo} width='20px' height='20px' />
                        Crypto Dash
                        <Image src={XrpLogo} width='20px' height='20px'  />
                    </Navbar.Brand>
                </Container>
                <Container>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Coins</Nav.Link>
                        <ExchangeDD data={topExchanges}/>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                            />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    )
}