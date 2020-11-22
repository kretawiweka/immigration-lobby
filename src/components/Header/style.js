import styled from 'styled-components';

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

export { HeaderContainer, HeaderContent, HeaderAction };
