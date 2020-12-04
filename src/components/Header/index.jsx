import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import { removeAuth } from '../../utils/auth';

import {
  HeaderContainer,
  HeaderContent,
  HeaderAction,
  SingleHeaderContainer,
  SingleHeaderTitle,
  SingleHeaderLine,
} from './style';

const Header = () => {
  const onLogout = () => {
    removeAuth();
    window.location.href = '/login';
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <h3 style={{ cursor: 'pointer' }}>
            <strong>Duta Layanan Keimigrasian</strong>
          </h3>
        </Link>
        <HeaderAction>
          <h5>Logged in as admin</h5>
          <Button onClick={onLogout}>Logout</Button>
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
