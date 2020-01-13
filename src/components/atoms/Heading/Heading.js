import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.xl : theme.fontSize.l)};
  font-weight: ${({ theme }) => theme.bold};

  @media only screen and (max-width: 500px) {
    font-size: ${({ theme, big }) => (big ? theme.fontSize.l : theme.fontSize.m)};
  }
`;

export default Heading;
