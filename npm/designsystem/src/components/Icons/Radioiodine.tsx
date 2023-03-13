import React from 'react';

import { SvgPathProps } from './Icon';

const Radioiodine: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M6.231 30.884h3.036v-1.301H6.231v1.301zm10.885 10.884h1.3v-3.035h-1.3v3.035zm-5.782-6.03l.919.92-2.146 2.147-.919-.92 2.146-2.147zm27.399-17.322h3.036v-1.301h-3.036v1.301zm-9.149-9.149h1.3V6.231h-1.3v3.036zm7.082 2.995l-.919-.92 2.146-2.147.92.92-2.147 2.147zm-5.391 2.271l-.92.92c-.766-.767-2.098-.767-2.864 0l-.919-.92c1.257-1.256 3.446-1.256 4.703 0zm2.621 8.972l-4.736 4.734-9.392-9.391 4.734-4.736a6.65 6.65 0 019.394 0 6.65 6.65 0 010 9.393zm-10.391 10.39a6.592 6.592 0 01-4.696 1.936 6.594 6.594 0 01-4.697-1.936 6.65 6.65 0 010-9.392l4.736-4.736 9.392 9.392-4.735 4.736zm.078-20.703l-10.39 10.391c-3.096 3.097-3.096 8.135 0 11.231a7.885 7.885 0 005.616 2.318 7.881 7.881 0 005.615-2.318l10.39-10.389c3.097-3.097 3.097-8.136 0-11.233-3.096-3.095-8.134-3.095-11.231 0z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M8.32 28.316l-2.992-.509.218-1.28 2.993.508-.218 1.281zm6.424 9.054l1.28.218-.508 2.994-1.281-.219.509-2.993zm-5.198-3.92l.752 1.06-2.476 1.755-.752-1.06 2.476-1.756zm33.126-13.258l-.218 1.281-2.993-.509.218-1.28 2.993.508zm-9.416-9.563l-1.281-.219.509-2.992 1.28.218-.508 2.993zm7.674 2.165l-2.476 1.756-.752-1.06 2.476-1.757.752 1.061zm-8.172 3.092l-1.06.752a2.027 2.027 0 00-2.824-.48l-.752-1.06a3.33 3.33 0 014.636.788zm3.776 4.98a6.586 6.586 0 01-2.696 4.304l-5.462 3.875-7.685-10.834 5.462-3.874a6.594 6.594 0 014.954-1.123 6.592 6.592 0 014.306 2.697 6.593 6.593 0 011.12 4.954zM21.853 33.67a6.645 6.645 0 01-9.26-1.574 6.65 6.65 0 011.575-9.26l5.463-3.875 7.685 10.834-5.463 3.875zm9.472-21.738a7.871 7.871 0 00-5.924 1.343l-11.985 8.501C9.844 24.31 9 29.278 11.533 32.85a7.937 7.937 0 006.489 3.344 7.897 7.897 0 004.584-1.46L34.59 26.23a7.886 7.886 0 003.225-5.148 7.88 7.88 0 00-1.343-5.924 7.885 7.885 0 00-5.148-3.226z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default Radioiodine;
