import styled from 'styled-components';

const Content = styled.div`
  margin: 42px;
`;

const CardContent = styled.div`
  margin: 14px 14px 28px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  a {
    width: 100%;
  }
`;

const BreadCrumbContainer = styled.div`
  margin: 14px 30px;
  span {
    color: #749aa9 !important;
    cursor: pointer;
  }
`;

export { Content, CardContent, BreadCrumbContainer };
