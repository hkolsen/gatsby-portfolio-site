import React from 'react';
import showdown from 'showdown';
import { styled } from '../styled';

const converter = new showdown.Converter();

interface MarkdownWrapperProps {
  content: string;
}

const Content = styled.div`
  font-size: 1.15em;
  font-weight: ${({ theme }) => theme.weights.LIGHT};
  line-height: 1.5;
  h1 {
    font-weight: ${({ theme }) => theme.weights.LIGHT};
    font-size: 2em;
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }
  h2 {
    font-weight: ${({ theme }) => theme.weights.REGULAR};
    font-size: 1.5em;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    ${({ theme }) => theme.media.small`
      font-size: 1.25em;
    `};
  }
  h3 {
    font-weight: ${({ theme }) => theme.weights.REGULAR};
  }
  blockquote {
    font-size: 1.5em;
    float: left;
    margin: 0 0 0 -3em;
    max-width: 20em;
    padding: 0.5em 1em;
    width: 100%;
  }
  a {
    color: ${({ theme }) => theme.colors.BASE};
    text-decoration: underline;
    transition: ${({ theme }) => theme.easing.GLOBAL};
    &:hover {
      text-decoration: none;
    }
  }
  ${({ theme }) => theme.media.medium`
     blockquote {
      float: none;
      margin: 0 auto;
      padding: 0;
    }
  `};
`;

export const MarkdownWrapper: React.FC<MarkdownWrapperProps> = ({
  content,
  ...rest
}) => {
  const convertedHTML = converter.makeHtml(content);
  return (
    <Content dangerouslySetInnerHTML={{ __html: convertedHTML }} {...rest} />
  );
};
