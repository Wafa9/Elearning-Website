import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import SignUp from './pages/SignUp/SignUp';
import { Navbar ,Footer} from './components';

function App() {
  return (
     <Router>
      <GlobalStyle/>
      <Navbar />
     
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/about' component={About} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
       <Footer />
      </Router>
      
  );
}

export default App;
