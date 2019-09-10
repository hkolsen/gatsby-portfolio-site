import React from 'react';
import IconBase from 'react-icon-base';

export interface EmailIconProps {
  socialName: string;
  color: string;
}

export const EmailIcon: React.FC<EmailIconProps> = ({
  color,
  socialName,
}) => (
  <IconBase
    viewBox="688 188 24 24"
    height="100%"
    width="100%"
    color={color}
    shapeRendering="geometricPrecision"
  >
    <title>{socialName}</title>
    <path d="M689.076,192.766l4.291,4.642l-3.026,5.968l6.391-1.146l2.91,7.02L712,193.042L689.076,192.766z M693.712,200.372
	l1.986-3.507l11.685-2.737L693.712,200.372z"/>></IconBase>
);