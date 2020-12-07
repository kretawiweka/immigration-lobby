import styled, { css } from 'styled-components';

const Content = styled.div`
  margin: 42px;
`;

const CardContent = styled.div`
  margin: 14px 14px 28px 14px;
  display: flex;
  ${(props) =>
    props.flexDirection === 'column'
      ? css`
          flex-direction: column;
        `
      : css`
          flex-direction: row;
        `}
  justify-content: space-between;
`;

const CardTitle = styled.h4`
  font-size: 18px;
  text-align: center;
  color: #fafafa;
`;

const BreadCrumbContainer = styled.div`
  margin: 14px;
  span {
    color: #749aa9 !important;
    cursor: pointer;
  }
`;

const ContentPassport = styled.div`
  diplay: flex;
  flex-direction: column;
  margin: 14px 28px 105px 28px;
  padding-bottom: 28px;
`;

const DetailProductCardContent = styled.div`
  margin: 14px 14px 28px 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export {
  Content,
  CardContent,
  CardTitle,
  BreadCrumbContainer,
  ContentPassport,
  DetailProductCardContent,
};
