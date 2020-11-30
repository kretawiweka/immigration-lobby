import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'antd';

import {
  HeaderContainer,
  HeaderContent,
  HeaderAction,
  SingleHeaderContainer,
  SingleHeaderTitle,
  SingleHeaderLine,
} from './style';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h3 style={{ color: '#fafafa', cursor: 'pointer' }}>
          <strong>Duta Layanan Keimigrasian</strong>
        </h3>
        <HeaderAction>
          <h5 style={{ color: '#fafafa' }}>Logged in as admin</h5>
          <Button>Logout</Button>
        </HeaderAction>
      </HeaderContent>
    </HeaderContainer>
  );
};

const SingleHeader = (props) => {
  return (
    <SingleHeaderContainer>
      <SingleHeaderTitle color={props.color}>{props.title}</SingleHeaderTitle>
      <SingleHeaderLine />
    </SingleHeaderContainer>
  );
};

SingleHeader.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
};

export { SingleHeader };
export default Header;
