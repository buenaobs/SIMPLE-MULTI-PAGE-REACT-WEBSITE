import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header style={navStyles.header}>
      <div style={navStyles.brand}>Ingoude Company</div>
      <nav style={navStyles.nav}>
        <NavLink to="/" end style={({ isActive }) => linkStyle(isActive)}>Home</NavLink>
        <NavLink to="/about" style={({ isActive }) => linkStyle(isActive)}>About</NavLink>
        <NavLink to="/contact" style={({ isActive }) => linkStyle(isActive)}>Contact</NavLink>
        <NavLink to="/services" style={({ isActive }) => linkStyle(isActive)}>Services</NavLink>
      </nav>
    </header>
  );
};

const linkStyle = (isActive) => ({
  color: isActive ? '#ffcc00' : '#ffffff',
  textDecoration: 'none',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '8px 16px',
  borderRadius: '4px',
  backgroundColor: isActive ? '#444' : 'transparent',
  transition: 'all 0.3s ease',
});

const navStyles = {
  header: {
    backgroundColor: '#222',
    color: '#fff',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  },
  brand: {
    fontSize: '20px',
    fontWeight: 'bold',
    letterSpacing: '1px',
  },
  nav: {
    display: 'flex',
    gap: '10px',
  },
};

export default Navbar;