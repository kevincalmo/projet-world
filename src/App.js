
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import About from './pages/About';

function App() {
  return (
    //On fait une navigation
    <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/a-propos" exact component={About} />
          <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
