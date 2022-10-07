import './App.css';
import { Route } from "wouter"
import Home from './containers/Home/Home';
import Nosotros from './containers/Nosotros/Nosotros';
import Contactos from './containers/Contactos/Contactos'
import Tateti from './containers/Tateti/Tateti';

function App() {
  return (
    <div className="App"> 
      <Route component={Home} path='/' />     
      <Route component={Nosotros} path='/nosotros' />
      <Route component={Contactos} path='/contactos'/>
      <Route component={Tateti} path='/tateti'/>
    </div>
  );
}

export default App;
