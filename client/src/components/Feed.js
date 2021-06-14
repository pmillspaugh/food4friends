import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CreatePost from './CreatePost';
import FindFriend from './FindFriend';
import ShowPosts from './ShowPosts';

const Feed = () => {
  const [currentTab, setCurrentTab] = useState(1);

  return (
    <main style={style.main}>
      <section style={style.tabs}>
        <Link
          to='/'
          onClick={() => setCurrentTab(0)}
          style={currentTab === 0 ? style.selected : style.tab}
        >
          i made something yummy
        </Link>
        <Link
          to='/'
          onClick={() => setCurrentTab(1)}
          style={currentTab === 1 ? style.selected : style.tab}
        >
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          what are my friends cookin'?
        </Link>
        <Link
          to='/'
          onClick={() => setCurrentTab(2)}
          style={currentTab === 2 ? style.selected : style.tab}
        >
          find more chefriends
        </Link>
      </section>
      <section style={style.content}>
        {currentTab === 0 && <CreatePost />}
        {currentTab === 1 && <ShowPosts />}
        {currentTab === 2 && <FindFriend />}
      </section>
    </main>
  );
};

const style = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '24px',
    paddingTop: '48px',
    height: '90vh',
    fontFamily: '"Indie Flower", cursive',
    fontSize: '18px',
  },
  tabs: {
    display: 'flex',
    width: '80vw',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab: {
    padding: '12px',
    width: '100%',
    textAlign: 'center',
    textDecoration: 'none',
    color: 'black',
    opacity: '0.75',
    backgroundColor: 'hsla(31, 2%, 88%, 1)',
    border: 'solid hsla(31, 100%, 56%, 1)',
  },
  selected: {
    padding: '12px',
    width: '100%',
    textAlign: 'center',
    textDecoration: 'none',
    color: 'white',
    backgroundColor: 'hsla(31, 100%, 56%, 1)',
    border: 'solid hsla(31, 100%, 56%, 1)',
  },
  content: {
    width: '80vw',
    minHeight: '70vh',
    border: 'solid hsla(31, 100%, 56%, 1)',
  },
  h1: {
    fontWeight: '300',
  },
  loginButton: {
    color: 'black',
    opacity: '0.75',
  },
};

export default Feed;
