import React from 'react';
import { CardContainer } from './style';

const Card = (props) => {
  return (
    <CardContainer backgroundColor={props.backgroundColor} width={props.width}>
      {props.children}
    </CardContainer>
  );
};

export default Card;
