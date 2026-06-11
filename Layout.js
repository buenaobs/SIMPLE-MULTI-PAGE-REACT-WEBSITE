import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div style={layoutStyles.container}>
      <Navbar />
      <main style={layoutStyles.main}>
        <Outlet />
      </main>
    </div>
  );
};

const layoutStyles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    backgroundColor: '#f4f4f4',
  },
  main: {
    padding: '30px',
    maxWidth: '800px',
    margin: '0 auto',
  },
};

export default Layout;