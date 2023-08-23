import React from 'react';

import { getIcon, SvgPathProps } from '../Icons';

const HelpSign: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path d="M18.854 19.678c0-2.268 1.701-4.74 5.126-4.74 3.358 0 5.172 2.222 5.172 4.536 0 1.793-.952 3.064-2.268 3.992l-.976.682c-.749.521-1.134 1.27-1.134 2.154 0 .047 0 .16.023.296h-2.269a46.85 46.85 0 0 0-.01-.139 8.554 8.554 0 0 1-.036-.724c0-1.36.522-2.471 1.84-3.424l1.042-.75c.75-.544 1.066-1.201 1.066-1.974 0-1.178-.793-2.29-2.45-2.29-1.679 0-2.563 1.293-2.563 2.585 0 .34.045.772.136 1.022l-2.564-.181a3.903 3.903 0 0 1-.135-1.044Zm3.176 10.186c0-.908.726-1.678 1.656-1.678.908 0 1.656.77 1.656 1.678 0 .907-.748 1.657-1.656 1.657-.93 0-1.656-.75-1.656-1.657Z" />
  );

  const normalHover = (
    <path d="M18.854 18.178c0-2.268 1.701-4.74 5.126-4.74 3.358 0 5.172 2.223 5.172 4.536 0 1.793-.952 3.064-2.268 3.992l-.976.682c-.749.521-1.134 1.27-1.134 2.154 0 .047 0 .16.023.296h-2.269a46.85 46.85 0 0 0-.01-.139 8.554 8.554 0 0 1-.036-.724c0-1.36.522-2.471 1.838-3.424l1.044-.75c.75-.544 1.066-1.201 1.066-1.974 0-1.178-.793-2.29-2.45-2.29-1.679 0-2.563 1.293-2.563 2.585 0 .34.045.772.135 1.022l-2.563-.181a3.903 3.903 0 0 1-.135-1.044Zm3.176 11.686c0-.908.725-1.678 1.655-1.678.908 0 1.657.77 1.657 1.678 0 .907-.749 1.657-1.657 1.657-.93 0-1.655-.75-1.655-1.657Z" />
  );

  const xSmall = (
    <path d="M23.98 14.937c-3.425 0-5.127 2.473-5.127 4.741 0 .363.047.726.137 1.044l2.563.182c-.09-.25-.136-.681-.136-1.022 0-1.292.885-2.586 2.563-2.586 1.658 0 2.45 1.112 2.45 2.291 0 .772-.317 1.43-1.065 1.974l-1.043.749c-1.317.953-1.84 2.065-1.84 3.425 0 .319.024.567.047.862h2.267c-.021-.135-.021-.25-.021-.295 0-.884.385-1.633 1.133-2.154l.976-.681c1.317-.93 2.27-2.2 2.27-3.993 0-2.314-1.816-4.537-5.174-4.537m-.294 13.248c-.93 0-1.656.773-1.656 1.678a1.65 1.65 0 0 0 1.656 1.657c.907 0 1.656-.748 1.656-1.657 0-.905-.749-1.678-1.656-1.678" />
  );

  const xSmallHover = (
    <path d="M18.853 18.289c0-2.268 1.701-4.742 5.127-4.742 3.357 0 5.173 2.223 5.173 4.537 0 1.794-.953 3.065-2.27 3.994l-.976.681c-.747.52-1.133 1.27-1.133 2.154 0 .046 0 .16.022.295h-2.267a39.324 39.324 0 0 0-.01-.125 8.468 8.468 0 0 1-.037-.737c0-1.36.523-2.472 1.839-3.425l1.043-.75c.748-.543 1.065-1.201 1.065-1.973 0-1.18-.792-2.29-2.45-2.29-1.678 0-2.562 1.293-2.562 2.585 0 .341.045.772.135 1.022l-2.563-.183a3.914 3.914 0 0 1-.136-1.043Zm3.176 11.575c0-.907.726-1.679 1.656-1.679.908 0 1.657.772 1.657 1.68 0 .907-.749 1.656-1.657 1.656-.93 0-1.656-.749-1.656-1.657Z" />
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default HelpSign;