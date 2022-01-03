import React from 'react';
import { getColor } from '../../theme/currys/color';
import { PaletteNames } from '../../theme/palette';

type LogoColor = PaletteNames;

interface LogoProps {
  /** Changes the size of the logo. */
  size?: number;
  /** Adds custom classes to the element. */
  className?: string;
  /**	Changes the color of the logo. */
  color?: LogoColor;
  /** Changes to the byline variant of the logo. */
  byline?: boolean;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const Original = ({
  size = 300,
  color = 'black',
  className = '',
  testId,
}: {
  size?: number;
  color?: LogoColor;
  className?: string;
  testId?: string;
}): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    role={'img'}
    aria-labelledby="logo-title"
    viewBox="0 0 502 220"
    className={className}
    data-testid={testId}
  >
    <title id={'logo-title'}>Helsenorge</title>
    <g fill={getColor(color, 500)}>
      <path d="M39.8 2.5v26.9H17V2.5H1v69.9h16V43.6h22.8v28.8h16.1V2.5zM250.3 58.6V2.5h-16v69.9h43.5V58.6zM142.9 122.5c-16.1 0-27.4 13.6-27.4 33.1s11.2 33.1 27.4 33.1 27.4-13.6 27.4-33.1-11.3-33.1-27.4-33.1zm19 33.1c0 11.9-5 25.9-19 25.9s-19-13.9-19-25.9c0-11.9 5-25.9 19-25.9s19 14 19 25.9zM501 40c0-19.1-11.1-32.4-27-32.4-16.4 0-27.4 13.3-27.4 33.1 0 19.5 11.5 33.1 28 33.1 12.2 0 21.4-6 24.7-16.2l.5-1.6h-8.3l-.3.7c-2.8 6.2-8.8 9.8-16.6 9.8-12.9 0-18.5-11.5-19.5-22.7H501V40zm-8.3-3.2h-37.6c1-10.8 6.5-21.9 18.9-21.9 13.2 0 18.3 12.6 18.7 21.9zM30.4 122.4c-10.8 0-16.6 6.7-19.5 11.8v-9.9H3.3v62.6h8.1v-31.4c0-8.4 4.4-25.7 18.1-25.7 14 0 15.9 12 15.9 25v32.1h8.1v-32.1c.1-16.1-2.7-32.4-23.1-32.4zM134.3 59V43H157V30h-22.7V15.9H165V2.5h-46.4v69.9h47.3V59zM466.7 173.4v-16h22.7v-13h-22.7v-14.1h30.7v-13.4H451v69.9h47.3v-13.4zM246.7 140.5v-16.3h-7.6v62.6h8.1v-37.6l27.3-19.6v-9zM393.5 120.6l-14.7 10.5c-4.4-5.6-11.2-8.7-18.8-8.7-13.6 0-23.6 9.8-23.6 23.3 0 10.6 6.2 19.1 16 22.2l-16 17.5c-4 4.6-5.7 8.3-5.7 12.7 0 12.6 11.1 20.7 28.2 20.7 16.9 0 28.3-8.3 28.3-20.7 0-12.5-11.1-20.6-28.3-20.6-1.7 0-3.9.2-5.6.5l8-9c12.9-.7 22.2-10.4 22.2-23.3 0-2.8-.4-5.5-1.2-7.8 0-.1-.1-.2-.1-.3l11.2-8.1v-8.9zm-34.4 64.2c12.1 0 20 5.2 20 13.4s-7.8 13.5-20 13.5c-12.1 0-19.9-5.3-19.9-13.5 0-7.8 8.3-13.4 19.9-13.4zm.9-23c-8.8 0-15.2-6.8-15.2-16 0-9.3 6.4-16 15.2-16s15.2 6.7 15.2 16c0 9.2-6.4 16-15.2 16zM366.7 30.3c-6.6-2.3-13.5-4.7-13.5-9.2 0-4.8 4.2-7 9.3-7 5.4 0 9 4.5 9 8.5v.8h16.2v-.6c0-13-10.2-21.7-25.4-21.7-15.3 0-24.9 7.8-24.9 20.4 0 14.7 13.1 18.4 22.9 21.9 6.5 2.4 13.6 4.3 13.6 8.7 0 4.6-3.4 8-10.6 8-6.5 0-10.9-3.8-10.9-9.4v-.8h-16.7v.8c0 14.5 10.3 23.1 27.5 23.1 16.5 0 26-7.6 26-21.5 0-14.4-12.5-18.5-22.5-22z" />
    </g>
  </svg>
);

