import React from 'react';
import IconBase from 'react-icon-base';

export interface LocationIconProps {
  altText: string;
  color: string;
}

export const LocationIcon: React.FC<LocationIconProps> = ({
  color,
  altText,
}) => (
  <IconBase
    viewBox="0 0 700 700"
    height="100%"
    width="100%"
    color={color}
    shapeRendering="geometricPrecision"
  >
    <title>{altText}</title>
    <path d="m349.98 35.012c-102.95 0-186.67 83.711-186.66 186.67 0 52.547 27.875 103.86 63.426 153.81 35.551 49.941 79.402 98.809 113.94 144.86 2.2031 2.9297 5.6602 4.6562 9.3242 4.6562 3.668 0 7.1211-1.7266 9.3281-4.6562 34.539-46.055 78.379-94.922 113.93-144.86 35.551-49.945 63.395-101.26 63.395-153.81 0-102.96-83.723-186.67-186.68-186.67zm0.023438 93.32c24.754 0 48.492 9.8359 65.996 27.34 17.504 17.5 27.336 41.242 27.336 65.996 0 24.754-9.832 48.492-27.336 65.996-17.504 17.504-41.242 27.336-65.996 27.336s-48.492-9.832-65.996-27.336c-17.504-17.504-27.336-41.242-27.336-65.996 0-24.754 9.832-48.496 27.336-65.996 17.504-17.504 41.242-27.34 65.996-27.34z" fillRule="evenodd"/></IconBase>
);