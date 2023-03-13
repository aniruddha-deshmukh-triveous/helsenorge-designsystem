import React from 'react';

import { SvgPathProps } from './Icon';

const RadioTherapy: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M39.783 24.233c0-5.62-4.573-10.194-10.195-10.194a10.2 10.2 0 00-8.419 4.443l-1.072-.734a11.498 11.498 0 019.491-5.01c6.34 0 11.495 5.157 11.495 11.495 0 6.338-5.156 11.495-11.495 11.495a11.49 11.49 0 01-8.69-3.973l.981-.85a10.192 10.192 0 007.71 3.523c5.621 0 10.194-4.573 10.194-10.195zm5.71 0c0 8.77-7.135 15.904-15.905 15.904a15.877 15.877 0 01-14.073-8.49l1.15-.607a14.583 14.583 0 0012.923 7.797c8.053 0 14.604-6.55 14.604-14.604 0-8.052-6.55-14.604-14.604-14.604a14.616 14.616 0 00-13.384 8.751l-1.19-.52a15.911 15.911 0 0114.574-9.53c8.77 0 15.904 7.134 15.904 15.903zm-21.68 3.52H4.355V26.3a4.61 4.61 0 014.604-4.604h14.854v6.057zm1.3 1.3h8.13v-1.3h-8.13v-7.357H8.96A5.911 5.911 0 003.055 26.3v2.753h22.058zm6.438-5.394c0 1.082-.88 1.963-1.963 1.963a1.966 1.966 0 01-1.963-1.963c0-1.083.881-1.963 1.963-1.963 1.083 0 1.963.88 1.963 1.963zm-5.226 0a3.266 3.266 0 003.263 3.262 3.266 3.266 0 003.263-3.262c0-1.8-1.464-3.263-3.263-3.263a3.266 3.266 0 00-3.263 3.263z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M39.783 24.233c0-5.62-4.573-10.194-10.194-10.194a10.201 10.201 0 00-8.42 4.443l-1.072-.734a11.498 11.498 0 019.492-5.01c6.338 0 11.494 5.157 11.494 11.495 0 6.338-5.156 11.495-11.494 11.495a11.493 11.493 0 01-8.692-3.973l.983-.85a10.19 10.19 0 007.71 3.523c5.62 0 10.193-4.573 10.193-10.195zm5.71 0c0 8.77-7.135 15.904-15.904 15.904a15.879 15.879 0 01-14.074-8.49l1.15-.607a14.582 14.582 0 0012.924 7.797c8.052 0 14.603-6.55 14.603-14.604 0-8.052-6.55-14.604-14.603-14.604a14.616 14.616 0 00-13.385 8.751l-1.19-.52A15.913 15.913 0 0129.59 8.33c8.77 0 15.903 7.134 15.903 15.903zm-18.947 3.52H7.088V26.3a4.61 4.61 0 014.604-4.604h14.854v6.057zm1.3 1.3h8.13v-1.3h-8.13v-7.357H11.692A5.911 5.911 0 005.788 26.3v2.753h22.058zm6.438-5.394c0 1.082-.88 1.963-1.962 1.963a1.965 1.965 0 01-1.963-1.963c0-1.083.88-1.963 1.963-1.963 1.082 0 1.962.88 1.962 1.963zm-5.225 0a3.265 3.265 0 003.263 3.262 3.265 3.265 0 003.262-3.262c0-1.8-1.463-3.263-3.262-3.263a3.266 3.266 0 00-3.263 3.263z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default RadioTherapy;
