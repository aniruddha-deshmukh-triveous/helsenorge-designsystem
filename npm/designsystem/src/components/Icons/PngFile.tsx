import React from 'react';
import { SvgPathProps } from './Icon';

const PngFile: React.FC<SvgPathProps> = ({ isExtraSmall, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule="evenodd"
      d="M25.533 22.611l2.162-2.218 3.316 4.117h-3.876l-1.602-1.899zm-8.544 1.9l4.418-5.239 4.42 5.238h-8.838zm10.776-5.624l-2.88 2.956-3.478-4.123-6.57 7.79H33.1l-5.335-6.623zM12 39.1h24V8.9H12v30.2zm-1.3 1.3h26.6V7.6H10.7v32.8zm17.057-10.935c.2-.243.466-.365.804-.365.328 0 .571.076.727.23.157.151.262.367.314.647h.785c-.068-.477-.249-.849-.54-1.116-.293-.267-.726-.4-1.299-.4-.565 0-1.02.18-1.367.538-.345.36-.518.833-.518 1.422v.998c0 .59.182 1.063.55 1.421.364.36.841.54 1.43.54.462 0 .835-.07 1.12-.213.285-.14.493-.3.624-.48v-1.794h-1.75v.598h.952v.96a.881.881 0 01-.338.206 1.77 1.77 0 01-.608.085c-.359 0-.646-.122-.862-.366-.216-.244-.323-.563-.323-.957v-1.005c0-.389.1-.706.3-.949zm-2.346-13.963a.906.906 0 110 1.813.906.906 0 010-1.813zm0 2.812a1.908 1.908 0 001.906-1.906 1.908 1.908 0 00-1.906-1.906 1.908 1.908 0 00-1.906 1.906c0 1.051.855 1.906 1.906 1.906zm-.449 13.713l-.01.002-2.13-3.5h-.799v4.781h.798v-3.5l.01-.004 2.131 3.504h.795v-4.78h-.795v3.497zm-4.743-1.403c-.146.155-.37.233-.672.233h-1.07V29.17h1.07c.301 0 .526.08.672.24.145.16.217.364.217.611s-.072.45-.217.604zm-.672-2.095H17.68v4.781h.797v-1.812h1.071c.538 0 .954-.134 1.248-.399.293-.266.44-.628.44-1.086 0-.453-.147-.814-.44-1.082-.294-.268-.71-.402-1.248-.402z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M25.412 13.502a.907.907 0 010 1.812.906.906 0 010-1.812zm0 2.813a1.908 1.908 0 001.906-1.907 1.908 1.908 0 00-1.906-1.906 1.908 1.908 0 00-1.906 1.906c0 1.052.855 1.907 1.906 1.907zm.122 6.296l2.162-2.218 3.316 4.117h-3.876l-1.602-1.899zM16.99 24.51l4.418-5.238 4.419 5.238H16.99zm10.776-5.623l-2.88 2.956-3.478-4.122-6.57 7.789H33.1l-5.335-6.623zM12 39.1H36V8.9H12v30.2zM10.7 40.4h26.6V7.6H10.7v32.8zm9.52-9.775c-.146.155-.37.232-.672.232h-1.071v-1.688h1.07c.303 0 .527.081.673.241a.871.871 0 01.217.61.852.852 0 01-.217.605zm-.672-2.096H17.68v4.782h.797v-1.813h1.07c.539 0 .955-.133 1.249-.399.293-.266.439-.628.439-1.085 0-.453-.146-.814-.44-1.082-.293-.268-.71-.403-1.247-.403zm5.415 3.498l-.01.003-2.131-3.501h-.798v4.782h.798V29.81l.01-.003 2.13 3.504h.796v-4.782h-.795v3.498zm2.795-2.562c.199-.243.467-.364.804-.364.329 0 .57.076.727.228.157.152.262.368.314.649h.785c-.068-.477-.248-.85-.54-1.117-.292-.267-.726-.401-1.3-.401-.564 0-1.02.18-1.365.539-.346.359-.52.833-.52 1.422v.998c0 .589.184 1.063.55 1.422.365.359.843.538 1.43.538.463 0 .836-.07 1.12-.211.286-.142.494-.302.625-.481v-1.793h-1.75v.597h.952v.959a.873.873 0 01-.338.207 1.768 1.768 0 01-.608.086c-.36 0-.646-.122-.862-.366-.216-.245-.323-.564-.323-.958v-1.004c0-.39.099-.706.299-.95z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default PngFile;
