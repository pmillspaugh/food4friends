import React from 'react';

const ShowPosts = () => {
  return (
    <section style={style.content}>
      <h1 style={style.h1}>
        your foodie friends have been cookin up a storm...
      </h1>
      <div style={style.postContainer}>
        <article style={style.post}>
          <h3>Abhi&apos;s bacon breakfast</h3>
          <p>I made the most amazing meal oh my gosh</p>
        </article>
        <article style={style.post}>
          <h3>Kyu&apos;s salmon supper</h3>
          <p>I made the most amazing meal oh my gosh</p>
        </article>
        <article style={style.post}>
          <h3>Hamilton&apos;s legume lunch</h3>
          <p>I made the most amazing meal oh my gosh</p>
        </article>
        <article style={style.post}>
          <h3>Peter&apos;s donut dessert</h3>
          <p>I made the most amazing meal oh my gosh</p>
        </article>
      </div>
    </section>
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
  postContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: '12px',
  },
  post: {
    backgroundColor: 'hsla(31, 2%, 92%, 1)',
    padding: '12px',
    borderRadius: '10px',
    border: 'solid hsla(31, 100%, 56%, 1)',
  },
};

export default ShowPosts;
