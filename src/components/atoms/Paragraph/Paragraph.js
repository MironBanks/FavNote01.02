import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};

  @media only screen and (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export default Paragraph;
