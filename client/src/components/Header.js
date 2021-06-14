import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Header = ({ loggedIn }) => {
  // TODO: sign out from Google OAuth API
  const handleLogoutClick = () => {};

  return (
    <header style={style.header}>
      <nav style={style.nav}>
        <h1 style={style.h1}>
          <Link style={style.a} to='/'>
            foodie friends
          </Link>
        </h1>
        {loggedIn && (
          <Button
            onClick={handleLogoutClick}
            style={style.logoutButton}
            variant='contained'
          >
            Log out
          </Button>
        )}
      </nav>
    </header>
  );
};

const style = {
  header: {
    minHeight: '10vh',
    backgroundColor: 'hsla(31, 2%, 88%, 1)',
    borderBottom: 'solid hsla(31, 100%, 56%, 1)',
  },
  nav: {
    minHeight: '10vh',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 24px',
  },
  h1: {
    fontFamily: '"Indie Flower", cursive',
  },
  a: {
    color: 'black',
    opacity: '0.75',
    textDecoration: 'none',
  },
  logoutButton: {
    color: 'black',
    opacity: '0.75',
  },
};

export default Header;
