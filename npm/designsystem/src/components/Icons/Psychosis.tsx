import React from 'react';

import { SvgPathProps } from './Icon';

const Psychosis: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M20.808 7.363c5.99 0 12.355 4.46 12.429 12.727l2.494 5.365c.31.665.259 1.432-.136 2.051a2.126 2.126 0 01-1.802.988h-.555v.74a6.609 6.609 0 01-5.95 6.568v5.216H12.546v-6.697c0-2.29-.811-3.893-1.749-5.749-1.093-2.163-2.333-4.615-2.333-8.557 0-6.977 5.537-12.652 12.344-12.652zm0 1.3c-6.822 0-11.043 5.893-11.043 11.352 0 3.632 1.114 5.837 2.192 7.97.972 1.921 1.889 3.735 1.889 6.336v5.398h12.141v-5.185h.651a5.306 5.306 0 005.299-5.3v-2.04h1.856a.823.823 0 00.706-.387.824.824 0 00.054-.804l-2.616-5.624v-.144c0-7.516-5.734-11.572-11.129-11.572zm.124 2.647c4.929 0 8.938 4.01 8.938 8.938 0 5.565-4.527 10.093-10.093 10.093v-1c5.014 0 9.093-4.079 9.093-9.093 0-4.377-3.561-7.938-7.938-7.938s-7.937 3.561-7.937 7.938a6.537 6.537 0 006.53 6.531 6.538 6.538 0 006.532-6.53 5.13 5.13 0 00-5.125-5.126 5.13 5.13 0 00-5.125 5.125 3.723 3.723 0 003.719 3.72 3.723 3.723 0 003.719-3.72 2.316 2.316 0 00-2.313-2.313 2.316 2.316 0 00-2.313 2.313.907.907 0 001.813 0h1a1.908 1.908 0 01-1.906 1.906 1.909 1.909 0 01-1.907-1.906 3.317 3.317 0 013.313-3.313 3.316 3.316 0 013.313 3.313 4.724 4.724 0 01-4.72 4.72 4.724 4.724 0 01-4.718-4.72 6.132 6.132 0 016.125-6.125 6.132 6.132 0 016.125 6.125c0 4.153-3.378 7.531-7.531 7.531s-7.532-3.378-7.532-7.53c0-4.929 4.01-8.939 8.938-8.939z" />
  );

  const normalHover = (
    <path d="M20.808 7.363c5.99 0 12.355 4.46 12.429 12.727l2.494 5.365c.31.665.259 1.432-.136 2.051a2.128 2.128 0 01-1.802.988h-.556v.74a6.608 6.608 0 01-5.95 6.568v5.216H12.545v-6.697c0-2.29-.81-3.893-1.748-5.749-1.093-2.163-2.333-4.615-2.333-8.557 0-6.977 5.537-12.652 12.344-12.652zm0 1.3c-6.822 0-11.044 5.893-11.044 11.352 0 3.632 1.115 5.837 2.193 7.97.971 1.921 1.889 3.735 1.889 6.336v5.398h12.141v-5.185h.65c2.923 0 5.3-2.378 5.3-5.3v-2.04h1.856a.823.823 0 00.706-.387.821.821 0 00.053-.804l-2.615-5.624v-.144c0-7.516-5.734-11.572-11.129-11.572zm-.285 2.814c2.386 0 4.63.93 6.32 2.62a10.054 10.054 0 012.953 6.806 10.13 10.13 0 01-2.953 7.467l-.707-.707a9.005 9.005 0 002.66-6.728 9.059 9.059 0 00-2.66-6.13 7.886 7.886 0 00-5.613-2.328 7.886 7.886 0 00-5.613 2.327c-3.095 3.095-3.095 8.131 0 11.226a6.489 6.489 0 004.618 1.915 6.49 6.49 0 004.62-1.915 6.489 6.489 0 001.914-4.618 6.49 6.49 0 00-1.915-4.619 5.093 5.093 0 00-3.624-1.503 5.093 5.093 0 00-3.624 1.503 5.093 5.093 0 00-1.503 3.624c0 1.368.534 2.655 1.503 3.624a3.722 3.722 0 006.35-2.629c0-.993-.388-1.927-1.09-2.63a2.316 2.316 0 00-3.272 0 2.297 2.297 0 00-.677 1.635c0 .617.24 1.198.677 1.635a.927.927 0 001.282 0 .907.907 0 000-1.282l.708-.707a1.909 1.909 0 010 2.696c-.72.721-1.976.721-2.697 0a3.29 3.29 0 01-.97-2.342c0-.884.344-1.716.97-2.342a3.317 3.317 0 014.685 0 4.688 4.688 0 011.384 3.337 4.689 4.689 0 01-1.384 3.336 4.723 4.723 0 01-6.673 0 6.086 6.086 0 01-1.796-4.33c0-1.636.638-3.174 1.796-4.332a6.084 6.084 0 014.331-1.796c1.635 0 3.173.638 4.331 1.796a7.481 7.481 0 012.208 5.326c0 2.01-.784 3.901-2.208 5.325a7.483 7.483 0 01-5.326 2.208 7.482 7.482 0 01-5.325-2.208c-3.485-3.485-3.485-9.155 0-12.64a8.882 8.882 0 016.32-2.62z" />
  );

  return isHovered ? normalHover : normal;
};

export default Psychosis;
