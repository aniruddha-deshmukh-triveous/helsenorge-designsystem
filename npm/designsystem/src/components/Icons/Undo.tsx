import React from 'react';
import { SvgPathProps } from './Icon';

const Undo: React.FC<SvgPathProps> = ({ isExtraSmall, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M37.976 24.195c0 7.782-6.331 14.112-14.113 14.112-6.675 0-12.49-4.74-13.825-11.27l1.273-.26c1.213 5.928 6.492 10.23 12.552 10.23 7.065 0 12.813-5.747 12.813-12.812 0-7.065-5.748-12.813-12.813-12.813-3.885 0-7.554 1.796-9.977 4.812h4.92v1.299H11.97l-.337-7.12 1.299-.061.223 4.72c2.669-3.11 6.578-4.95 10.707-4.95 7.782 0 14.113 6.33 14.113 14.113"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M34.02 34.213a14.132 14.132 0 01-10.002 4.125 14.03 14.03 0 01-7.743-2.317l.716-1.085c5.049 3.333 11.823 2.644 16.11-1.642 4.995-4.996 4.995-13.124 0-18.12-4.996-4.995-13.124-4.994-18.12 0-2.747 2.747-4.071 6.611-3.653 10.457l3.479-3.479.919.92-4.833 4.832-5.272-4.796.875-.962 3.496 3.181c-.313-4.087 1.15-8.153 4.07-11.072 5.502-5.502 14.455-5.503 19.958 0 5.502 5.502 5.502 14.456 0 19.958"
    />
  );

  const simplified = (
    <path
      fillRule={'evenodd'}
      d="M38.21 24.195c0 7.911-6.436 14.347-14.347 14.347-6.784 0-12.696-4.82-14.055-11.457l1.732-.355c1.192 5.82 6.374 10.043 12.323 10.043 6.936 0 12.579-5.642 12.579-12.578 0-6.936-5.643-12.579-12.579-12.579-3.65 0-7.109 1.61-9.486 4.342h4.428v1.77h-7.058l-.346-7.343 1.766-.085.195 4.13a14.384 14.384 0 0110.501-4.582c7.911 0 14.347 6.436 14.347 14.347"
    />
  );

  const simplifiedHover = (
    <path
      fillRule={'evenodd'}
      d="M34.186 34.38a14.37 14.37 0 01-10.169 4.192c-2.73 0-5.474-.772-7.87-2.355l.973-1.475c4.957 3.271 11.608 2.593 15.815-1.613 4.905-4.905 4.905-12.885 0-17.788-4.903-4.905-12.884-4.905-17.788 0-2.581 2.58-3.888 6.165-3.637 9.777l3.13-3.132 1.251 1.252-4.99 4.99-5.438-4.947 1.19-1.307 3.058 2.781a14.382 14.382 0 014.186-10.665c5.593-5.593 14.695-5.594 20.289 0 5.593 5.594 5.593 14.695 0 20.29"
    />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default Undo;
