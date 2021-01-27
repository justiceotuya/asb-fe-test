import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Divisions  from './pages/divisions';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/divisions" component={Divisions}/>
      <Route path="/" component={Home} />
    </Switch>
    </BrowserRouter>
 );
}

export default App;
