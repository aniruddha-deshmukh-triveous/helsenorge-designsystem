import React from 'react';

import { getIcon, SvgPathProps } from './Icon';

const EmoticonDelighted: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <>
      <path d="M24.85 4.35A19.65 19.65 0 1 0 44.5 24 19.67 19.67 0 0 0 24.85 4.35Zm0 38A18.35 18.35 0 1 1 43.2 24a18.37 18.37 0 0 1-18.35 18.35Z" />
      <path d="M19.32 21.03a1.59 1.59 0 1 0 .02-3.18 1.59 1.59 0 0 0-.02 3.18Zm11.06 0a1.59 1.59 0 1 0 0-3.181 1.59 1.59 0 0 0 0 3.18Zm5 6.05h-21a.65.65 0 0 0-.65.65c0 7 6.52 10.14 11.15 10.14 4.63 0 11.16-3.14 11.16-10.14a.65.65 0 0 0-.66-.65Zm-10.51 9.49c-3.94 0-9.44-2.54-9.83-8.19H34.7c-.41 5.65-5.9 8.19-9.85 8.19h.02Z" />
    </>
  );

  const normalHover = (
    <>
      <path d="M24.82 4.35A19.65 19.65 0 1 0 44.47 24 19.67 19.67 0 0 0 24.82 4.35Zm0 38A18.35 18.35 0 1 1 43.17 24a18.37 18.37 0 0 1-18.35 18.35Z" />
      <path d="M35.38 27.08h-21a.65.65 0 0 0-.65.65c0 7 6.52 10.14 11.15 10.14 4.63 0 11.16-3.14 11.16-10.14a.65.65 0 0 0-.66-.65Zm-10.51 9.49c-3.94 0-9.44-2.54-9.83-8.19h19.67c-.45 5.65-5.94 8.19-9.89 8.19h.05Zm-7.62-15.95a2.93 2.93 0 0 1 4.12 0 .649.649 0 0 0 .85-.98 4.22 4.22 0 0 0-5.87 0 .642.642 0 0 0 0 .91.66.66 0 0 0 .9.07Zm11.05 0a2.93 2.93 0 0 1 4.12 0 .719.719 0 0 0 .43.16.65.65 0 0 0 .49-.23.641.641 0 0 0-.06-.91 4.23 4.23 0 0 0-5.88 0 .65.65 0 0 0 0 .91.66.66 0 0 0 .9.07Z" />
    </>
  );

  return getIcon({ size, isHovered, normal, normalHover });
};

export default EmoticonDelighted;
