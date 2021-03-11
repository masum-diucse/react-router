import './App.css';
import banner from './image/stadium.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import TeamDetails from './components/TeamDetails/TeamDetails';
function App() {
  return (
    <div className="app">
      <Router>
      <Link to="/">
       <img src={banner} alt=""/>
      </Link>
     
       <Switch>
       <Route path="/team/:idTeam">
            <TeamDetails></TeamDetails>
         </Route>
         <Route exact path="/">
            <Home></Home>
         </Route>
       </Switch>
     </Router>
    </div>
   
  );
}

export default App;
