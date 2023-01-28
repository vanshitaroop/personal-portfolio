import { Contact } from './components/Contact';
import './App.css';
import { Navbarp } from './components/Navbarp';
import { Skills } from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner} from './components/Banner'
import { Project } from './components/Project';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbarp/>
      <Banner/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
