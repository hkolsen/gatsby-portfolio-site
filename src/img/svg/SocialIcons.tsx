import React from 'react';
import { EmailIcon } from './socialIcons/EmailIcon';
import { GithubIcon } from './socialIcons/GithubIcon';
import { CodePenIcon } from './socialIcons/CodePenIcon';
import { LinkedInIcon } from './socialIcons/LinkedInIcon';
import { TwitterIcon } from './socialIcons/TwitterIcon';

export interface SocialIconProps {
  socialName: string;
  color: string;
}

export const SocialIcons: React.FC<SocialIconProps> = ({
  color,
  socialName,
}) => {
  switch (socialName) {
    case 'Twitter':
      return <TwitterIcon color={color} socialName={socialName} />;
    case 'Github':
        return <GithubIcon color={color} socialName={socialName} />;
    case 'CodePen':
        return <CodePenIcon color={color} socialName={socialName} />;
    case 'LinkedIn':
        return <LinkedInIcon color={color} socialName={socialName} />;
    default:
        return <EmailIcon color={color} socialName="Email" />;
  }
};