import React from 'react';
import { Button } from 'antd';

import { HeaderContainer, HeaderContent, HeaderAction } from './style';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h3>
          <strong>Sistem Informasi Duta Layanan Keimigrasian</strong>
        </h3>
        <HeaderAction>
          <h5>Logged in as admin</h5>
          <Button>Logout</Button>
        </HeaderAction>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
