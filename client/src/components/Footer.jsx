import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#007bff',
    padding: '2px',
    color: 'white',
    fontSize: '1.2rem',
    textAlign: 'center',
  };

  return (
    <div style={{ backgroundColor: '#007bff' }}>
      <footer style={footerStyle}>
        hbapte &copy;2023
      </footer>
    </div>
  );
};

export default Footer;
