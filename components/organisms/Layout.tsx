import React from 'react';

import Footer from './Footer';
import Header from './Header';

type Props = {};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
