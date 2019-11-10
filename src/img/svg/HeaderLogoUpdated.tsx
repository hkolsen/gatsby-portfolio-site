import React from 'react';
import IconBase from 'react-icon-base';
import { useTheme } from '~/styled';

export const HeaderLogoUpdated: React.FC = () => {
  const { colors } = useTheme();
  return (
  <IconBase
    viewBox="0 0 200 200"
    height="100%"
    width="100%"
    shapeRendering="geometricPrecision"
  >
    <title>Heidi Olsen</title>
    <circle cx="97.4" cy="102.6" r="94.4" fill={colors.DARK_GRAY} stroke={colors.DARK_GRAY} strokeMiterlimit="10"/>
    <circle cx="102.8" cy="99" r="94.4" fill={colors.ACCENT} stroke={colors.DARK_GRAY} strokeMiterlimit="10"/>
    <path fill={colors.DARK_GRAY} d="M47.7 22.5v154.8L65.1 188 58 15.9zM151.2 17.9l2 160.7-17.6 9.4L140 12z"/>
    <path fill={colors.DARK_GRAY} d="M58 103.2h81.2v11.9H55.6z"/>
</IconBase>
)};