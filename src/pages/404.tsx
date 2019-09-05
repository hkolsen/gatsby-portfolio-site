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

const PageNotFoundDiagram = styled.div`
  padding: 1em;
  font-size: 1.3em;
  display: flex;
  flex-direction: row;
  position: relative;
  color: ${({ theme }) => theme.colors.LOYAL_BLUE};
`;

const DiagramSide = styled.div`
  background-color: ${({ theme }) => theme.colors.WHITE_HOVER};
  height: 8em;
  width: 8em;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 2em;
`;

const DiagramLeft = styled(DiagramSide)`
  justify-content: flex-start;
  margin-right: -2em;
`;

const DiagramCenter = styled.div`
  position: absolute;
  top: 6.5em;
  left: 9.5em;
`;

const DiagramRight = styled(DiagramSide)`
  justify-content: flex-end;
  margin-left: -2em;
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
      <PageNotFoundDiagram>
        <DiagramLeft>
          <FormattedMessage
            defaultMessage="It's us."
            description="Text in the left circle of a Venn Diagram"
            id="PageNotFound.DiagramLeft"
          />
        </DiagramLeft>
        <DiagramCenter>
          <FormattedMessage
            defaultMessage="It's us."
            description="Text in the intersection of a Venn Diagram"
            id="PageNotFound.DiagramIntersection"
          />
        </DiagramCenter>
        <DiagramRight>
          <FormattedMessage
            defaultMessage="It's you."
            description="Text in the right circle of a Venn Diagram"
            id="PageNotFound.DiagramRight"
          />
        </DiagramRight>
      </PageNotFoundDiagram>
      <PageNotFoundSecondaryHeader>
        <FormattedMessage
          defaultMessage="It's probably us. Sorry about that."
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
