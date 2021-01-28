import React from 'react';
import { SvgPathProps } from './Icon';

const Receipt: React.FC<SvgPathProps> = ({ isExtraSmall, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M34.189 31.231h2.807v-1.3h-2.807v1.3zm-11.828 0h9.872v-1.3h-9.872v1.3zm11.828-4.41h2.807v-1.3h-2.807v1.3zm-11.828 0h9.872v-1.3h-9.872v1.3zm11.828-4.409h2.807v-1.3h-2.807v1.3zm-11.828 0h9.872v-1.3h-9.872v1.3zm11.828-4.411h2.807v-1.3h-2.807v1.3zm-11.828 0h9.872v-1.3h-9.872v1.3zm11.828-4.409h2.807v-1.3h-2.807v1.3zm-11.828 0h9.872v-1.3h-9.872v1.3zm17.097 24.486l-2.891 2.805-3.031-3.031a.65.65 0 00-.92 0l-2.991 2.991-2.942-2.941a.65.65 0 00-.919 0l-2.908 2.908-2.685-2.684V12.019a6.46 6.46 0 00-2.58-5.165h16.702a5.17 5.17 0 015.165 5.165v26.059zm-20.586-22.15H8.542v-3.909a5.17 5.17 0 015.165-5.165 5.17 5.17 0 015.165 5.165v3.909zM34.293 5.554H13.707a6.471 6.471 0 00-6.464 6.465v4.559c0 .359.291.65.65.65h10.979v21.167c0 .172.068.338.19.459l3.334 3.335a.65.65 0 00.919 0l2.909-2.908 2.941 2.941a.65.65 0 00.919 0l2.992-2.991 3.025 3.024a.647.647 0 00.912.007l3.548-3.442a.652.652 0 00.197-.467V12.019c0-3.565-2.9-6.465-6.465-6.465z" />
  );

  const normalHover = (
    <path d="M34.189 32.432h2.807v-1.3h-2.807v1.3zm-11.829 0h9.872v-1.3H22.36v1.3zm11.829-4.411h2.807v-1.3h-2.807v1.3zm-11.829 0h9.872v-1.3H22.36v1.3zm11.829-4.41h2.807v-1.3h-2.807v1.3zm-11.829 0h9.872v-1.3H22.36v1.3zm11.829-4.409h2.807v-1.3h-2.807v1.3zm-11.829 0h9.872v-1.3H22.36v1.3zm11.829-4.411h2.807v-1.3h-2.807v1.3zm-11.829 0h9.872v-1.3H22.36v1.3zm17.098 24.487l-2.891 2.805-3.032-3.031a.647.647 0 00-.919 0l-2.991 2.991-2.942-2.941a.65.65 0 00-.919 0l-2.909 2.907-2.684-2.684V12.019a6.46 6.46 0 00-2.58-5.165h16.702a5.17 5.17 0 015.165 5.165v27.259zM18.871 13.465H8.542v-1.446a5.17 5.17 0 015.165-5.165 5.17 5.17 0 015.164 5.165v1.446zm15.422-7.911H13.707a6.473 6.473 0 00-6.465 6.465v2.096c0 .359.291.65.651.65h10.978v24.829c0 .173.068.338.191.46l3.334 3.334a.65.65 0 00.919 0l2.909-2.907 2.941 2.941a.65.65 0 00.919 0l2.992-2.991 3.025 3.024a.648.648 0 00.912.007l3.548-3.443a.648.648 0 00.197-.466V12.019a6.473 6.473 0 00-6.465-6.465z" />
  );

  return isHovered ? normalHover : normal;
};

export default Receipt;
