import styled, { css } from 'styled-components';

const HeaderContainer = styled.div`
  -webkit-box-shadow: 0px 2px 11px -2px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 2px 11px -2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 11px -2px rgba(0, 0, 0, 0.3);
`;

const HeaderContent = styled.div`
  padding: 17.5px;
  background-color: #fff;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderAction = styled.div`
  display: flex;
  align-items: center;
  h5 {
    margin-bottom: 0px;
    margin-right: 10.5px;
  }
`;

const SingleHeaderContainer = styled.div`
  padding: 14px;
  max-width: 480px;
  width: 100%;
`;

const SingleHeaderTitle = styled.h1`
  font-weight: bold;
  margin: 7px;
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
  color = br {
    margin: 7px;
  }
`;

const SingleHeaderLine = styled.div`
  background-color: #273c75;
  height: 7px;
`;

export {
  HeaderContainer,
  HeaderContent,
  HeaderAction,
  SingleHeaderContainer,
  SingleHeaderTitle,
  SingleHeaderLine,
};
