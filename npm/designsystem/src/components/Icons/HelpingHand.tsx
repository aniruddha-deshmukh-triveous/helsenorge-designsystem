import React from 'react';

import { SvgPathProps } from './Icon';

const HelpingHand: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M42.398 25.011a1.75 1.75 0 01-.777 1.132l-11.906 7.618a6.635 6.635 0 01-6.39.44l-10.37-5.028V22.38l3.041-1.497a9.608 9.608 0 018.888.21l5.49 3.122a1.76 1.76 0 01.566 2.582c-.116.16-.26.287-.414.395l-.123.075a1.725 1.725 0 01-1.659.07l-6.542-3.664-.635 1.134 6.564 3.676c.447.227.924.337 1.395.337.513 0 1.013-.14 1.463-.389l5.503-3.316.014.022 3.244-1.985a1.762 1.762 0 012.378.513c.271.397.367.875.27 1.346zM7.425 31.72h4.23V19.14h-4.23v12.58zm28.482-10.137a1.824 1.824 0 012.445.57l.153.232-5.946 3.584c.02-.29.015-.58-.049-.87a3.048 3.048 0 00-.558-1.197l3.955-2.319zm7.297 1.352a3.058 3.058 0 00-3.548-1.166l-.219-.332a3.123 3.123 0 00-4.187-.976l-4.357 2.555-5.373-3.056a10.912 10.912 0 00-10.099-.242l-2.466 1.214v-3.09h-6.83v15.18h6.83v-2.403l9.812 4.758a7.977 7.977 0 003.356.743 7.956 7.956 0 004.294-1.262l11.905-7.619a3.04 3.04 0 001.35-1.966 3.038 3.038 0 00-.468-2.338z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M44.362 25.946a1.74 1.74 0 01-.736 1.108l-12.18 6.59c-1.903 1.218-6.083 1.502-8.122.557l-10.369-5.028V22.38l3.041-1.497a9.613 9.613 0 018.89.21l5.488 3.122c.143.08.267.183.382.297l.018.06.03-.009c.211.228.37.504.437.815a1.763 1.763 0 01-.299 1.42 1.75 1.75 0 01-2.198.538l-6.54-3.663-.636 1.134 6.564 3.676c.446.227.923.337 1.394.337.38 0 .75-.09 1.101-.228l.005.012 10.986-4.469.094-.047a1.762 1.762 0 012.38.512c.271.398.367.875.27 1.346zM7.425 31.72h4.23V19.14h-4.23v12.58zm29.327-8.997c1.79-.483 2.23.105 2.61.928L32.5 26.441c.101-.437.11-.894.012-1.342a3.032 3.032 0 00-.399-.94l4.64-1.437zm8.416 1.147a3.061 3.061 0 00-4.086-.919l-.495.201-.064-.089c-.788-1.657-2.059-2.15-4.132-1.588l-5.325 1.647c-.02-.012-.037-.029-.057-.04l-5.488-3.122a10.912 10.912 0 00-10.099-.242l-2.467 1.214v-3.09h-6.83v15.18h6.83v-2.403l9.812 4.758c1.01.467 2.386.69 3.815.69 2.05 0 4.204-.458 5.522-1.303l12.181-6.59a3.038 3.038 0 001.35-1.966 3.038 3.038 0 00-.467-2.338z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default HelpingHand;
