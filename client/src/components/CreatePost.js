import React, { useState } from 'react';

const CreatePost = () => {
  const [post, setPost] = useState('');

  // TODO: handle posting logic here
  const handlePostClick = () => {};

  const handleTextAreaChange = (e) => {
    setPost(e.target.value);
  };

  return (
    <article style={style.content}>
      <h1 style={style.h1}>what did you make?</h1>
      <textarea
        value={post}
        onChange={handleTextAreaChange}
        style={style.textarea}
        type='text'
      />
      <button onClick={handlePostClick} style={style.share}>
        Share with my foodie friends
      </button>
    </article>
  );
};

const style = {
  content: {
    padding: '36px',
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  h1: {
    marginBottom: '12px',
    marginTop: '0',
    textAlign: 'center',
    opacity: '0.75',
  },
  textarea: {
    width: '100%',
    minHeight: '45vh',
    border: 'solid hsla(31, 100%, 56%, 1)',
    borderRadius: '10px',
    backgroundColor: 'hsla(31, 2%, 92%, 1)',
  },
  share: {
    marginTop: '24px',
    color: 'white',
    backgroundColor: 'hsla(31, 100%, 56%, 1)',
    border: 'solid hsla(31, 100%, 56%, 1)',
    borderRadius: '10px',
    padding: '16px',
    fontFamily: '"Indie Flower", cursive',
    fontSize: '18px',
  },
};

export default CreatePost;
