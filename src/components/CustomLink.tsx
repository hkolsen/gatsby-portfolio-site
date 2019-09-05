import { Link } from 'gatsby';
import React from 'react';
import { styled } from '../styled';

export interface CustomLinkProps {
  linkType: string;
  linkURL: string;
  dark?: boolean;
}

interface StyledProps {
  dark?: boolean;
}

export const CustomLink: React.FC<CustomLinkProps> = ({
  linkType,
  linkURL,
  ...rest
}) => {
  if (linkType === 'internal') {
    return <Link to={linkURL} activeClassName="active" {...rest} />;
  } else {
    return (
      <a href={linkURL} target="_blank" rel="noopener noreferrer" {...rest} />
    );
  }
};

export const StyledLink = styled(CustomLink)<StyledProps>`
  color: ${({ dark, theme }) =>
    dark ? theme.colors.WHITE : theme.colors.BASE};
  text-decoration: none;
  transition: ${({ theme }) => theme.easing.GLOBAL};
  span {
    border-bottom: 2px solid ${({ theme }) => theme.colors.LOYAL_BLUE};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.LOYAL_BLUE};
  }
`;

export const TextLink: React.FC<CustomLinkProps> = (props: any) => (
  <StyledLink {...props} />
);

export const StyledCTALink = styled(CustomLink)`
  background: ${({ theme }) => theme.colors.LOYAL_BLUE};
  color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 9rem;
  font-size: 1.25em;
  padding: 0 3rem;
  cursor: pointer;
  display: inline-block;
  font-weight: ${({ theme }) => theme.weights.REGULAR};
  height: 2em;
  line-height: 2em;
  text-align: center;
  text-decoration: none;
  outline: 0;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  :focus-within {
    background-color: ${({ theme }) => theme.colors.WHITE};
    color: ${({ theme }) => theme.colors.BASE};
  }
  :hover {
    background-color: ${({ theme }) => theme.colors.WHITE};
    color: ${({ theme }) => theme.colors.BASE};
  }
`;

export const CTALink: React.FC<CustomLinkProps> = (props: any) => (
  <StyledCTALink {...props} />
);
