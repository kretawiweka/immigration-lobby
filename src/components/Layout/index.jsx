import React from 'react';
import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
