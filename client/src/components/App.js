import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import Login from './Login';
import Feed from './Feed';
import CreatePost from './CreatePost';

const App = () => {
  // TODO: add necessary user fields
  // TODO: refactor to context API
  const [user, setUser] = useState({
    loggedIn: false,
    name: null,
    posts: null,
  });

  return (
    <Router>
      <CssBaseline />
      <Header loggedIn={user.loggedIn} />
      <Switch>
        <Route path='/create-post'>
          <CreatePost />
        </Route>
        <Route path='/'>
          {user.loggedIn ? <Feed /> : <Login setUser={setUser} />}
        </Route>
      </Switch>
    </Router>
  );
};

export default hot(App);
