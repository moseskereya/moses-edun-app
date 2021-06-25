import './App.css';
import Nav from "./component/Nav"
import Home from "./component/banner"
import MovieDetail from "./component/MovieDetail"
import Movie from "./Action"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
      <Router>
    <div className="App">
          <Nav />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Movie" component={Movie} />
            <Route path="/MovieDetail/:id" component={MovieDetail}/>
        </Switch>
         </div>
        </Router>
  );
}

export default App;
