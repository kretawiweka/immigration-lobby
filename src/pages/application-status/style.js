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

export { Content, CardContent, CardTitle };
