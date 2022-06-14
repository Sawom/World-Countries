import logo from './logo.svg';
import './App.css';
import { Button,Row,Col,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Countries from './Components/Countries/Countries';
function App() {
  return (
    <div className="App">
     <Countries></Countries>
    </div>
  );
}

export default App;
