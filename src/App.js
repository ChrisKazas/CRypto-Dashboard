import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Exchange from "./components/exchanges/Exchange"
import { Coins } from './components/coins/Coins'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { NavBar } from './components/navbar/NavBar'
import Scroll from 'react-scroll-component'


function App() {
    
  return (
    <div className="App" id='home'>
      <NavBar />
        <Row>
          <Col style={{float: 'right', marginLeft: '.5rem'}}>
            <Scroll direction='vertical' height='50rem'>
              <Coins />
            </Scroll>
          </Col>
          <Col  md={7} style={{ backgroundColor:'blue'}}>
            <Row  md={7} style={{ backgroundColor:'red'}}></Row>
            <Row  md={7} style={{ backgroundColor:'lightgrey'}}></Row>
          </Col>
          <Col style={{float: 'right', marginRight: '.5rem'}}>
            <Scroll direction='vertical' height='50rem'>
              <Exchange />
            </Scroll>
          </Col>
        </Row>
    </div>
  );
}

export default App;
