import React from 'react';

import { getIcon, SvgPathProps } from '../Icon';

const HelpSign: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path d="M24 8.142c8.744 0 15.858 7.114 15.858 15.858 0 8.745-7.114 15.859-15.858 15.859-8.745 0-15.859-7.114-15.859-15.86 0-8.743 7.114-15.857 15.86-15.857zm0 1.4C16.027 9.542 9.542 16.027 9.542 24S16.027 38.459 24 38.459c7.972 0 14.458-6.486 14.458-14.46 0-7.972-6.486-14.457-14.458-14.457zm-.314 18.643c.908 0 1.656.771 1.656 1.68 0 .906-.748 1.656-1.656 1.656-.93 0-1.656-.75-1.656-1.657 0-.908.726-1.679 1.656-1.679zm.294-13.248c3.358 0 5.172 2.223 5.172 4.537 0 1.792-.952 3.063-2.268 3.992l-.976.682c-.749.521-1.134 1.27-1.134 2.154 0 .046 0 .16.023.295h-2.269c-.022-.295-.046-.544-.046-.862 0-1.36.522-2.472 1.84-3.425l1.042-.75c.75-.543 1.066-1.2 1.066-1.973 0-1.179-.793-2.29-2.45-2.29-1.679 0-2.563 1.292-2.563 2.585 0 .34.045.772.136 1.022l-2.564-.182a3.903 3.903 0 01-.135-1.044c0-2.268 1.701-4.74 5.126-4.74z" />
  );

  const normalHover = (
    <path d="M24 8.142c8.744 0 15.858 7.114 15.858 15.858 0 8.745-7.114 15.859-15.858 15.859-8.745 0-15.859-7.114-15.859-15.86 0-8.743 7.114-15.857 15.86-15.857zm0 1.4C16.027 9.542 9.542 16.027 9.542 24S16.027 38.459 24 38.459c7.972 0 14.458-6.486 14.458-14.46 0-7.972-6.486-14.457-14.458-14.457zm-.315 18.643c.908 0 1.657.771 1.657 1.68 0 .906-.749 1.656-1.657 1.656-.93 0-1.655-.75-1.655-1.657 0-.908.725-1.679 1.655-1.679zm.295-14.748c3.358 0 5.172 2.223 5.172 4.537 0 1.792-.952 3.063-2.268 3.992l-.976.682c-.749.521-1.134 1.27-1.134 2.154 0 .046 0 .16.023.295h-2.269c-.022-.295-.046-.544-.046-.862 0-1.36.522-2.472 1.838-3.425l1.044-.75c.75-.543 1.066-1.2 1.066-1.973 0-1.179-.793-2.29-2.45-2.29-1.679 0-2.563 1.292-2.563 2.585 0 .34.045.772.135 1.022l-2.563-.182a3.903 3.903 0 01-.135-1.044c0-2.268 1.701-4.74 5.126-4.74z" />
  );

  const xSmall = (
    <path d="M23.98 14.936c-3.425 0-5.127 2.473-5.127 4.742 0 .363.047.725.137 1.043l2.563.182c-.09-.25-.136-.68-.136-1.022 0-1.292.885-2.585 2.563-2.585 1.658 0 2.45 1.111 2.45 2.291 0 .772-.317 1.429-1.065 1.973l-1.044.75c-1.316.953-1.839 2.065-1.839 3.425 0 .318.024.567.047.861h2.267c-.021-.135-.021-.248-.021-.294 0-.884.385-1.633 1.133-2.155l.976-.68c1.317-.93 2.27-2.201 2.27-3.994 0-2.314-1.816-4.537-5.174-4.537M24 38.274C16.13 38.274 9.728 31.87 9.728 24 9.727 16.13 16.13 9.726 24 9.726c7.87 0 14.272 6.403 14.272 14.273 0 7.871-6.403 14.275-14.272 14.275m0-30.317C15.155 7.957 7.957 15.153 7.957 24c0 8.846 7.198 16.044 16.044 16.044s16.042-7.198 16.042-16.044S32.847 7.957 24 7.957m-.315 20.227c-.93 0-1.656.773-1.656 1.679a1.65 1.65 0 001.656 1.657c.907 0 1.656-.749 1.656-1.657 0-.906-.749-1.679-1.656-1.679" />
  );

  const xSmallHover = (
    <path d="M24 7.957c8.846 0 16.043 7.196 16.043 16.042 0 8.846-7.197 16.044-16.043 16.044S7.958 32.845 7.958 23.999 15.154 7.957 24 7.957zm0 1.769c-7.871 0-14.274 6.404-14.274 14.273 0 7.872 6.403 14.275 14.274 14.275 7.87 0 14.273-6.403 14.273-14.275 0-7.87-6.403-14.273-14.273-14.273zm-.315 18.46c.908 0 1.657.77 1.657 1.678 0 .908-.749 1.657-1.657 1.657-.93 0-1.656-.749-1.656-1.657 0-.907.726-1.679 1.656-1.679zm.295-14.64c3.357 0 5.173 2.224 5.173 4.538 0 1.794-.953 3.064-2.27 3.994l-.976.68c-.747.521-1.133 1.272-1.133 2.155 0 .046 0 .16.022.295h-2.267c-.023-.295-.047-.544-.047-.863 0-1.359.523-2.472 1.839-3.424l1.043-.75c.748-.544 1.065-1.202 1.065-1.973 0-1.18-.792-2.29-2.45-2.29-1.678 0-2.562 1.293-2.562 2.585 0 .341.045.772.135 1.022l-2.563-.183a3.915 3.915 0 01-.136-1.043c0-2.268 1.701-4.742 5.127-4.742z" />
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default HelpSign;
