import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { NavBar } from './components';
import Divisions  from './pages/divisions';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route to="/" component={Divisions}/>
    </Switch>
    </BrowserRouter>
 );
}

export default App;
