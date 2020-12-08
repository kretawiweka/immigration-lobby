import styled from 'styled-components';

const Content = styled.div`
  margin: 42px;
`;

const CardContent = styled.div`
  margin: 14px;
  display: flex;
  flex-direction: row;
`;

const CardTitle = styled.h4`
  font-size: 14px;
  text-align: center;
  color: #595959;
  font-weight: bolder;
`;

const SubFeatureContent = styled.div`
  diplay: flex;
  flex-direction: column;
  margin: 14px 28px 55px 28px;
`;

const BreadCrumbContainer = styled.div`
  margin: 14px;
  span {
    color: #749aa9 !important;
    cursor: pointer;
  }
`;

export {
  Content,
  CardContent,
  CardTitle,
  SubFeatureContent,
  BreadCrumbContainer,
};
