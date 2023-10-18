import React from 'react';

import { SvgPathProps } from '../Icon';

const Epilepsy: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path d="M20.808 7.363c5.99 0 12.355 4.46 12.428 12.727l2.495 5.365c.31.665.26 1.432-.136 2.051a2.129 2.129 0 01-1.803.988h-.555v.74a6.608 6.608 0 01-5.95 6.568v5.216H12.547v-6.697c0-2.29-.81-3.893-1.748-5.749-1.094-2.163-2.334-4.615-2.334-8.557 0-6.977 5.537-12.652 12.344-12.652zm0 1.3c-6.822 0-11.043 5.893-11.043 11.352 0 3.632 1.114 5.838 2.192 7.97.971 1.921 1.888 3.736 1.888 6.336v5.398h12.143v-5.185h.65c2.922 0 5.3-2.378 5.3-5.3v-2.04h1.854c.292 0 .55-.14.707-.387a.824.824 0 00.053-.804l-2.614-5.624v-.144c0-7.516-5.735-11.572-11.13-11.572zm3.73 5.113l-3.268 5.448h3.266L18.525 29.27l-.833-.309.06-.47 1.242-6.04h-3.301l2.997-8.675h5.849zm-1.765 1h-3.371l-2.305 6.675h3.124l-.961 4.675 3.516-5.902h-3.272l3.269-5.448z" />
  );

  const normalHover = (
    <path d="M20.808 7.363c5.99 0 12.355 4.46 12.428 12.727l2.495 5.365c.31.665.258 1.432-.136 2.051a2.129 2.129 0 01-1.803.988h-.555v.74a6.608 6.608 0 01-5.95 6.568v5.216H12.547v-6.697c0-2.29-.81-3.893-1.748-5.749-1.095-2.163-2.334-4.615-2.334-8.557 0-6.977 5.537-12.652 12.344-12.652zm0 1.3c-6.822 0-11.043 5.893-11.043 11.352 0 3.632 1.114 5.838 2.192 7.97.971 1.921 1.888 3.736 1.888 6.336v5.398h12.143v-5.185h.65c2.922 0 5.3-2.378 5.3-5.3v-2.04h1.854c.292 0 .55-.14.707-.387a.824.824 0 00.053-.804l-2.614-5.624v-.144c0-7.516-5.735-11.572-11.13-11.572zm2.987 6.353l-2.525 4.208h3.224l-6.185 11.371-.832-.309.06-.469 1.462-7.366h-3.306l2.548-7.376 5.554-.059zm-1.777 1.02l-3.062.031-1.86 5.384h3.12l-1.127 5.681 3.729-6.908h-3.314l2.514-4.189z" />
  );

  return isHovered ? normalHover : normal;
};

export default Epilepsy;
