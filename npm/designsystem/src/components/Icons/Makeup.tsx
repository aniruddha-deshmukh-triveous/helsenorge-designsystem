import React from 'react';

import { SvgPathProps } from '../Icon';

const Makeup: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path d="M43.797 8.922l-1.694 25.73H40.83v2.685c0 .96-.781 1.74-1.74 1.74h-6.67c-.96 0-1.74-.78-1.74-1.74v-2.685h-1.273l-1.694-25.73h16.083zM22 17.614a2.527 2.527 0 012.524 2.524v5.583h-.35v1.055c1.915 1.077 3.132 3.157 3.132 5.412 0 2.248-1.217 4.324-3.133 5.401v1.488h-5.94V37.7c-1.89-1.075-3.134-3.237-3.134-5.512 0-2.255 1.216-4.335 3.133-5.412v-1.055h-.35v-5.583a2.527 2.527 0 012.523-2.524zm-14.85-.667a1.453 1.453 0 011.585.316l1.25 1.25c.443.444.687 1.033.687 1.66v2.58h1.366v6.663h.775v7.59c0 1.143-.929 2.07-2.07 2.07H6.316a2.072 2.072 0 01-2.07-2.07v-7.59h.775v-6.662h1.23v-4.462c0-.591.352-1.118.897-1.345zm32.38 17.705h-7.55v2.685c0 .243.198.44.44.44h6.67a.44.44 0 00.44-.44v-2.685zm-18.827-8.916h-1.17v1.847l-.373.175c-1.652.782-2.76 2.562-2.76 4.43 0 1.898 1.134 3.761 2.76 4.53l.372.176v.883h3.341v-.995l.372-.176c1.677-.793 2.761-2.527 2.761-4.418 0-1.868-1.11-3.648-2.76-4.43l-.373-.175v-1.847h-1.17v7.345h-1v-7.345zm-9.19 4.98H5.547v6.29c0 .426.345.77.77.77h4.425a.771.771 0 00.771-.77v-6.29zm30.709-17.644H29.29l1.335 20.28h10.26l1.337-20.28zm-31.484 10.98H6.322v5.364h4.416v-5.363zM22 18.915h-1.595c-.675 0-1.224.549-1.224 1.224v4.283h4.043v-4.283c0-.675-.549-1.224-1.224-1.224zm-14.307-.778l-.046.013a.143.143 0 00-.096.143v4.462h1.821v-2.58c0-.281-.109-.544-.307-.742l-1.25-1.25a.14.14 0 00-.168-.033zm34.716-7.913H29.102l.103 1.548h13.102l.102-1.548z" />
  );

  const normalHover = (
    <path d="M43.798 8.922l-1.695 25.73H40.83v2.685c0 .96-.781 1.74-1.74 1.74h-6.67c-.96 0-1.74-.78-1.74-1.74v-2.685h-1.273l-1.694-25.73h16.084zM22 14.808a2.527 2.527 0 012.524 2.524v5.584h-2.82v1.52h2.47v2.34c1.915 1.077 3.132 3.157 3.132 5.412 0 2.248-1.217 4.324-3.133 5.401v1.488h-5.94V37.7c-1.89-1.075-3.134-3.237-3.134-5.512 0-2.255 1.217-4.335 3.133-5.412v-2.34h2.471v-1.52h-2.822v-5.584a2.527 2.527 0 012.524-2.524zm-14.85.639a1.453 1.453 0 011.585.316l1.25 1.25a2.33 2.33 0 01.687 1.66v4.08h1.366v6.663h.775v7.59c0 1.143-.929 2.07-2.07 2.07H6.317a2.072 2.072 0 01-2.07-2.07v-7.59h.775v-6.662h1.23v-5.962c0-.591.352-1.118.897-1.345zm32.38 19.205h-7.55v2.685c0 .243.198.44.44.44h6.67a.44.44 0 00.44-.44v-2.685zm-18.827-8.916h-1.17v1.847l-.373.175c-1.652.782-2.76 2.562-2.76 4.43 0 1.898 1.134 3.761 2.76 4.53l.372.176v.883h3.341v-.995l.372-.176c1.677-.793 2.761-2.527 2.761-4.418 0-1.868-1.11-3.648-2.76-4.43l-.373-.175v-1.847h-1.17v4.538h-1v-4.538zm-9.19 4.98H5.547v6.29c0 .426.345.77.77.77h4.426c.424 0 .77-.344.77-.77v-6.29zm30.709-17.644H29.29l1.335 20.28h10.26l1.337-20.28zm-31.483 10.98H6.322v5.364h4.417v-5.363zm-3.046-7.416l-.046.013a.143.143 0 00-.096.143v5.962h1.821v-4.08c0-.281-.109-.544-.307-.742l-1.25-1.25a.14.14 0 00-.168-.033zM22 16.108h-1.595c-.675 0-1.224.549-1.224 1.224v4.283h4.043v-4.283c0-.675-.549-1.224-1.224-1.224zm20.409-5.885H29.102l.103 1.548h13.102l.102-1.548z" />
  );

  return isHovered ? normalHover : normal;
};

export default Makeup;
