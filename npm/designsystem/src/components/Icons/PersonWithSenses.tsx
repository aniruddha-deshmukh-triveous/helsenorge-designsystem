import React from 'react';

import { SvgPathProps } from '../Icon';

const PersonWithSenses: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <g>
      <path d="M28.405 20.32a1.021 1.021 0 10.002 2.042 1.021 1.021 0 00-.002-2.043" />
      <path d="M36.302 26.616a.823.823 0 01-.706.387h-1.857v2.04c0 2.923-2.376 5.3-5.3 5.3h-.65v5.184h-12.14V34.13c0-2.6-.918-4.414-1.89-6.335-1.077-2.133-2.191-4.339-2.191-7.97 0-5.46 4.22-11.353 11.043-11.353 5.395 0 11.128 4.056 11.128 11.573v.143l2.617 5.624a.824.824 0 01-.054.804m1.232-1.353L35.039 19.9C34.965 11.632 28.6 7.172 22.61 7.172c-6.806 0-12.343 5.675-12.343 12.652 0 3.942 1.239 6.394 2.333 8.557.938 1.856 1.748 3.46 1.748 5.75v6.697H29.09v-5.217a6.609 6.609 0 005.95-6.568v-.74h.556a2.13 2.13 0 001.802-.989 2.126 2.126 0 00.135-2.05" />
      <path d="M22.928 11.961v-1.3c-5.326 0-9.66 4.332-9.66 9.658h1.3c0-4.609 3.75-8.358 8.36-8.358" />
      <path d="M16.039 20.307h1.3a5.615 5.615 0 015.61-5.61v-1.3c-3.81 0-6.91 3.1-6.91 6.91" />
      <path d="M18.959 20.32h1.3a2.68 2.68 0 012.679-2.68v-1.3a3.984 3.984 0 00-3.98 3.98" />
    </g>
  );

  const normalHover = (
    <g>
      <path d="M29.426 21.34a1.02 1.02 0 11-2.04.001 1.02 1.02 0 012.04-.002" />
      <path d="M15.648 39.528H27.79v-5.185h.65a5.305 5.305 0 005.298-5.3v-2.04h1.857a.823.823 0 00.706-.387.821.821 0 00.053-.803l-2.616-5.624v-.144c0-7.517-5.733-11.573-11.128-11.573-6.821 0-11.043 5.893-11.043 11.352 0 3.632 1.114 5.838 2.192 7.971.97 1.92 1.889 3.734 1.889 6.335v5.397zm13.442 1.3H14.346V34.13c0-2.29-.809-3.893-1.748-5.749-1.094-2.164-2.333-4.615-2.333-8.557 0-6.977 5.537-12.652 12.345-12.652 5.99 0 12.355 4.46 12.428 12.727l2.496 5.364a2.126 2.126 0 01-.137 2.051 2.128 2.128 0 01-1.802.99h-.555v.74a6.609 6.609 0 01-5.95 6.567v5.217z" />
      <path d="M14.955 17.728l-1.234-.408a9.595 9.595 0 014.827-5.6 9.598 9.598 0 017.373-.544l-.408 1.235a8.304 8.304 0 00-6.38.47 8.304 8.304 0 00-4.178 4.847" />
      <path d="M17.59 18.584l-1.233-.408a6.86 6.86 0 013.453-4.005 6.854 6.854 0 015.274-.39l-.408 1.234a5.583 5.583 0 00-4.281.316 5.574 5.574 0 00-2.804 3.253" />
      <path d="M20.36 19.512l-1.235-.408a3.98 3.98 0 015.026-2.531l-.408 1.234a2.682 2.682 0 00-3.384 1.705" />
    </g>
  );

  return isHovered ? normalHover : normal;
};

export default PersonWithSenses;
