import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <>
      <div style={{ minHeight: 'calc(100vh - 56px)' }}>
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
