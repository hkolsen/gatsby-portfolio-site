import React from 'react';
import IconBase from 'react-icon-base';

export interface CSSAnimationsIconProps {
  blogTitle: string;
  color: string;
}

export const CSSAnimationsIcon: React.FunctionComponent<CSSAnimationsIconProps> = ({
  color,
  blogTitle,
}) => (
  <IconBase
    viewBox="0 0 200 200"
    height="100%"
    width="100%"
    color={color}
    shapeRendering="geometricPrecision"
  >
    <title>{blogTitle}</title>
    <path d="M13.5 9.5c-2.4 0-4.1 1.6-4.1 4.1V46c0 2.4 1.6 4.1 4.1 4.1H46c2.4 0 4.1-1.6 4.1-4.1V13.5c0-2.4-1.6-4.1-4.1-4.1H13.5zm48.7 0c-2.4 0-4.1 1.6-4.1 4.1v44.6H13.5c-2.4 0-4.1 1.6-4.1 4.1s1.6 4.1 4.1 4.1h48.6c2.4 0 4.1-1.6 4.1-4.1V17.6h28.4c2.4 0 4.1-1.6 4.1-4.1s-1.7-4-4.1-4H62.2zm48.6 0c-2.4 0-4.1 1.6-4.1 4.1s1.6 4.1 4.1 4.1h20.3v64.9H78.4c-2.4 0-4.1 1.6-4.1 4.1v16.2c0 2.4 1.6 4.1 4.1 4.1 2.4 0 4.1-1.6 4.1-4.1V90.5h52.7c2.4 0 4.1-1.6 4.1-4.1v-73c0-2.4-1.6-4.1-4.1-4.1h-24.4zm40.5 0c-2.4 0-4.1 1.6-4.1 4.1V46c0 2.4 1.6 4.1 4.1 4.1h32.4c2.4 0 4.1-1.6 4.1-4.1V13.5c0-2.4-1.6-4.1-4.1-4.1h-32.4zM17.6 17.6h24.3v24.3H17.6V17.6zm137.8 0h24.3v24.3h-24.3V17.6zM25.7 25.7v8.1h8.1v-8.1h-8.1zm52.7 0c-2.4 0-4.1 1.6-4.1 4.1V46c0 2.4 1.6 4.1 4.1 4.1h16.2c2.4 0 4.1-1.6 4.1-4.1V29.7c0-2.4-1.6-4.1-4.1-4.1H78.4zm32.4 0c-2.4 0-4.1 1.6-4.1 4.1v28.4H78.4c-2.4 0-4.1 1.6-4.1 4.1v8.1c0 2.4 1.6 4.1 4.1 4.1 2.4 0 4.1-1.6 4.1-4.1v-4.1h28.4c2.4 0 4.1-1.6 4.1-4.1V33.8h4.1c2.4 0 4.1-1.6 4.1-4.1s-1.6-4.1-4.1-4.1h-8.3zm52.7 0v8.1h8.1v-8.1h-8.1zm-81.1 8.1h8.1v8.1h-8.1v-8.1zm68.9 24.3c-2.4 0-4.1 1.6-4.1 4.1v52.7c0 2.4 1.6 4.1 4.1 4.1h20.3c2.4 0 4.1-1.6 4.1-4.1 0-2.4-1.6-4.1-4.1-4.1h-16.2V66.2h24.3v8.1h-12.2c-2.4 0-4.1 1.6-4.1 4.1 0 2.4 1.6 4.1 4.1 4.1h16.2c2.4 0 4.1-1.6 4.1-4.1V62.2c0-2.4-1.6-4.1-4.1-4.1h-32.4zM13.5 74.3c-2.4 0-4.1 1.6-4.1 4.1v56.7c0 2.4 1.6 4.1 4.1 4.1h60.8v28.4c0 2.4 1.6 4.1 4.1 4.1 2.4 0 4.1-1.6 4.1-4.1v-32.4c0-2.4-1.6-4.1-4.1-4.1H17.6V78.4c0-2.5-1.6-4.1-4.1-4.1zm16.2 0c-2.4 0-4.1 1.6-4.1 4.1v8.1c0 2.4 1.6 4.1 4.1 4.1s4.1-1.6 4.1-4.1v-4.1h24.3v36.5c0 2.4 1.6 4.1 4.1 4.1h56.7c2.4 0 4.1-1.6 4.1-4.1 0-2.4-1.6-4.1-4.1-4.1H66.2V78.4c0-2.4-1.6-4.1-4.1-4.1H29.7zm137.9 20.3c-2.4 0-4.1 1.6-4.1 4.1 0 2.4 1.6 4.1 4.1 4.1h12.2V127h-28.4c-2.4 0-4.1 1.6-4.1 4.1v36.5c0 2.4 1.6 4.1 4.1 4.1 2.4 0 4.1-1.6 4.1-4.1v-32.4h28.4c2.4 0 4.1-1.6 4.1-4.1V98.6c0-2.4-1.6-4.1-4.1-4.1h-16.3zm-137.9 4c-2.4 0-4.1 1.6-4.1 4.1v16.2c0 2.4 1.6 4.1 4.1 4.1H46c2.4 0 4.1-1.6 4.1-4.1v-16.2c0-2.4-1.6-4.1-4.1-4.1H29.7zm64.9 0c-2.4 0-4.1 1.6-4.1 4.1 0 2.4 1.6 4.1 4.1 4.1h36.5v77c0 2.4 1.6 4.1 4.1 4.1h32.4c2.4 0 4.1-1.6 4.1-4.1v-32.4h8.1v32.4c0 2.4 1.6 4.1 4.1 4.1s4.1-1.6 4.1-4.1v-36.5c0-2.4-1.6-4.1-4.1-4.1h-16.2c-2.4 0-4.1 1.6-4.1 4.1v32.4h-24.3v-77c0-2.4-1.6-4.1-4.1-4.1H94.6zm-60.8 8.2h8.1v8.1h-8.1v-8.1zm60.8 24.3c-2.4 0-4.1 1.6-4.1 4.1v32.4c0 2.4 1.6 4.1 4.1 4.1h20.3v8.1h-4.1c-2.4 0-4.1 1.6-4.1 4.1s1.6 4.1 4.1 4.1h8.1c2.4 0 4.1-1.6 4.1-4.1v-16.2c0-2.4-1.6-4.1-4.1-4.1H98.6v-24.3h20.3c2.4 0 4.1-1.6 4.1-4.1s-1.6-4.1-4.1-4.1H94.6zm-81.1 16.2c-2.4 0-4.1 1.6-4.1 4.1v32.4c0 2.4 1.6 4.1 4.1 4.1H46c2.4 0 4.1-1.6 4.1-4.1v-32.4c0-2.4-1.6-4.1-4.1-4.1H13.5zm48.7 0c-2.4 0-4.1 1.6-4.1 4.1v32.4c0 2.4 1.6 4.1 4.1 4.1h32.4c2.4 0 4.1-1.6 4.1-4.1s-1.6-4.1-4.1-4.1H66.2v-28.4c0-2.4-1.6-4-4-4zm48.6 0c-2.4 0-4.1 1.6-4.1 4.1 0 2.4 1.6 4.1 4.1 4.1h8.1c2.4 0 4.1-1.6 4.1-4.1 0-2.4-1.6-4.1-4.1-4.1h-8.1zm-93.2 8.1h24.3v24.3H17.6v-24.3zm8.1 8.1v8.1h8.1v-8.1h-8.1z" fill={color} />
  </IconBase>
);