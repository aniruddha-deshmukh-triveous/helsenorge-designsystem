import React from 'react';

import { SvgPathProps } from './Icon';

const Osteotomy: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M32.505 21.895c-1.778.816-2.981 2.633-3.208 4.739-2.942-.549-4.861-3.756-5.64-5.338h9.887a6.54 6.54 0 01-1.04.599m5.169-8.204c-.6-3.304-3.1-5.949-6.22-6.582-2.815-.575-5.597.433-7.453 2.643-1.855-2.209-4.635-3.217-7.45-2.644-3.12.63-5.621 3.274-6.223 6.577-.72 3.947 1.183 7.81 4.626 9.391 1.517.697 2.498 2.377 2.498 4.277v14.553h1.3V27.355c0-2.407-1.278-4.552-3.256-5.46-2.903-1.332-4.502-4.612-3.89-7.976.509-2.785 2.6-5.01 5.204-5.536 2.577-.522 5.126.556 6.653 2.812h1.076c1.528-2.258 4.079-3.33 6.657-2.812 2.604.53 4.693 2.755 5.2 5.54.409 2.253-.192 4.456-1.496 6.073H21.715l.332.878c.1.267 2.449 6.33 7.202 7.058v13.976h1.3V27.354c0-1.901.98-3.58 2.498-4.277 3.44-1.582 5.343-5.442 4.626-9.387"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M32.505 21.895c-1.771.813-2.973 2.617-3.207 4.713-4.02-.799-6.342-3.782-7.288-5.313h11.534a6.54 6.54 0 01-1.04.6m5.17-8.204c-.601-3.304-3.1-5.949-6.22-6.582-2.816-.579-5.598.434-7.454 2.643-1.855-2.209-4.636-3.214-7.45-2.644-3.12.63-5.621 3.274-6.223 6.577-.72 3.947 1.183 7.81 4.626 9.391 1.517.697 2.498 2.377 2.498 4.277v14.553h1.3V27.355c0-2.407-1.278-4.552-3.256-5.46-2.902-1.332-4.502-4.612-3.888-7.976.507-2.785 2.597-5.01 5.202-5.536 2.576-.522 5.126.556 6.653 2.812h1.076c1.528-2.258 4.077-3.333 6.657-2.812 2.604.53 4.694 2.755 5.2 5.54.409 2.253-.192 4.456-1.496 6.073H19.915l.402.912c.108.247 2.675 5.887 8.932 7.009v13.99h1.3V27.355c0-1.901.98-3.58 2.499-4.277 3.44-1.582 5.343-5.442 4.626-9.387"
    />
  );

  return isHovered ? normalHover : normal;
};

export default Osteotomy;
