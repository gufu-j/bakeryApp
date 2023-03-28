import {useState} from 'react';
import './App.css';
import BakeryPage from './BakeryPage';
import Home from './Home';
import NavBar from './NavBar';
import Car from './Car';
import {Route, Switch} from "react-router-dom"

 

function App() {

 const[shopping, setShopping] = useState([])
 
 
 function handleCakeInCart(cakeInCart){
    setShopping([...shopping, cakeInCart])
  }

 

  return (
    <div className="App">
      <NavBar/>
      <Switch>
      <Route exact path="/">
      <Home/>
      </Route>
      <Route exact path="/bakeryPage">
      <BakeryPage handleCakeInCart={handleCakeInCart}/>
      </Route>
      <Route exact path="/car">
      <Car shopping={shopping}/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;


