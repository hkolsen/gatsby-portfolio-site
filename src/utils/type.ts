import { styled } from '~/styled';

export const Header = styled.h1`
  font-weight: ${({ theme }) => theme.weights.LIGHT};
  font-size: 2.25em;
  line-height: 1.5;
  margin: 0;
  padding: 0;
`;

export const Subheader = styled.h2`
  font-weight: ${({ theme }) => theme.weights.REGULAR};
  font-size: 1.5em;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  ${({ theme }) => theme.media.small`
    font-size: 1.25em;
  `};
`;

export const Title = styled.h3`
  font-weight: ${({ theme }) => theme.weights.SEMI_BOLD};
  font-size: 1em;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
`;

export const Body = styled.p`
  font-weight: ${({ theme }) => theme.weights.REGULAR};
  font-size: 1em;
  line-height: 1.5;
`;
