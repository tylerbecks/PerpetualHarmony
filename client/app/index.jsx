import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';

import Home from './components/Home.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';

class App extends React.Component {

  render () {

    return (
      //Defines the routes for app and renders different components
      <Router history={ hashHistory }>
        <Route path="/" component={Home}></Route>
        <Route path="SignIn" component={SignIn}></Route>
        <Route path="SignUp" component={SignUp}></Route>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));