import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Header = ({ loggedIn }) => {
  return (
    <header>
      <h1>
        <Link to='/'>F 4 F</Link>
      </h1>
      {loggedIn && (
        <Button color='primary' variant='contained'>
          Log out from Google
        </Button>
      )}
    </header>
  );
};

export default Header;
