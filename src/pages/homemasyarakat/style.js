import styled from 'styled-components';

const Content = styled.div`
  margin: 42px;
`;

const CardContent = styled.div`
  margin: 14px;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-around;
`;

const CardTitle = styled.h4`
  font-size: 16px;
  text-align: center;
  color: #595959;
  font-weight: bolder;
`;

export { Content, CardContent, CardTitle };
