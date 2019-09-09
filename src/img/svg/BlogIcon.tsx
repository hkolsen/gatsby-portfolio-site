import React from 'react';
import { CSSAnimationsIcon } from './blog/CSSAnimationsIcon';
import { AutomationInnovationIcon } from './blog/AutomationInnovationIcon';
import { SVGAnimationIcon } from './blog/SVGAnimationIcon';

export interface BlogIconProps {
  blogTitle: string;
  color: string;
  blogImg: string;
}

export const BlogIcon: React.FunctionComponent<BlogIconProps> = ({
  color,
  blogTitle, 
  blogImg,
}) => {
  switch (blogImg) {
    case 'css-animations':
      return <CSSAnimationsIcon color={color} blogTitle={blogTitle} />;
    case 'svg-animations':
      return <SVGAnimationIcon color={color} blogTitle={blogTitle} />;
    // case 'interactive-quiz':
    //   return <HospitalityIcon color={color} blogTitle={blogTitle} />;
    // case 'design-system':
    //   return <RestaurantsIcon color={color} blogTitle={blogTitle} />;
    case 'automation-innovation':
      return <AutomationInnovationIcon color={color} blogTitle={blogTitle} />;
    // case 'data-driven':
    //   return <CommunicationsIcon color={color} blogTitle={blogTitle} />;
    // case 'animated-slideshow':
    //   return <FinancialIcon color={color} blogTitle={blogTitle} />;
    default:
        return <CSSAnimationsIcon color={color} blogTitle={blogTitle} />;
  }
};