import React from 'react';

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
              console.log({ googleUser });
              const authToken = googleUser.getAuthResponse().id_token;
              // TODO: send googleUser to server, then send back user object from database
              // fetch('/api/login', {
              //   method: 'POST',
              //   headers: {
              //     'Content-Type': 'application/json',
              //   },
              //   body: JSON.stringify(googleUser),
              // });
              // TODO: once user object is received from database, pass user object as argument to setUser
              // TODO: set some user id in local storage or ssid cookie
              setUser({ loggedIn: true });
            })
            .catch(({ error }) => console.log({ error }));
        });
    });
  };

  return (
    <main>
      <h1>Login page</h1>
      <button onClick={handleSignInClick}>Sign in with Google</button>
    </main>
  );
};

export default Login;
