import styled from 'styled-components';

const Content = styled.div`
  margin: 28px;
`;

const SelectOptionArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  max-width: 420px;
  margin: 14px auto;
  h4 {
    margin: 0;
  }
`;

const TableArea = styled.div`
  margin: 56px 14px;
`;

const AddBtnArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 14px 0px;
`;
export { SelectOptionArea, Content, TableArea, AddBtnArea };
