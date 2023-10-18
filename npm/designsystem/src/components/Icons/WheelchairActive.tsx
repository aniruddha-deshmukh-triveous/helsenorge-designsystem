import React from 'react';

import { SvgPathProps } from '../Icon';

const WheelchairActive: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M17.5 42.733c-5.24 0-9.49-4.25-9.49-9.49 0-5.23 4.25-9.49 9.49-9.49 5.23 0 9.49 4.26 9.49 9.49 0 5.24-4.26 9.49-9.49 9.49m9.58-14.45c-.22-.44-.48-.85-.76-1.25-.3-.43-.63-.84-.99-1.21-.32-.33-.65-.65-1.01-.94-.96-.78-2.06-1.4-3.25-1.81a7.91 7.91 0 00-1.26-.37 10.727 10.727 0 00-6.04.42l3.39-4.47 4.15.5-.96 2.29c.43.1.84.23 1.25.37l1.57-3.74-6.6-.8-4.25 5.6c-.48.64-1.39.76-2.03.28-.64-.48-.76-1.4-.28-2.04l4.77-6.24c.28-.37.72-.57 1.19-.56l10.03.37c.98.04 1.75.86 1.71 1.84-.01.22-.05.43-.13.61l-2.72 6.46c.36.28.71.58 1.04.9l2.83-6.74.05-.11a3.094 3.094 0 00-2.73-4.26l-9.93-.37h-.11c-.88-.03-1.73.37-2.26 1.07l-4.78 6.25c-.91 1.21-.68 2.94.53 3.85.42.32.9.5 1.38.54a10.777 10.777 0 00-4.17 8.52c0 5.95 4.84 10.79 10.79 10.79 5.95 0 10.79-4.84 10.79-10.79v-.03a10.67 10.67 0 00-1.21-4.93m12.43 14.71a3.153 3.153 0 01-4.21-1.48l-4.08-8.49-1.58.1c0-.44-.03-.87-.08-1.29l2.45-.16 4.46 9.28c.45.92 1.55 1.31 2.47.87.45-.22.78-.59.95-1.06.16-.46.13-.97-.08-1.41l-5.01-10.41c-.33-.69-1.03-1.1-1.79-1.05l-4.48.29c-.19-.43-.42-.85-.66-1.25l5.06-.34c1.28-.08 2.48.62 3.04 1.78l5.01 10.41c.75 1.57.09 3.46-1.47 4.21M29.09 5.263c1.68 0 3.05 1.37 3.05 3.05a3.056 3.056 0 01-6.11 0c0-1.68 1.37-3.05 3.06-3.05m0 7.4c2.4 0 4.35-1.95 4.35-4.35 0-2.4-1.95-4.35-4.35-4.35-2.4 0-4.36 1.95-4.36 4.35 0 2.4 1.96 4.35 4.36 4.35"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M19.17 42.733c-5.23 0-9.49-4.25-9.49-9.49 0-5.23 4.26-9.49 9.49-9.49s9.49 4.26 9.49 9.49c0 5.24-4.26 9.49-9.49 9.49m9.58-14.45a11.402 11.402 0 00-1.26-1.91c-.3-.35-.61-.69-.95-1.01-.9-.84-1.96-1.54-3.11-2.03-.4-.18-.82-.33-1.24-.45-.96-.28-1.97-.43-3.02-.43-.42 0-.84.02-1.25.08l2-3.85 4 .76-1.12 2.22c.42.12.83.28 1.23.46l1.82-3.64-6.64-1.26-2.55 4.94c-.53.56-1.42.6-2 .09-.61-.53-.67-1.44-.16-2.03l3.23-5.53c.31-.32.75-.49 1.19-.44l9.98 1.04c.98.11 1.69.98 1.58 1.96-.02.21-.08.41-.17.6l-3.15 6.27c.35.29.68.61.98.95l3.33-6.64c.17-.33.27-.68.31-1.05.17-1.68-1.06-3.2-2.74-3.38l-9.89-1.04-.1-.01a2.77 2.77 0 00-2.33.92l-3.22 5.52c-.96 1.15-.83 2.86.3 3.84.17.14.34.26.53.36-3.52 1.78-5.95 5.44-5.95 9.65 0 5.95 4.84 10.79 10.79 10.79 5.95 0 10.79-4.84 10.79-10.79v-.03a10.67 10.67 0 00-1.21-4.93m12.43 14.71c-.43.21-.9.31-1.36.31-.35 0-.71-.06-1.05-.18-.79-.28-1.43-.85-1.79-1.61l-4.09-8.49-1.58.1c0-.44-.03-.87-.08-1.29l2.45-.16 4.47 9.28c.21.45.59.78 1.05.95.47.16.97.13 1.42-.08.92-.45 1.3-1.55.86-2.47l-5-10.41c-.33-.69-1.03-1.1-1.79-1.05l-4.49.3c-.19-.43-.41-.85-.66-1.26l5.06-.34c1.29-.08 2.48.62 3.05 1.78l5 10.41c.76 1.57.1 3.46-1.47 4.21m-8.75-37.73c1.69 0 3.06 1.37 3.06 3.05a3.056 3.056 0 01-6.11 0c0-1.68 1.37-3.05 3.05-3.05m0 7.4c2.4 0 4.36-1.95 4.36-4.35 0-2.4-1.96-4.35-4.36-4.35-2.4 0-4.35 1.95-4.35 4.35 0 2.4 1.95 4.35 4.35 4.35"
    />
  );

  return isHovered ? normalHover : normal;
};

export default WheelchairActive;
