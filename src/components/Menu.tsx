import React from 'react';
import { styled } from '~/styled';
import { CustomLink } from './CustomLink';
import { FormattedMessage } from 'react-intl';

const MenuContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  width: 100%;
`;

const MenuToggle = styled.div`
  display: block;
  position: relative;
  top: 1.5em;
  right: 1.5em;
  z-index: 1; 
  -webkit-user-select: none;
  user-select: none;
`;

const MenuCheckboxLabel = styled.label``;

const MenuCheckbox = styled.input`
  display: block;
  width: 60px;
  height: 65px;
  position: absolute;
  top: -7px;
  right: -2px;
  cursor: pointer;
  opacity: 0; 
  z-index: 2; 
  -webkit-touch-callout: none;
  &:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: ${({ theme }) => theme.colors.BASE};
  }
  &:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  &:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }
  &:checked ~ ul {
    transform: none;
  }
`; 

const MenuTrigger = styled.span`
    background: ${({ theme }) => theme.colors.ACTIVE};
    border-radius: 3px;
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
    &:first-child {
      transform-origin: 0% 0%;
    }
    &:nth-last-child(2) {
      transform-origin: 0% 100%;
    }
`;

const MenuList = styled.ul`
  background: ${({ theme }) => theme.colors.ACTIVE};
  border-radius: 0 0 0 5em;
  list-style: none;
  position: absolute;
  width: 20em;
  margin: -10.5em 0 0 -30em;
  padding: 7.75em 10em 2em 5em;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(100%, 0);
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${({ theme }) => theme.media.small`
    flex-direction: column;
    margin: -10.5em 0 0 -100vw;
    padding: 7.75em 0 1em 7em;
    width: 35em;
  `};
`;

const MenuItem = styled.li`
  padding: 10px 0;
  font-size: 22px;
`;

const MenuLink = styled(CustomLink)`
  color: ${({ theme }) => theme.colors.BASE};
  font-family: ${({ theme }) => theme.fonts.SANS_SERIF};
  font-weight: ${({ theme }) => theme.weights.SEMI_BOLD};
  font-size: 1em;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Menu: React.FC = () => 
  <MenuContainer role="navigation">
    <MenuToggle>
      <MenuCheckbox id="menu" name="menu" type="checkbox" />
      <MenuCheckboxLabel htmlFor="menu" />
        <MenuTrigger />
        <MenuTrigger />
        <MenuTrigger />
        <MenuList>
          <MenuItem>
            <MenuLink linkType="internal" linkURL="/#about">
            <FormattedMessage
              defaultMessage="About"
              description="Navigation link that brings you to the About section"
              id="Menu.About"
              />
            </MenuLink>
          </MenuItem>
          <MenuItem>
          <MenuLink linkType="internal" linkURL="/#speaking">
            <FormattedMessage
              defaultMessage="Speaking"
              description="Navigation link that brings you the Speaking section"
              id="Menu.Speaking"
              />
          </MenuLink>
          </MenuItem>
          <MenuItem>
          <MenuLink linkType="internal" linkURL="/#writing">
            <FormattedMessage
              defaultMessage="Writing"
              description="Navigation link that brings you the Writing section"
              id="Menu.Writing"
              />
          </MenuLink>
          </MenuItem>
        </MenuList>
    </MenuToggle>
  </MenuContainer>  