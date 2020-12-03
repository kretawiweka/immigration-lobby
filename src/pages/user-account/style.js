import styled from 'styled-components';

const Content = styled.div`
  margin: 42px;
  display: flex;
  justify-content: center;
`;

const CardContent = styled.div`
  margin: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 720px;
`;

const CardTitle = styled.h4`
  font-size: 18px;
  text-align: center;
  color: #fafafa;
`;

const ContentUserAccount = styled.div`
  diplay: flex;
  flex-direction: column;
  margin: 14px 28px 105px 28px;
  padding-bottom: 28px;
`;

const BreadCrumbContainer = styled.div`
  margin: 14px 0px;
  span {
    color: #749aa9 !important;
    cursor: pointer;
  }
`;

export {
  Content,
  CardContent,
  CardTitle,
  ContentUserAccount,
  BreadCrumbContainer,
};
