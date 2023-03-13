import React from 'react';

import { SvgPathProps } from './Icon';

const Inbox: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M14.194 20.023h5.726v-1.2h-5.726v1.2zm23.8 9.245H25.525V19.94a8.464 8.464 0 00-3.785-7.05h6.3v3.212a2.092 2.092 0 00-1.387 1.963 2.097 2.097 0 004.192 0c0-.907-.58-1.672-1.387-1.963v-3.213h1.483a7.059 7.059 0 017.051 7.052v9.328zM23.527 41.547h2.65v-10.86h-2.65v10.86zM10.006 29.269V19.94c0-3.889 3.162-7.051 7.051-7.051 3.887 0 7.052 3.162 7.052 7.05v9.328H10.007zm18.744-12.1c.493 0 .896.401.896.896a.897.897 0 11-.897-.897zm.708-9.582h3.558V6.455H29.46v1.134zm1.483 3.885H29.46V9.006h4.976v-3.97h-6.394v6.436H17.058c-4.67 0-8.47 3.799-8.47 8.469v10.745H22.11v12.279h5.486V30.686h11.815V19.941c0-4.67-3.799-8.47-8.469-8.47z"
    />
  );

  const normalHover = (
    <g>
      <path d="M29.746 18.065a.997.997 0 01-.996.996.997.997 0 01-.996-.996c0-.55.447-.996.996-.996.55 0 .996.447.996.996zm8.307 11.262H25.468V19.94c0-2.993-1.577-5.618-3.938-7.11h9.412c.038 0 .075.006.114.006l-1.914 3.273a1.998 1.998 0 00-2.388 1.956c0 1.1.896 1.996 1.996 1.996a1.998 1.998 0 001.996-1.996c0-.495-.188-.942-.487-1.292L32.466 13c3.19.699 5.587 3.544 5.587 6.94v9.387zM26.237 41.605h-2.77V30.628h2.771v10.977zM9.947 19.94c0-3.92 3.19-7.11 7.111-7.11 3.92 0 7.11 3.19 7.11 7.11v9.387H9.948V19.94zm27.797-8.685L34.571 9.4l.275-.47.358-.61 3.172 1.855-.632 1.08zm-4.596.579l.766-1.311 4.295 2.512 1.945-3.326-5.416-3.168-.872 1.49-2.072 3.542a8.266 8.266 0 00-.852-.043H17.058c-4.638 0-8.41 3.773-8.41 8.41v10.688h13.52v12.278h5.37V30.628h11.814V19.94c0-3.872-2.635-7.134-6.204-8.106z" />
      <path d="M14.195 19.923h5.726v-1h-5.726z" />
    </g>
  );

  return isHovered ? normalHover : normal;
};

export default Inbox;