const Byline = ({
  size = 300,
  color = 'black',
  className = '',
  testId,
}: {
  size?: number;
  color?: LogoColor;
  className?: string;
  testId?: string;
}): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    role={'img'}
    aria-labelledby="logo-title"
    viewBox="0 0 87 12"
    className={className}
    data-testid={testId}
  >
    <title id={'logo-title'}>Helsenorge</title>
    <g fill={getColor(color, 500)}>
      <path d="M5 .8v2.8H2.6V.8H1V8h1.6V5.1H5V8h1.6V.8zM20.9 6.6V.8h-1.6V8h4.5V6.6zM57.9 1.4c-1.7 0-2.8 1.4-2.8 3.4s1.2 3.4 2.8 3.4 2.8-1.4 2.8-3.4-1.1-3.4-2.8-3.4zm2 3.4c0 1.2-.5 2.7-2 2.7-1.4 0-2-1.4-2-2.7s.5-2.7 2-2.7 2 1.5 2 2.7zM86 4.7c0-2-1.1-3.3-2.8-3.3-1.7 0-2.8 1.4-2.8 3.4s1.2 3.4 2.9 3.4c1.2 0 2.2-.6 2.5-1.7l.1-.2H85v.1c-.3.6-.9 1-1.7 1-1.3 0-1.9-1.2-2-2.3H86v-.4zm-.9-.3h-3.9c.1-1.1.7-2.3 1.9-2.3 1.5 0 2 1.3 2 2.3zM49.2 1.4c-1.1 0-1.7.7-2 1.2v-1h-.8V8h.8V4.8c0-.9.5-2.6 1.9-2.6s1.6 1.2 1.6 2.6V8h.8V4.7c0-1.6-.2-3.3-2.3-3.3zM12.1 6.6V5h2.4V3.7h-2.4V2.2h3.2V.8h-4.8V8h4.9V6.6zM38.3 6.6V5h2.3V3.7h-2.3V2.2h3.2V.8h-4.8V8h4.9V6.6zM65.5 3.3V1.6h-.8V8h.8V4.1l2.8-2v-.9zM77.6 1.2l-1.5 1.1c-.5-.6-1.1-.9-1.9-.9-1.4 0-2.4 1-2.4 2.4 0 1.1.6 2 1.6 2.3l-1.6 1.8c-.4.5-.6.9-.6 1.3 0 1.3 1.1 2.1 2.9 2.1 1.7 0 2.9-.9 2.9-2.1 0-1.3-1.1-2.1-2.9-2.1h-.6l.8-.9c1.3-.1 2.3-1.1 2.3-2.4 0-.3 0-.6-.1-.8l1.2-.8v-1zM74 7.8c1.2 0 2.1.5 2.1 1.4 0 .8-.8 1.4-2.1 1.4-1.2 0-2-.5-2-1.4 0-.8.8-1.4 2-1.4zm.1-2.4c-.9 0-1.6-.7-1.6-1.7s.7-1.6 1.6-1.6c.9 0 1.6.7 1.6 1.6 0 1-.7 1.7-1.6 1.7zM30.4 3.7c-.7-.2-1.4-.5-1.4-1s.4-.7 1-.7.9.5.9.9V3h1.7v-.1c0-1.3-1.1-2.2-2.6-2.2-1.6 0-2.6.8-2.6 2.1 0 1.5 1.3 1.9 2.4 2.3.7.2 1.4.4 1.4.9s-.3.8-1.1.8c-.7 0-1.1-.4-1.1-1v-.1h-1.7v.1c0 1.5 1.1 2.4 2.8 2.4 1.7 0 2.7-.8 2.7-2.2-.1-1.5-1.4-2-2.4-2.3z" />
    </g>
  </svg>
);

function Logo(props: LogoProps): JSX.Element {
  const { byline = false, ...restProps } = props;
  return byline ? <Byline {...restProps} /> : <Original {...restProps} />;
}

export default Logo;
