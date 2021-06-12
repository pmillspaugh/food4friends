import React from 'react';
import { Link } from 'react-router-dom';

const Feed = () => {
  return (
    <main>
      <h1>Feed page</h1>
      <p>Feed stuff will go here</p>
      <Link to='/create-post'>
        <button>Create post</button>
      </Link>
    </main>
  );
};

export default Feed;
