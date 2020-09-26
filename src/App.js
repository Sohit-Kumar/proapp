import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Resume from './Resume';
import Services from './Services';
import Career from './Career';
import Login from './Login';
import Signup from './Signup';


function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/career' component={Career} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
      </Switch>
    </>
  );
}

export default App;
