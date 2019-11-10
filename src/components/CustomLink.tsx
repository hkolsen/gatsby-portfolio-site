import { Link } from 'gatsby';
import React from 'react';
import { styled } from '../styled';

export interface CustomLinkProps {
  linkType: string;
  linkURL: string;
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

export const StyledLink = styled(CustomLink)`
  color: ${({ theme }) => theme.colors.BASE};
  transition: ${({ theme }) => theme.easing.GLOBAL};
  text-decoration-color: ${({ theme }) => theme.colors.ACTIVE};
  &:hover {
    text-decoration: none;
  }
`;

export const TextLink: React.FC<CustomLinkProps> = (props: any) => (
  <StyledLink {...props} />
);

export const StyledCTALink = styled(CustomLink)`
  background: ${({ theme }) => theme.colors.ACTIVE};
  border: 2px solid ${({ theme }) => theme.colors.ACTIVE};
  color: ${({ theme }) => theme.colors.BASE};
  display: inline-block;
  font-size: 1em;
  font-weight: bold;
  padding: 0.25em 1em 0.25em 0.75em;
  text-decoration: none;
  transition: ${({ theme }) => theme.easing.GLOBAL};
  &:after {
    border-style: solid;
    border-width: 0.125em 0.125em 0 0;
    content: '';
    display: inline-block;
    height: 0.4em;
    position: relative;
    vertical-align: middle;
    width: 0.4em;
    left: 0.25em;
    transform: rotate(45deg);
  }
  :focus-within {
    background-color: ${({ theme }) => theme.colors.WHITE};
    border: 2px dashed ${({ theme }) => theme.colors.BASE};
    color: ${({ theme }) => theme.colors.BASE};
  }
  :hover {
    background-color: ${({ theme }) => theme.colors.WHITE};
    border: 2px dashed ${({ theme }) => theme.colors.BASE};
    color: ${({ theme }) => theme.colors.BASE};
  }
`;

export const CTALink: React.FC<CustomLinkProps> = (props: any) => (
  <StyledCTALink {...props} />
);
