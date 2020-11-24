import styled from 'styled-components';

const Content = styled.div`
  margin: 42px;
`;

const CardContent = styled.div`
  margin: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardTitle = styled.h4`
  font-size: 18px;
  text-align: center;
`;

export { Content, CardContent, CardTitle };
