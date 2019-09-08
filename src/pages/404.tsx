import React from 'react';
import { styled } from '../styled';
import { CTALink } from '../components/CustomLink';
import { Header, Subheader } from '../utils/type';
import TemplateWrapper from '../components/TemplateWrapper';
import { FormattedMessage } from 'react-intl';

const PageNotFoundContent = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.LOYAL_BLUE};
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
  border-bottom: 2px solid ${({ theme }) => theme.colors.WHITE};
  color: ${({ theme }) => theme.colors.WHITE};
  cursor: pointer;
  display: flex;
  font-size: 1em;
  margin: 1em auto 0;
  text-decoration: none;
  transition: ${({ theme }) => theme.easing.GLOBAL};
  &:hover {
    background: ${({ theme }) => theme.colors.WHITE};
    color: ${({ theme }) => theme.colors.LOYAL_BLUE};
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
        <FormattedMessage
          defaultMessage="404 what just happened"
          description="Header that explains the page is not found"
          id="PageNotFound.Header"
        />
      </PageNotFoundHeader>
      <PageNotFoundSecondaryHeader>
        <FormattedMessage
          defaultMessage="It's probably my bad. Sorry about that."
          description="Secondary Header to let the user know its not their fault."
          id="PageNotFound.SecondaryHeader"
        />
      </PageNotFoundSecondaryHeader>
      <PageNotFoundCTAS>
        <PageNotFoundGoHome linkURL="/" linkType="internal">
          <FormattedMessage
            defaultMessage="Home"
            description="Invite the user to navigate to the homepage"
            id="PageNotFound.GoHome"
          />
        </PageNotFoundGoHome>
        <PageNotFoundGoBack onClick={goBack}>
          <FormattedMessage
            defaultMessage="Or, back from whence you came"
            description="Invite the user to return to the previous page"
            id="PageNotFound.GoBack"
          />
        </PageNotFoundGoBack>
      </PageNotFoundCTAS>
    </PageNotFoundContent>
  </TemplateWrapper>
);

export default NotFoundPage;
