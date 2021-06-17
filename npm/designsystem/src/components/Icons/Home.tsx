import React from 'react';
import { SvgPathProps } from './Icon';

const Home: React.FC<SvgPathProps> = ({ isExtraSmall, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      d="M26.1523,18.7156 C26.1523,20.0546 25.0633,21.1436 23.7233,21.1436 C22.3843,21.1436 21.2953,20.0546 21.2953,18.7156 C21.2953,17.3766 22.3843,16.2866 23.7233,16.2866 C25.0633,16.2866 26.1523,17.3766 26.1523,18.7156 L26.1523,18.7156 Z M19.9953,18.7156 C19.9953,20.7716 21.6683,22.4436 23.7233,22.4436 C25.7793,22.4436 27.4523,20.7716 27.4523,18.7156 C27.4523,16.6596 25.7793,14.9866 23.7233,14.9866 C21.6683,14.9866 19.9953,16.6596 19.9953,18.7156 L19.9953,18.7156 Z M37.7323,41.1346 L28.3103,41.1346 L28.3103,27.9346 L19.1363,27.9346 L19.1363,41.1346 L10.2673,41.1346 L10.2673,21.5486 L24.0003,7.0296 L37.7323,21.5476 L37.7323,41.1346 Z M20.4363,41.1346 L27.0103,41.1346 L27.0103,29.2346 L20.4363,29.2346 L20.4363,41.1346 Z M30.6003,6.3846 L34.2633,6.3846 L34.2633,15.9886 L30.6003,12.1156 L30.6003,6.3846 Z M43.3333,25.5776 L35.5633,17.3626 L35.5633,5.0846 L29.3003,5.0846 L29.3003,10.7416 L24.0003,5.1376 L4.6673,25.5776 L5.6113,26.4706 L8.9673,22.9226 L8.9673,42.4346 L19.1363,42.4346 L28.3103,42.4346 L39.0313,42.4346 L39.0313,22.9216 L42.3883,26.4706 L43.3333,25.5776 Z"
      fill-rule="evenodd"
    ></path>
  );

  const normalHover = (
    <path
      d="M26.1519,18.7156 C26.1519,20.0546 25.0629,21.1436 23.7229,21.1436 C22.3839,21.1436 21.2949,20.0546 21.2949,18.7156 C21.2949,17.3766 22.3839,16.2866 23.7229,16.2866 C25.0629,16.2866 26.1519,17.3766 26.1519,18.7156 L26.1519,18.7156 Z M19.9949,18.7156 C19.9949,20.7716 21.6679,22.4436 23.7229,22.4436 C25.7789,22.4436 27.4519,20.7716 27.4519,18.7156 C27.4519,16.6596 25.7789,14.9866 23.7229,14.9866 C21.6679,14.9866 19.9949,16.6596 19.9949,18.7156 L19.9949,18.7156 Z M37.7319,41.1346 L29.1649,41.1346 L29.1649,27.9346 L29.1469,27.9346 L23.5849,27.9346 L19.1359,27.9346 L19.1359,41.1346 L10.2679,41.1346 L10.2679,21.5476 L23.9999,7.0296 L37.7319,21.5476 L37.7319,41.1346 Z M24.8849,29.2346 L27.8649,29.2346 L27.8649,41.1346 L27.8439,41.1346 L27.8439,41.6546 L24.8849,43.0916 L24.8849,29.2346 Z M30.5999,6.3846 L34.2629,6.3846 L34.2629,15.9886 L30.5999,12.1156 L30.5999,6.3846 Z M43.3329,25.5776 L35.5629,17.3626 L35.5629,5.0846 L29.2999,5.0846 L29.2999,10.7416 L23.9999,5.1376 L4.6669,25.5776 L5.6109,26.4706 L8.9679,22.9216 L8.9679,42.4346 L19.6819,42.4346 L19.6819,42.4336 L20.4359,42.4336 L20.4359,29.2346 L23.5849,29.2346 L23.5849,45.1676 L29.1649,42.4596 L29.1649,42.4346 L39.0309,42.4346 L39.0309,22.9216 L42.3879,26.4706 L43.3329,25.5776 Z"
      fill-rule="evenodd"
    ></path>
  );

  const simplified = (
    <path
      d="M25.9812632,18.7155789 C25.9812632,19.9610526 24.9682105,20.9741053 23.724,20.9741053 C22.4797895,20.9741053 21.4667368,19.9610526 21.4667368,18.7155789 C21.4667368,17.4713684 22.4797895,16.4583158 23.724,16.4583158 C24.9682105,16.4583158 25.9812632,17.4713684 25.9812632,18.7155789 L25.9812632,18.7155789 Z M19.8246316,18.7155789 C19.8246316,20.8667368 21.5741053,22.6149474 23.724,22.6149474 C25.8738947,22.6149474 27.6233684,20.8667368 27.6233684,18.7155789 C27.6233684,16.5656842 25.8738947,14.8162105 23.724,14.8162105 C21.5741053,14.8162105 19.8246316,16.5656842 19.8246316,18.7155789 L19.8246316,18.7155789 Z M37.5606316,40.9635789 L28.4810526,40.9635789 L28.4810526,27.7635789 L18.9656842,27.7635789 L18.9656842,40.9635789 L10.4393684,40.9635789 L10.4393684,21.6157895 L24.0006316,7.27894737 L37.5606316,21.6157895 L37.5606316,40.9635789 Z M20.6077895,40.9635789 L26.8402105,40.9635789 L26.8402105,29.4056842 L20.6077895,29.4056842 L20.6077895,40.9635789 Z M30.7711579,6.55642105 L34.092,6.55642105 L34.092,15.5589474 L30.7711579,12.0486316 L30.7711579,6.55642105 Z M43.4570526,25.4608421 L35.7341053,17.2945263 L35.7341053,4.91431579 L29.1290526,4.91431579 L29.1290526,10.3117895 L24.0006316,4.88905263 L4.54294737,25.4608421 L5.73536842,26.5888421 L8.79726316,23.3526316 L8.79726316,42.6056842 L18.9656842,42.6056842 L28.4810526,42.6056842 L39.2027368,42.6056842 L39.2027368,23.3513684 L42.2646316,26.5888421 L43.4570526,25.4608421 Z"
      fill-rule="evenodd"
    ></path>
  );

  const simplifiedHover = (
    <path
      d="M25.9811368,18.7155789 C25.9811368,19.9610526 24.9680842,20.9741053 23.7238737,20.9741053 C22.4796632,20.9741053 21.4666105,19.9610526 21.4666105,18.7155789 C21.4666105,17.4713684 22.4796632,16.4583158 23.7238737,16.4583158 C24.9680842,16.4583158 25.9811368,17.4713684 25.9811368,18.7155789 L25.9811368,18.7155789 Z M19.8245053,18.7155789 C19.8245053,20.8667368 21.5739789,22.6149474 23.7238737,22.6149474 C25.8737684,22.6149474 27.6232421,20.8667368 27.6232421,18.7155789 C27.6232421,16.5656842 25.8737684,14.8162105 23.7238737,14.8162105 C21.5739789,14.8162105 19.8245053,16.5656842 19.8245053,18.7155789 L19.8245053,18.7155789 Z M37.5605053,40.9635789 L29.3360842,40.9635789 L29.3360842,27.7635789 L29.3348211,27.7635789 L23.4144,27.7635789 L18.9655579,27.7635789 L18.9655579,40.9635789 L10.4392421,40.9635789 L10.4392421,21.6157895 L24.0005053,7.27894737 L37.5605053,21.6157895 L37.5605053,40.9635789 Z M27.6939789,41.5383158 L25.0565053,42.8191579 L25.0565053,29.4056842 L27.6939789,29.4056842 L27.6939789,41.5383158 Z M30.7710316,6.55642105 L34.0918737,6.55642105 L34.0918737,15.5589474 L30.7710316,12.0473684 L30.7710316,6.55642105 Z M43.4569263,25.4608421 L35.7339789,17.2945263 L35.7339789,4.91431579 L29.1289263,4.91431579 L29.1289263,10.3117895 L24.0005053,4.88905263 L4.54282105,25.4608421 L5.73524211,26.5888421 L8.79713684,23.3526316 L8.79713684,42.6056842 L19.6817684,42.6056842 L19.6817684,42.6056842 L20.6076632,42.6056842 L20.6076632,29.4056842 L23.4144,29.4056842 L23.4144,45.4414737 L29.2552421,42.6056842 L39.2026105,42.6056842 L39.2026105,23.3526316 L42.2645053,26.5888421 L43.4569263,25.4608421 Z"
      fill-rule="evenodd"
    ></path>
  );
  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default Home;
