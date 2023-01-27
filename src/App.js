import logo from './logo.svg';
import './App.css';
import { Navbarp } from './components/Navbarp';
import { Skills } from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner} from './components/Banner'
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App">
      <Navbarp/>
      <Banner/>
      <Skills/>
    </div>
  );
}

export default App;
