
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router ,Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Services from './Components/Services/Services';
import Teachers from './Components/Teachers/Teachers';
import NoFound from './Components/NoFound/NoFound';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
<Router>

<Header></Header>
  <Switch>
    <Route exact path="/">
<Home></Home>
    </Route>
    <Route path="/home">
<Home></Home>
    </Route>
    <Route path="/services">
<Services></Services>
    </Route>
    <Route path="/about">
 <About></About>
    </Route>
    <Route path="/teacher">
 <Teachers></Teachers>
    </Route>
    <Route path="*">
<NoFound></NoFound>
    </Route>
  </Switch>
  <Footer></Footer>

  
  
   
</Router>
    </div>
  );
}

export default App;
