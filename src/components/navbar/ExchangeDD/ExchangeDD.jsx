import NavDropdown from 'react-bootstrap/NavDropdown'


export const ExchangeDD = (props) => {

    // console.log(props.data)

    let e = Object.entries(props.data)['CoinInfo']
    console.log('From DD: ',e)
    
    // let dds = props.

    return (
        <div>
            <NavDropdown title="Exchange by Vol" id="navbarScrollingDropdown" flip='false'>
                {
                //   e.map((d)=>(
                //         <NavDropdown.Item key={d.exchange} href="#action3">{d.exchange}</NavDropdown.Item>   
                //     ))
                }
            </NavDropdown>
        </div>
    )
}
