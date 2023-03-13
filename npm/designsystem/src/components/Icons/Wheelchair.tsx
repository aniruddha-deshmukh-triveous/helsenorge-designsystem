import React from 'react';

import { SvgPathProps } from './Icon';

const Wheelchair: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M40.308 39.676l-4.09-11.21c-.29-.8-1.07-1.34-1.92-1.34h-.74c-1.52.01-3.05.02-4.58-.01l-3.17-.03-.58-4.6h7.58c.74 0 1.35-.61 1.35-1.35 0-.75-.61-1.35-1.35-1.35h-7.96l-.54-3.36c-.17-1.23-1.31-2.11-2.53-1.96a2.266 2.266 0 00-2 2.53l.5 4.18.46 3.94.56 4.69a2.402 2.402 0 002.4 2.11l4.36-.04.93-.01c.79-.02 1.59-.02 2.39-.02h1.46l3.4 9.32c.2.54.6.98 1.13 1.22.52.24 1.11.27 1.65.07.54-.2.98-.6 1.22-1.12.25-.53.27-1.11.07-1.66m1.11 2.21c-.39.84-1.08 1.47-1.95 1.79-.39.14-.79.21-1.19.21a3.468 3.468 0 01-3.26-2.28l-2.89-7.91-.2-.55c-.97 0-1.95 0-2.92.01l-.95.01-4.35.05a3.713 3.713 0 01-3.7-3.25l-.56-4.71-.18-1.56-.16-1.29-.12-1.06-.5-4.19a3.573 3.573 0 013.13-3.98c1.92-.23 3.7 1.14 3.98 3.05l.35 2.26h6.86c1.46 0 2.65 1.19 2.65 2.65s-1.19 2.65-2.65 2.65h-6.11l.26 2.01 2.04.02c1.52.03 3.04.02 4.56.01h.74c1.4 0 2.66.88 3.14 2.19l4.09 11.22c.32.87.28 1.81-.11 2.65m-23.41-34.46a3.056 3.056 0 006.11 0 3.05 3.05 0 00-3.05-3.05c-1.69 0-3.06 1.36-3.06 3.05m-1.3 0c0-2.4 1.96-4.35 4.36-4.35a4.36 4.36 0 014.35 4.35c0 2.4-1.96 4.35-4.35 4.35-2.4 0-4.36-1.95-4.36-4.35m12.69 26.72l1.3.02c-.5 5.48-5.13 9.79-10.74 9.79-5.96 0-10.8-4.84-10.8-10.79 0-5.23 3.73-9.6 8.67-10.59l.15 1.3c-4.29.91-7.52 4.73-7.52 9.29 0 5.23 4.26 9.49 9.5 9.49 4.9 0 8.95-3.74 9.44-8.51"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M40.31 39.676l-4.09-11.21c-.3-.8-1.07-1.34-1.92-1.34h-.74c-1.52.01-3.05.02-4.58-.01l-2.97-.03-.13-4.38 7.69.03a1.35 1.35 0 001.42-1.3c.01-.36-.12-.7-.36-.97-.25-.26-.58-.41-.94-.43l-7.9-.07-.19-3.45c-.05-1.24-1.07-2.22-2.28-2.22h-.04c-.61.01-1.18.26-1.6.69-.43.44-.66 1.02-.65 1.63l.09 4.6.08 3.97.1 4.69c.14 1.15 1.21 2.04 2.4 2.04l4.36-.04.93-.01c.79-.02 1.59-.02 2.39-.02h1.46l3.4 9.32a2.167 2.167 0 104.07-1.49m1.11 2.21c-.39.84-1.08 1.47-1.95 1.79-.39.14-.79.21-1.19.21a3.468 3.468 0 01-3.26-2.28l-2.89-7.91-.2-.55c-.97 0-1.95 0-2.93.01l-.94.01-4.35.05c-1.84.01-3.48-1.37-3.71-3.25l-.1-4.76-.03-1.54-.02-1.3-.03-1.1-.09-4.63c-.01-.96.35-1.87 1.02-2.55a3.56 3.56 0 012.52-1.09c1.93-.04 3.56 1.53 3.63 3.46l.12 2.22 6.7.06a2.664 2.664 0 012.57 2.75c-.03.71-.33 1.36-.85 1.84s-1.2.73-1.9.71l-6.32-.03.05 1.79 1.73.02c1.52.03 3.04.02 4.56.01h.74c1.39 0 2.66.88 3.14 2.19l4.09 11.22c.32.87.28 1.81-.11 2.65m-21.3-34.46a3.056 3.056 0 006.11 0 3.05 3.05 0 00-3.05-3.05c-1.69 0-3.06 1.36-3.06 3.05m-1.3 0c0-2.4 1.96-4.35 4.36-4.35 2.4 0 4.35 1.95 4.35 4.35 0 2.4-1.95 4.35-4.35 4.35-2.4 0-4.36-1.95-4.36-4.35m10.58 26.72l1.3.02c-.5 5.48-5.13 9.79-10.74 9.79-5.96 0-10.8-4.84-10.8-10.79 0-5.52 4.15-10.08 9.5-10.72l.03 1.31c-4.64.62-8.23 4.6-8.23 9.41 0 5.23 4.26 9.49 9.5 9.49 4.9 0 8.95-3.74 9.44-8.51"
    />
  );

  return isHovered ? normalHover : normal;
};

export default Wheelchair;
