import React, { useState } from 'react';

const FindFriend = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState(['a']);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // TODO: backend logic to add friend
  const handleAddFriend = () => {};

  return (
    <article style={style.content}>
      <h1 style={style.h1}>search for a foodie friend</h1>
      <div style={style.searchbar}>
        <input
          onChange={handleSearchChange}
          value={search}
          style={style.search}
          type='text'
        />
        <button style={style.find}>find foodie</button>
      </div>
      {results.length !== 0 &&
        results.map((foodie, index) => (
          <div style={style.result} key={index}>
            <h3>foodie name</h3>
            <button style={style.add}>add foodie as a chefriend</button>
          </div>
        ))}
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
  searchbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  search: {
    width: '75%',
    fontSize: '24px',
    borderRadius: '5px',
    border: 'solid hsla(31, 100%, 56%, 1)',
  },
  find: {
    width: '23%',
    color: 'white',
    backgroundColor: 'hsla(31, 100%, 56%, 1)',
    borderRadius: '5px',
    border: 'solid hsla(31, 100%, 56%, 1)',
    fontFamily: '"Indie Flower", cursive',
    fontSize: '18px',
  },
  result: {
    padding: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '5px',
    border: 'solid hsla(31, 2%, 74%, 1)',
    backgroundColor: 'hsla(31, 2%, 92%, 1)',
  },
  add: {
    padding: '16px',
    color: 'white',
    backgroundColor: 'hsla(31, 100%, 56%, 1)',
    border: 'solid hsla(31, 100%, 56%, 1)',
    borderRadius: '5px',
    fontFamily: '"Indie Flower", cursive',
    fontSize: '18px',
  },
};

export default FindFriend;
