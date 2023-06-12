// import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import navbar from "./src/components/navbar"
import Dogs from ".src/pages/Dog"
import Cats from ".src/pages/Cat"
import Sheeps from ".src/pages/Sheep"
import Goats from "./src/pages/Goats"
function App() {
  return (
    <Router>
      <navbar />
      <Switch>
        <Route path='/' exact component={Dogs} />
        <Route path='/cats' component={Cats} />
        <Route path='/sheeps' component={Sheeps} />
        <Route path='/goats' component={Goats} />
      </Switch>
    </Router>
  );
}

export default App;
