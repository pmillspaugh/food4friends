import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [apple, setApple] = useState('apple');

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h1>F4F KHAP</h1>
      <p>Changing to check if state persists with HOTTT reload </p>
      <button onClick={() => setApple('banana')}>{apple}</button>
    </div>
  );
};

export default hot(App);
