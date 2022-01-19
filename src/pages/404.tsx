import React from 'react';
import { styled } from '../styled';
import { CTALink } from '../components/CustomLink';
import { Header, Subheader } from '../utils/type';
import TemplateWrapper from '../components/TemplateWrapper';

const PageNotFoundContent = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.WHITE};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4em 0 3em;
`;

const PageNotFoundHeader = styled(Header)`
  font-weight: ${({ theme }) => theme.weights.SEMI_BOLD};
  padding: 0.5em;
  text-align: center;
`;

const PageNotFoundSecondaryHeader = styled(Subheader)`
  font-weight: ${({ theme }) => theme.weights.MEDIUM};
  padding: 0.5em;
`;

const PageNotFoundCTAS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 1em;
`;

const PageNotFoundGoHome = styled(CTALink)``;

const PageNotFoundGoBack = styled.a`
  align-content: center;
  color: ${({ theme }) => theme.colors.BASE};
  cursor: pointer;
  display: flex;
  font-size: 1em;
  margin: 1em auto 0;
  text-decoration: underline;
  transition: ${({ theme }) => theme.easing.GLOBAL};
  &:hover {
    text-decoration: none;
  }
`;

function goBack() {
  if (window.history) {
    if (window.history.back) {
      window.history.back();
    } else if (window.history.go) {
      window.history.go(-1);
    }
  }
}

const NotFoundPage: React.FC = () => (
  <TemplateWrapper>
    <PageNotFoundContent>
      <PageNotFoundHeader>
      404 what just happened
      </PageNotFoundHeader>
      <PageNotFoundSecondaryHeader>
      It's probably my bad. Sorry about that.
      </PageNotFoundSecondaryHeader>
      <PageNotFoundCTAS>
        <PageNotFoundGoHome linkURL="/" linkType="internal">
          Home
        </PageNotFoundGoHome>
        <PageNotFoundGoBack onClick={goBack}>
        Or, back from whence you came
        </PageNotFoundGoBack>
      </PageNotFoundCTAS>
    </PageNotFoundContent>
  </TemplateWrapper>
);

export default NotFoundPage;
