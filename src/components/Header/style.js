import styled, { css } from 'styled-components';

const HeaderContainer = styled.div`
  border-bottom: 2px solid #8fc1e3;
`;

const HeaderContent = styled.div`
  padding: 17.5px;
  background-color: #ffffff;
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
  max-width: 320px;
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
  background-color: #749aa9;
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
