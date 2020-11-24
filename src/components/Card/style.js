import styled, { css } from 'styled-components';

const CardContainer = styled.div`
  ${(props) =>
    props.backgroundColor
      ? css`
          background-color: ${props.backgroundColor};
        `
      : css`
          background-color: #fafafa;
        `};
  ${(props) =>
    props.width
      ? css`
          width: ${props.width};
        `
      : css`
          width: 100%;
        `};
  padding: 14px;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  
  &:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
}
`;

export { CardContainer };
