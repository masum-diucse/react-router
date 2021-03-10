import './App.css';
import banner from './image/stadium.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="app">
     <img src={banner} alt=""/>
    </div>
   
  );
}

export default App;
