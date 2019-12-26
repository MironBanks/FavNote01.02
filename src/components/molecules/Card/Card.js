import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Heading from '../../atoms/Heading/Heading';

const StyleWrapper = styled.div`
  padding: 17px 30px;
`;

const Card = () => (
  <StyleWrapper>
    <Heading>Hello Miron</Heading>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu ante ut justo convallis
      aliquet ut id eros. Nunc a fringilla magna, varius posuere dolor. Nullam eu congue erat.
    </Paragraph>
  </StyleWrapper>
);

export default Card;
