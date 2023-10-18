import React from 'react';

import { getIcon, SvgPathProps } from '../Icon';

const Share: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <g>
      <path d="M27.952 34.525l-8.518-7.216.841-.992 8.518 7.216zM20.181 22.552l-.841-.992 8.515-7.215.841.993z" />
      <path d="M17 21.383a3.015 3.015 0 00-3.012 3.012A3.015 3.015 0 0017 27.405a3.015 3.015 0 003.012-3.01A3.015 3.015 0 0017 21.383m0 7.323a4.317 4.317 0 01-4.312-4.311A4.317 4.317 0 0117 20.083a4.317 4.317 0 014.312 4.312A4.317 4.317 0 0117 28.705M31 9.524a3.015 3.015 0 00-3.012 3.012 3.015 3.015 0 003.012 3.011 3.015 3.015 0 003.012-3.011 3.015 3.015 0 00-3.012-3.012m0 7.323a4.317 4.317 0 01-4.312-4.311 4.317 4.317 0 014.312-4.312 4.317 4.317 0 014.312 4.312 4.317 4.317 0 01-4.312 4.311m0 16.397a3.016 3.016 0 00-3.012 3.012 3.015 3.015 0 003.012 3.012 3.015 3.015 0 003.012-3.012 3.016 3.016 0 00-3.012-3.012m0 7.324a4.317 4.317 0 01-4.312-4.312 4.317 4.317 0 014.312-4.312 4.317 4.317 0 014.312 4.312 4.317 4.317 0 01-4.312 4.312" />
    </g>
  );

  const normalHover = (
    <g>
      <path d="M29.538 35.636l-10.097-8.321.827-1.003 10.097 8.321zM20.185 22.549l-.848-.984 10.567-9.109.849.984z" />
      <path d="M17 21.384a3.015 3.015 0 00-3.012 3.012A3.015 3.015 0 0017 27.406a3.015 3.015 0 003.012-3.01A3.015 3.015 0 0017 21.384m0 7.323a4.317 4.317 0 01-4.312-4.311A4.317 4.317 0 0117 20.084a4.316 4.316 0 014.312 4.312A4.316 4.316 0 0117 28.706M33.052 7.63a3.015 3.015 0 00-3.012 3.012 3.015 3.015 0 003.012 3.01 3.015 3.015 0 003.012-3.01 3.015 3.015 0 00-3.012-3.012m0 7.323a4.316 4.316 0 01-4.312-4.311 4.316 4.316 0 014.312-4.312 4.317 4.317 0 014.312 4.312 4.317 4.317 0 01-4.312 4.31m-.474 19.397a3.016 3.016 0 00-3.012 3.012 3.015 3.015 0 003.012 3.013 3.015 3.015 0 003.012-3.012 3.016 3.016 0 00-3.012-3.012m0 7.324a4.317 4.317 0 01-4.312-4.313 4.317 4.317 0 014.312-4.311 4.316 4.316 0 014.312 4.312 4.316 4.316 0 01-4.312 4.312" />
    </g>
  );

  const xSmall = (
    <path d="M30.867 38.9a2.78 2.78 0 01-2.776-2.777 2.78 2.78 0 012.776-2.776 2.78 2.78 0 012.778 2.776 2.78 2.78 0 01-2.778 2.778M16.87 27.04a2.78 2.78 0 01-2.777-2.778 2.78 2.78 0 012.777-2.777 2.78 2.78 0 012.778 2.777 2.78 2.78 0 01-2.778 2.778M30.867 9.626a2.78 2.78 0 012.778 2.777 2.78 2.78 0 01-2.778 2.777 2.78 2.78 0 01-2.776-2.777 2.78 2.78 0 012.776-2.777m0 21.95a4.502 4.502 0 00-2.813 1.004l-7.228-6.123c.364-.654.59-1.394.59-2.194s-.226-1.54-.59-2.194l7.228-6.124a4.493 4.493 0 002.813 1.005 4.553 4.553 0 004.548-4.547 4.553 4.553 0 00-4.548-4.546 4.552 4.552 0 00-4.546 4.546c0 .8.226 1.54.59 2.195l-7.228 6.122a4.506 4.506 0 00-2.814-1.003 4.552 4.552 0 00-4.546 4.546 4.552 4.552 0 004.546 4.546 4.506 4.506 0 002.814-1.003l7.228 6.123a4.495 4.495 0 00-.59 2.194 4.551 4.551 0 004.546 4.546 4.552 4.552 0 004.548-4.546 4.553 4.553 0 00-4.548-4.546" />
  );

  const xSmallHover = (
    <path d="M32.446 40.006a2.78 2.78 0 01-2.776-2.778 2.78 2.78 0 012.776-2.776 2.78 2.78 0 012.778 2.776 2.78 2.78 0 01-2.778 2.778M16.87 27.041a2.78 2.78 0 01-2.776-2.778 2.78 2.78 0 012.776-2.777 2.78 2.78 0 012.777 2.777 2.78 2.78 0 01-2.777 2.778M32.92 7.73a2.78 2.78 0 012.778 2.778 2.78 2.78 0 01-2.778 2.776 2.78 2.78 0 01-2.776-2.776A2.78 2.78 0 0132.92 7.73m-.474 24.951a4.5 4.5 0 00-2.823 1.012l-8.793-7.247a4.48 4.48 0 00.585-2.184c0-.802-.227-1.545-.592-2.199l9.29-8.008c.775.615 1.742.999 2.807.999a4.553 4.553 0 004.548-4.546 4.553 4.553 0 00-4.548-4.546 4.552 4.552 0 00-4.546 4.546c0 .802.227 1.545.594 2.2l-9.29 8.007a4.495 4.495 0 00-2.809-.999 4.552 4.552 0 00-4.546 4.546 4.552 4.552 0 004.546 4.546 4.505 4.505 0 002.822-1.009l8.793 7.247a4.486 4.486 0 00-.584 2.181 4.551 4.551 0 004.546 4.546 4.552 4.552 0 004.548-4.546 4.553 4.553 0 00-4.548-4.546" />
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default Share;
