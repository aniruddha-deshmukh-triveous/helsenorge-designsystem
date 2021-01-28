import React from 'react';
import { SvgPathProps } from './Icon';

const Stopwatch: React.FC<SvgPathProps> = ({ isExtraSmall, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M24 36.762c-7.037 0-12.762-5.726-12.762-12.763 0-6.868 5.457-12.47 12.262-12.736v13.443a.5.5 0 00.931.253l6.752-11.5c3.365 2.3 5.579 6.165 5.579 10.54 0 7.037-5.725 12.763-12.762 12.763m6.331-23.828L24.5 22.866V11.263c2.116.083 4.1.677 5.831 1.671M24.5 9.864v-3.59h3.633v-1h-8.267v1H23.5v3.59c-7.577.265-13.663 6.496-13.663 14.135 0 7.81 6.354 14.163 14.163 14.163S38.163 31.81 38.163 24c0-7.639-6.086-13.87-13.663-14.136"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M24 36.762c-7.037 0-12.762-5.726-12.762-12.763 0-6.868 5.457-12.47 12.262-12.736v13.443a.497.497 0 00.5.5.504.504 0 00.344-.136l9.578-9.08a12.695 12.695 0 012.84 8.01c0 7.036-5.724 12.762-12.762 12.762m9.258-21.52L24.5 23.542v-12.28a12.708 12.708 0 018.758 3.978M24.5 9.863V6.274h3.634v-1h-8.267v1H23.5v3.59c-7.577.265-13.663 6.496-13.663 14.135 0 7.81 6.354 14.163 14.163 14.163 7.81 0 14.163-6.353 14.163-14.163 0-7.639-6.086-13.87-13.663-14.136"
    />
  );

  const simplified = (
    <path
      fillRule={'evenodd'}
      d="M24 36.578c-6.936 0-12.578-5.643-12.578-12.579 0-6.72 5.305-12.213 11.947-12.545v13.253a.632.632 0 001.177.318l6.65-11.327c3.25 2.277 5.383 6.042 5.383 10.301 0 6.936-5.643 12.579-12.579 12.579zm.632-25.124c1.986.1 3.852.65 5.493 1.571l-5.493 9.359v-10.93zm0-1.769v-3.28h3.501V5.142h-8.266v1.263h3.502v3.28C15.752 10.02 9.653 16.302 9.653 24c0 7.912 6.436 14.347 14.347 14.347S38.347 31.911 38.347 24c0-7.697-6.098-13.979-13.715-14.314z"
    />
  );

  const simplifiedHover = (
    <path
      fillRule={'evenodd'}
      d="M24 36.578c-6.935 0-12.578-5.643-12.578-12.579 0-6.72 5.305-12.213 11.947-12.545v13.253a.63.63 0 001.066.458l9.432-8.942A12.51 12.51 0 0136.577 24c0 6.936-5.642 12.579-12.576 12.579zm.632-25.124a12.522 12.522 0 018.403 3.816l-8.403 7.966V11.454zm0-1.769v-3.28h3.502V5.142h-8.267v1.263h3.502v3.28C15.752 10.02 9.654 16.302 9.654 24c0 7.912 6.435 14.347 14.347 14.347 7.91 0 14.345-6.435 14.345-14.347 0-7.697-6.097-13.979-13.714-14.314z"
    />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default Stopwatch;
