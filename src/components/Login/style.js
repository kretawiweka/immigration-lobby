import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 35px;
`;

const CardContainer = styled.div`
  width: 320px;
`;

const LoginImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const LoginLayer = styled.div`
  background-color: rgba(57, 62, 70, 0.8);
  height: 100vh;
  width: 100%;
  position: absolute;
`;

const LoginContainer = styled.div`
  position: absolute;
  z-index: 9;
  width: 100%;
`;

export { Content, CardContainer, LoginImage, LoginLayer, LoginContainer };
