import React from 'react';
import Button from '@material-ui/core/Button';

const Login = ({ setUser }) => {
  const handleSignInClick = () => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2
        .init({
          client_id:
            '145574284947-h6h200ppacfsrhhn9g6d9qf3gq2d2lma.apps.googleusercontent.com',
        })
        .then((googleAuth) => {
          googleAuth
            .signIn()
            .then((googleUser) => {
              const name = googleUser.At.Ve;
              const auth_token = googleUser
                .getAuthResponse()
                .id_token.substring(0, 100);
              const email = googleUser.At.ku;
              // send googleUser to server, then send back user object from database
              fetch('/api/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, auth_token, email }),
              })
                .then((res) => res.json())
                .then(({ name, auth_token, userId }) => {
                  console.log({ name, auth_token, userId });
                  setUser({ loggedIn: true, name, auth_token, userId });
                });
              // TODO: once user object is received from database, pass user object as argument to setUser
            })
            .catch(({ error }) => console.log({ error }));
        });
    });
  };

  return (
    <main style={style.main}>
      <section style={style.section}>
        <h1 style={style.h1}>See what&apos;s cookin&apos;{'  '}</h1>
        <Button
          variant='contained'
          style={style.loginButton}
          onClick={handleSignInClick}
        >
          Sign in with Google
        </Button>
      </section>
    </main>
  );
};

const style = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
    backgroundColor: 'white',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '24px',
    backgroundColor: 'hsla(31, 2%, 88%, 1)',
    border: 'solid hsla(31, 100%, 56%, 1)',
    padding: '36px 60px',
    borderRadius: '8px',
  },
  h1: {
    fontFamily: '"Indie Flower", cursive',
  },
  loginButton: {
    color: 'white',
    opacity: '0.75',
    backgroundColor: 'hsla(28, 100%, 54%, 1)',
  },
};

export default Login;
