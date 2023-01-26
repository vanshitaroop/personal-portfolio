import logo from './logo.svg';
import './App.css';
import { Navbarp } from './components/Navbarp';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner} from './components/Banner'
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App">
      <Navbarp/>
      <Banner/>
    </div>
  );
}

export default App;
