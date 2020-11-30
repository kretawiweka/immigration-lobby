import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      {children}
      <br></br>
      <Footer />
    </div>
  );
};

export default Layout;
