import React from 'react';
import HeaderMasyarakat from '../HeaderMasyarakat';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <>
      <div style={{ minHeight: 'calc(100vh - 56px)' }}>
        <HeaderMasyarakat />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
