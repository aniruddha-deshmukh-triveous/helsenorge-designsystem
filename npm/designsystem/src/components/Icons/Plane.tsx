import React from 'react';

import { SvgPathProps } from '../Icon';

const Plane: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M36.332 29.474H18.387L3.945 23.16V12.645H4.3c.954 0 1.785.612 2.068 1.523l1.668 5.38h28.297a4.969 4.969 0 014.963 4.963 4.969 4.969 0 01-4.963 4.963m-.373 4.549a1.334 1.334 0 01-2.665 0 1.334 1.334 0 012.665 0m-7.945-19.405c2.25 0 4.128 1.547 4.67 3.629h-9.339c.542-2.082 2.42-3.63 4.67-3.63M10.512 35.357a1.334 1.334 0 111.333-1.333c0 .735-.598 1.333-1.333 1.333M44.704 24.51a1.32 1.32 0 00-1.319-1.32h-.28l.354-7.696a.757.757 0 10-1.513 0l.325 7.042c-.83-2.49-3.176-4.29-5.939-4.29h-2.297c-.565-2.808-3.049-4.93-6.02-4.93-2.973 0-5.457 2.122-6.02 4.93H8.992L7.61 13.784a3.45 3.45 0 00-3.31-2.44H2.645V24.01l10.176 4.45-1.61 3.035a2.642 2.642 0 00-.698-.105 2.636 2.636 0 00-2.633 2.633 2.637 2.637 0 002.633 2.634 2.636 2.636 0 002.632-2.634c0-.74-.309-1.407-.802-1.887l1.673-3.154 4.1 1.793h15.681v.762a2.628 2.628 0 00-1.803 2.486 2.637 2.637 0 002.633 2.634 2.637 2.637 0 002.633-2.634c0-1.29-.936-2.362-2.163-2.585v-.663h1.235c2.763 0 5.11-1.801 5.94-4.29l-.326 7.042a.758.758 0 101.513 0l-.355-7.697h.281c.728 0 1.32-.59 1.32-1.32" />
  );

  const normalHover = (
    <path d="M38.133 29.474H20.188L5.746 23.16V12.645H6.1c.954 0 1.785.612 2.068 1.523l1.668 5.38h28.297a4.969 4.969 0 014.963 4.963 4.969 4.969 0 01-4.963 4.963m-.373 4.549a1.334 1.334 0 01-2.665 0 1.334 1.334 0 012.665 0m-7.945-19.405c2.249 0 4.128 1.547 4.67 3.629h-9.34c.543-2.082 2.42-3.63 4.67-3.63M12.314 35.357a1.334 1.334 0 111.333-1.333c0 .735-.598 1.333-1.333 1.333m34.19-10.845a1.32 1.32 0 00-1.318-1.32h-.281l.355-7.696a.757.757 0 10-1.513 0l.325 7.042c-.83-2.49-3.176-4.29-5.94-4.29h-2.296c-.565-2.808-3.05-4.93-6.021-4.93-2.972 0-5.456 2.122-6.02 4.93H10.794L9.41 13.784a3.45 3.45 0 00-3.31-2.44H4.446V24.01l10.176 4.45-1.61 3.035a2.642 2.642 0 00-.698-.105 2.636 2.636 0 00-2.633 2.633 2.637 2.637 0 002.633 2.634 2.636 2.636 0 002.632-2.634c0-.74-.31-1.407-.802-1.887l1.673-3.154 4.099 1.793h15.682v.762a2.628 2.628 0 00-1.803 2.486 2.637 2.637 0 002.633 2.634 2.637 2.637 0 002.633-2.634c0-1.29-.936-2.362-2.163-2.585v-.663h1.235c2.763 0 5.109-1.801 5.939-4.29l-.325 7.042a.758.758 0 101.513 0l-.355-7.697h.28c.729 0 1.32-.59 1.32-1.32" />
  );

  return isHovered ? normalHover : normal;
};

export default Plane;
