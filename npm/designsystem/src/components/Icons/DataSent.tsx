import React from 'react';

import { SvgPathProps } from '../Icon';

const DataSent: React.FC<SvgPathProps> = ({ isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M6.464 27.741l3.88 3.878-.92.92-4.907-4.906a.652.652 0 010-.92l4.97-4.97.92.92-3.779 3.777h18.386v1.301H6.464zm22.214-13.23c-7.82 0-12.813-1.892-12.813-3.195 0-1.302 4.992-3.193 12.813-3.193 7.822 0 12.814 1.891 12.814 3.193 0 1.303-4.992 3.195-12.814 3.195zm0-7.689c-7.013 0-14.113 1.544-14.113 4.494v13.105h1.3V13.314c2.363 1.646 7.608 2.497 12.813 2.497 5.205 0 10.451-.85 12.814-2.497V38.09c0 1.301-4.992 3.193-12.814 3.193-7.82 0-12.813-1.892-12.813-3.193v-8.23h-1.3v8.23c0 2.95 7.1 4.494 14.113 4.494 7.014 0 14.114-1.544 14.114-4.494V11.316c0-2.95-7.1-4.494-14.114-4.494z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M4.019 27.741l3.879 3.88-.92.92-4.906-4.908a.65.65 0 010-.92l4.97-4.97.92.92-3.778 3.777h20.83v1.301H4.02zm24.66-13.23c-7.822 0-12.813-1.892-12.813-3.194 0-1.303 4.99-3.194 12.813-3.194 7.822 0 12.814 1.891 12.814 3.194 0 1.302-4.992 3.194-12.814 3.194zm0-7.689c-7.014 0-14.114 1.544-14.114 4.495v13.104h1.3V13.315c2.363 1.644 7.609 2.496 12.814 2.496s10.45-.852 12.814-2.496V38.09c0 1.302-4.992 3.194-12.814 3.194s-12.813-1.892-12.813-3.194v-8.23h-1.301v8.23c0 2.951 7.1 4.495 14.114 4.495 7.013 0 14.113-1.544 14.113-4.495V11.317c0-2.95-7.1-4.495-14.113-4.495z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default DataSent;
