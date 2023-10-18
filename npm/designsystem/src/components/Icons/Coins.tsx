import React from 'react';

import { SvgPathProps } from '../Icon';

const Coins: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path
      fillRule="evenodd"
      d="M9.915 12.55c-1.089.544-1.515 1.177-1.515 1.68 0 .505.426 1.137 1.515 1.681 1.05.525 2.547.869 4.235.869 1.688 0 3.185-.343 4.235-.868 1.089-.545 1.515-1.177 1.515-1.681 0-.505-.426-1.138-1.515-1.682-1.05-.526-2.547-.87-4.235-.87-1.688 0-3.185.345-4.235.87ZM19.9 16.5a5.858 5.858 0 0 1-.934.575c-1.266.633-2.97 1.006-4.816 1.006-1.846 0-3.55-.373-4.816-1.006A5.864 5.864 0 0 1 8.4 16.5v2c0 .504.426 1.136 1.515 1.68 1.05.526 2.547.87 4.235.87 1.688 0 3.184-.344 4.235-.87 1.089-.544 1.515-1.176 1.515-1.68v-2Zm1.3-2.268v4.266c0 .036 0 .072-.002.108a.668.668 0 0 1 .002.057v4.267c0 1.262-1.007 2.23-2.234 2.844-1.266.633-2.97 1.006-4.816 1.006-1.846 0-3.55-.373-4.816-1.006a5.865 5.865 0 0 1-.934-.576v1.998c0 .505.426 1.137 1.515 1.681 1.05.525 2.547.869 4.235.869a.65.65 0 1 1 0 1.3c-1.846 0-3.55-.373-4.816-1.006a5.865 5.865 0 0 1-.934-.576v1.998c0 .505.426 1.137 1.515 1.681 1.05.525 2.547.869 4.235.869a.65.65 0 0 1 0 1.3c-1.846 0-3.55-.373-4.816-1.006-1.227-.614-2.234-1.582-2.234-2.844v-12.8c0-.018 0-.037.002-.056a2.352 2.352 0 0 1-.002-.108v-4.267c0-1.262 1.006-2.23 2.234-2.844 1.266-.633 2.97-1.006 4.816-1.006 1.846 0 3.55.373 4.816 1.006 1.227.614 2.234 1.582 2.234 2.845ZM8.4 20.765v2.164c0 .505.426 1.137 1.515 1.681 1.05.525 2.547.869 4.235.869 1.688 0 3.184-.344 4.235-.869 1.089-.544 1.515-1.177 1.515-1.681v-2.164c-.285.218-.601.41-.934.576-1.266.633-2.97 1.006-4.816 1.006-1.846 0-3.55-.373-4.816-1.006a5.872 5.872 0 0 1-.934-.576Zm20.19-5.112c1.267-.633 2.97-1.006 4.817-1.006 1.846 0 3.55.373 4.816 1.006 1.227.613 2.234 1.581 2.234 2.844l-.003.108a.672.672 0 0 1 .003.057v12.799c0 1.262-1.007 2.23-2.234 2.844-1.266.633-2.97 1.006-4.816 1.006a.65.65 0 0 1 0-1.3c1.688 0 3.184-.344 4.235-.869 1.089-.544 1.515-1.176 1.515-1.681v-1.998a5.86 5.86 0 0 1-.934.576c-1.266.633-2.97 1.006-4.816 1.006a.65.65 0 0 1 0-1.3c1.688 0 3.184-.344 4.235-.869 1.089-.544 1.515-1.176 1.515-1.681v-1.998a5.86 5.86 0 0 1-.934.576c-1.266.633-2.97 1.006-4.816 1.006-1.846 0-3.55-.373-4.816-1.006-1.228-.614-2.234-1.582-2.234-2.844v-4.267c0-.02 0-.038.002-.057a2.41 2.41 0 0 1-.002-.108c0-1.263 1.006-2.23 2.234-2.844Zm-.933 5.112v2.164c0 .505.426 1.137 1.515 1.681 1.05.525 2.547.869 4.235.869 1.688 0 3.184-.344 4.235-.869 1.089-.544 1.515-1.177 1.515-1.681v-2.164c-.285.217-.601.41-.934.576-1.266.633-2.97 1.006-4.816 1.006-1.846 0-3.55-.373-4.816-1.006a5.862 5.862 0 0 1-.934-.576Zm1.515-3.95c-1.089.545-1.515 1.177-1.515 1.682 0 .505.426 1.137 1.515 1.681 1.05.526 2.547.869 4.235.869 1.688 0 3.184-.343 4.235-.869 1.089-.544 1.515-1.176 1.515-1.681 0-.505-.426-1.137-1.515-1.681-1.05-.526-2.547-.869-4.235-.869-1.688 0-3.185.343-4.235.869Zm-9.657 10.832C18.426 28.192 18 28.825 18 29.33c0 .505.426 1.137 1.515 1.682 1.05.525 2.547.869 4.235.869 1.688 0 3.184-.344 4.235-.87 1.089-.544 1.515-1.176 1.515-1.68 0-.505-.426-1.137-1.515-1.682-1.05-.525-2.547-.868-4.235-.868-1.688 0-3.185.343-4.235.868Zm9.985 3.95c-.285.217-.601.41-.934.575-1.266.634-2.97 1.007-4.816 1.007-1.846 0-3.55-.373-4.816-1.007a5.86 5.86 0 0 1-.934-.576v1.999c0 .505.426 1.137 1.515 1.681 1.05.525 2.547.869 4.235.869 1.688 0 3.184-.344 4.235-.869 1.089-.544 1.515-1.176 1.515-1.681v-1.998Zm0 4.266c-.285.217-.601.41-.934.576-1.266.633-2.97 1.006-4.816 1.006-1.846 0-3.55-.373-4.816-1.006a5.86 5.86 0 0 1-.934-.576v1.998c0 .505.426 1.137 1.515 1.681 1.05.526 2.547.869 4.235.869 1.688 0 3.184-.343 4.235-.868 1.089-.545 1.515-1.177 1.515-1.682v-1.998Zm-12.8-6.535c0-1.262 1.007-2.23 2.234-2.844 1.266-.633 2.97-1.005 4.816-1.005 1.846 0 3.55.372 4.816 1.005 1.227.614 2.234 1.582 2.234 2.844v8.533c0 1.263-1.007 2.23-2.234 2.844-1.266.633-2.97 1.006-4.816 1.006-1.846 0-3.55-.373-4.816-1.006-1.227-.613-2.234-1.581-2.234-2.844v-8.533Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M9.915 4.8C8.826 5.344 8.4 5.977 8.4 6.48c0 .505.426 1.137 1.515 1.681 1.05.525 2.547.869 4.235.869 1.688 0 3.185-.344 4.235-.869 1.089-.544 1.515-1.176 1.515-1.68 0-.505-.426-1.138-1.515-1.682-1.05-.525-2.547-.87-4.235-.87-1.688 0-3.185.345-4.235.87ZM19.9 8.75a5.858 5.858 0 0 1-.934.575c-1.266.633-2.97 1.006-4.816 1.006-1.846 0-3.55-.373-4.816-1.006A5.863 5.863 0 0 1 8.4 8.75v2c0 .504.426 1.136 1.515 1.68 1.05.526 2.547.87 4.235.87 1.688 0 3.184-.344 4.235-.87 1.089-.544 1.515-1.176 1.515-1.68v-2Zm1.3-2.269v4.267c0 1.263-1.007 2.23-2.234 2.844-1.266.633-2.97 1.006-4.816 1.006-1.846 0-3.55-.373-4.816-1.006C8.107 12.98 7.1 12.011 7.1 10.748V6.481c0-1.262 1.006-2.23 2.234-2.844 1.266-.633 2.97-1.006 4.816-1.006 1.846 0 3.55.373 4.816 1.006 1.227.614 2.234 1.582 2.234 2.844ZM9.915 16.817C8.826 17.36 8.4 17.993 8.4 18.498c0 .505.426 1.137 1.515 1.681 1.05.526 2.547.869 4.235.869 1.688 0 3.185-.343 4.235-.869 1.089-.544 1.515-1.176 1.515-1.681 0-.505-.426-1.137-1.515-1.681-1.05-.526-2.547-.869-4.235-.869-1.688 0-3.185.343-4.235.869Zm-.581-1.163c1.266-.633 2.97-1.006 4.816-1.006 1.846 0 3.55.373 4.816 1.006 1.227.613 2.234 1.581 2.234 2.844 0 .036 0 .072-.002.108a.672.672 0 0 1 .002.057v4.267c0 1.262-1.007 2.23-2.234 2.844-1.266.633-2.97 1.006-4.816 1.006-1.846 0-3.55-.373-4.816-1.006a5.865 5.865 0 0 1-.934-.576v1.998c0 .505.426 1.137 1.515 1.681 1.05.525 2.547.869 4.235.869a.65.65 0 1 1 0 1.3c-1.846 0-3.55-.373-4.816-1.006a5.865 5.865 0 0 1-.934-.576v1.998c0 .505.426 1.137 1.515 1.681 1.05.525 2.547.869 4.235.869a.65.65 0 0 1 0 1.3c-1.846 0-3.55-.373-4.816-1.006-1.227-.614-2.234-1.582-2.234-2.844v-12.8c0-.018 0-.037.002-.056a2.352 2.352 0 0 1-.002-.108c0-1.263 1.007-2.23 2.234-2.844ZM8.4 20.766v2.164c0 .505.426 1.137 1.515 1.681 1.05.525 2.547.869 4.235.869 1.688 0 3.184-.344 4.235-.869 1.089-.544 1.515-1.177 1.515-1.681v-2.164c-.285.217-.601.41-.934.576-1.266.633-2.97 1.006-4.816 1.006-1.846 0-3.55-.373-4.816-1.006a5.857 5.857 0 0 1-.934-.576Zm20.19-5.112c1.267-.633 2.97-1.006 4.817-1.006 1.846 0 3.55.373 4.816 1.006 1.227.613 2.234 1.581 2.234 2.844l-.003.108a.672.672 0 0 1 .003.057v12.799c0 1.262-1.007 2.23-2.234 2.844-1.266.633-2.97 1.006-4.816 1.006a.65.65 0 0 1 0-1.3c1.688 0 3.184-.344 4.235-.869 1.089-.544 1.515-1.176 1.515-1.681v-1.998a5.86 5.86 0 0 1-.934.576c-1.266.633-2.97 1.006-4.816 1.006a.65.65 0 0 1 0-1.3c1.688 0 3.184-.344 4.235-.869 1.089-.544 1.515-1.176 1.515-1.681v-1.998a5.86 5.86 0 0 1-.934.576c-1.266.633-2.97 1.006-4.816 1.006-1.846 0-3.55-.373-4.816-1.006-1.228-.614-2.234-1.582-2.234-2.844v-4.267c0-.02 0-.038.002-.057a2.41 2.41 0 0 1-.002-.108c0-1.263 1.006-2.23 2.234-2.844Zm-.933 5.112v2.164c0 .505.426 1.137 1.515 1.681 1.05.525 2.547.869 4.235.869 1.688 0 3.184-.344 4.235-.869 1.089-.544 1.515-1.177 1.515-1.681v-2.164c-.285.217-.601.41-.934.576-1.266.633-2.97 1.006-4.816 1.006-1.846 0-3.55-.373-4.816-1.006a5.862 5.862 0 0 1-.934-.576Zm1.515-3.95c-1.089.545-1.515 1.177-1.515 1.682 0 .505.426 1.137 1.515 1.681 1.05.526 2.547.869 4.235.869 1.688 0 3.184-.343 4.235-.869 1.089-.544 1.515-1.176 1.515-1.681 0-.505-.426-1.137-1.515-1.681-1.05-.526-2.547-.869-4.235-.869-1.688 0-3.185.343-4.235.869Zm-9.657 10.832C18.426 28.192 18 28.825 18 29.33c0 .505.426 1.137 1.515 1.682 1.05.525 2.547.869 4.235.869 1.688 0 3.184-.344 4.235-.87 1.089-.544 1.515-1.176 1.515-1.68 0-.505-.426-1.137-1.515-1.682-1.05-.525-2.547-.868-4.235-.868-1.688 0-3.185.343-4.235.868Zm9.985 3.95c-.285.217-.601.41-.934.575-1.266.634-2.97 1.007-4.816 1.007-1.846 0-3.55-.373-4.816-1.007a5.86 5.86 0 0 1-.934-.576v1.999c0 .505.426 1.137 1.515 1.681 1.05.525 2.547.869 4.235.869 1.688 0 3.184-.344 4.235-.869 1.089-.544 1.515-1.176 1.515-1.681v-1.998Zm0 4.266c-.285.217-.601.41-.934.576-1.266.633-2.97 1.006-4.816 1.006-1.846 0-3.55-.373-4.816-1.006a5.86 5.86 0 0 1-.934-.576v1.998c0 .505.426 1.137 1.515 1.681 1.05.526 2.547.869 4.235.869 1.688 0 3.184-.343 4.235-.868 1.089-.545 1.515-1.177 1.515-1.682v-1.998Zm-12.8-6.535c0-1.262 1.007-2.23 2.234-2.844 1.266-.633 2.97-1.005 4.816-1.005 1.846 0 3.55.372 4.816 1.005 1.227.614 2.234 1.582 2.234 2.844v8.533c0 1.263-1.007 2.23-2.234 2.844-1.266.633-2.97 1.006-4.816 1.006-1.846 0-3.55-.373-4.816-1.006-1.227-.613-2.234-1.581-2.234-2.844v-8.533Z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default Coins;
