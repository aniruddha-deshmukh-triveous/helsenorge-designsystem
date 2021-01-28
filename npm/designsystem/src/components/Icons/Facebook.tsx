import React from 'react';
import { SvgPathProps } from './Icon';

const Facebook: React.FC<SvgPathProps> = ({ isExtraSmall, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M40.179 38.445c0 .981-.751 1.733-1.733 1.733h-8.667v-10.4h5.777v-6.934h-5.777v-2.889c0-.347.23-.577.577-.577h5.779v-6.934H29.72c-3.872.346-6.876 3.64-6.876 7.511v2.89h-4.623v6.933h4.623v10.4H9.555a1.703 1.703 0 01-1.733-1.733V9.555c0-.983.75-1.734 1.733-1.734h28.89c.983 0 1.734.751 1.734 1.733v28.891zm-16.18 1.733V28.622h-4.621V24H24v-4.045c0-3.294 2.543-6.068 5.779-6.357h5.2v4.623h-4.623c-.982 0-1.733.751-1.733 1.734V24H34.4v4.622h-5.778v11.556H24zM41.336 9.554a2.861 2.861 0 00-2.89-2.889H9.556a2.86 2.86 0 00-2.89 2.89v28.89a2.86 2.86 0 002.89 2.89h28.891a2.861 2.861 0 002.889-2.89V9.555z" />
  );

  const normalHover = (
    <path d="M38.445 40.179h-8.667V27.655h5.778V20.72h-5.778v-2.89c0-.345.231-.577.578-.577h5.778V10.32H29.72c-3.87.346-6.876 3.639-6.876 7.51v2.89h-4.622v6.934h4.622v12.524H9.555a1.703 1.703 0 01-1.734-1.733V9.555c0-.982.751-1.733 1.734-1.733h28.89c.982 0 1.733.75 1.733 1.733v28.89c0 .982-.75 1.734-1.733 1.734zm-19.067-13.68v-4.623H24V17.83c0-3.293 2.542-6.066 5.778-6.355h5.2v4.623h-4.622c-.982 0-1.734.75-1.734 1.732v4.045h5.78v4.623h-5.78v13.657H24V26.499h-4.622zM38.445 6.665H9.555a2.862 2.862 0 00-2.889 2.89v28.89a2.86 2.86 0 002.89 2.889h28.89a2.86 2.86 0 002.888-2.888V9.555a2.862 2.862 0 00-2.889-2.89z" />
  );

  return isHovered ? normalHover : normal;
};

export default Facebook;
