import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Exchange from "./components/exchanges/Exchange"
import { Coins } from './components/coins/Coins'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { NavBar } from './components/navbar/NavBar'

function App() {
    
  return (
    <div className="App" id='home'>
      <NavBar />
      <Container>
        <Row>
          <Col>
            <Coins />
          </Col>
          <Col>
          </Col>
          <Col>
            <Exchange />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
