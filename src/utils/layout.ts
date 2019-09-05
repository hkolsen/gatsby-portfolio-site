import { ThreeBounce } from 'better-react-spinkit';
import { styled } from '~/styled';
import { Body, Header, Subheader } from './type';

export const SectionHeroContainer = styled.section`
  margin: 0 auto;
  max-width: 1000px;
  padding: 2em 1em 3em;
`;

export const SectionContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 4em 1em 3em;
  margin: 0 auto;
  min-height: 30vh;
  max-width: 1000px;
`;

export const LoadingAnimation = styled(ThreeBounce)`
  margin: 0 auto;
`;

export const SectionViewIcon = styled.div`
  margin: 0 auto;
  svg {
    max-height: 10em;
  }
`;

export const SectionViewHeader = styled(Header)`
  font-weight: ${({ theme }) => theme.weights.MEDIUM};
  margin: 0 auto;
  padding: 1em;
  text-align: center;
`;

export const SectionViewSubHeader = styled(Subheader)`
  font-weight: ${({ theme }) => theme.weights.REGULAR};
  line-height: 1.3;
  margin: 0 auto 0.5em;
  padding: 0 1em;
  text-align: center;
`;

export const SectionViewDisclaimer = styled(Body)`
  color: ${({ theme }) => theme.colors.REVERSE_TEXT};
  font-weight: ${({ theme }) => theme.weights.REGULAR};
  margin: 0 auto 0.5em;
  padding: 1em 2em;
  text-align: center;
`;

export const PasswordResetForm = styled.form`
  font-weight: ${({ theme }) => theme.weights.REGULAR};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
