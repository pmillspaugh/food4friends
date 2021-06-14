import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
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
      {/* TODO: extract Header component */}
      <header>
        <h1>
          <Link to='/'>F 4 F</Link>
        </h1>
        {user.loggedIn && (
          <Button color='primary' variant='contained'>
            Log out from Google
          </Button>
        )}
      </header>
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
