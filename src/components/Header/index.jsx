import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Button } from 'antd';
import { removeAuth } from '../../utils/auth';
import ImmigrationLogo from '../../assets/images/immigration_logo.png';

import {
  HeaderContainer,
  HeaderContent,
  HeaderAction,
  SingleHeaderContainer,
  SingleHeaderTitle,
  SingleHeaderLine,
} from './style';

// import newStyle from './newStyle.scss';

const Header = () => {
  const onLogout = () => {
    removeAuth();
    window.location.href = '/login';
  };
  return (
    <HeaderContainer>
      <HeaderContent>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Link to="/">
            <div
              style={{ marginLeft: 12, display: 'flex', alignItems: 'center' }}
            >
              <img
                style={{ width: '40px', height: '100%', marginRight: '14px' }}
                src={ImmigrationLogo}
                alt="immigration-logo"
              />
              <div>
                <h1
                  style={{
                    marginBottom: 0,
                    marginTop: 0,
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: '#273c75',
                  }}
                >
                  SIMIDUL
                </h1>
                <h3
                  style={{
                    marginBottom: 0,
                    marginTop: -3,
                    color: '#2f3640',
                    fontSize: 16,
                  }}
                >
                  Si Duta Layanan Keimigrasian
                </h3>
              </div>
            </div>
          </Link>
        </div>
        <HeaderAction>
          <h3
            style={{
              color: '##2f3640',
              marginBottom: 0,
              marginTop: 0,
              fontSize: 14,
              marginRight: 10,
            }}
          >
            <strong>Arfan Gumintang</strong> (Administrator Humas)
          </h3>
          <Button onClick={onLogout}>Keluar</Button>
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
