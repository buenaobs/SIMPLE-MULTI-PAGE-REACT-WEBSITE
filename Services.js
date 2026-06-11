import React from 'react';

const Services = () => {
  return (
    <article style={pageStyles.card}>
      <h1 style={pageStyles.title}>🛠️ Services Page</h1>
      <p style={pageStyles.text}>Welcome to the Services page! Discover what we offer.</p>
    </article>
  );
};

const pageStyles = {
  card: {
    backgroundColor: '#fff',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  title: {
    color: '#333',
    marginBottom: '10px',
  },
  text: {
    color: '#666',
    lineHeight: '1.6',
  },
};

export default Services;