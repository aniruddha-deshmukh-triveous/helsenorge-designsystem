import React from 'react';

import { SvgPathProps } from '../Icon';

const BreastRemoval: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M36.826 28.606l-.919.92-2.44-2.44-2.442 2.44-.919-.92 2.44-2.44-2.44-2.44.92-.92 2.44 2.441 2.441-2.442.92.92-2.44 2.441 2.44 2.44zm1.365 4.921l.69 1.09c-.599.38-1.24.7-1.909.95l-.45-1.22a9.24 9.24 0 001.67-.82zm-3.469 1.27l.18 1.28c-.46.07-.93.1-1.4.1-.24 0-.49 0-.73-.02l.09-1.3c.63.05 1.25.02 1.86-.06zm-5.41-.96c.54.29 1.12.52 1.72.69l-.36 1.25a9.462 9.462 0 01-1.98-.8l.62-1.14zm12.89-6.33l1.28.21c-.12.7-.31 1.4-.57 2.06l-1.21-.48c.23-.58.4-1.18.5-1.79zm1.19-3.64c.15.7.23 1.41.23 2.12l-1.3.01c0-.62-.07-1.24-.2-1.85l1.27-.28zm-15.62 8.92l-.84.99c-.54-.46-1.04-.98-1.47-1.54l1.03-.8c.38.49.81.95 1.28 1.35zm12.42-14.35l-.86.98c-.47-.42-.97-.78-1.51-1.08l.63-1.13c.62.34 1.21.76 1.74 1.23zm.65 12.51l1.08.72c-.39.59-.85 1.14-1.36 1.64l-.91-.93c.45-.44.85-.92 1.19-1.43zm-13.4-11.35l-.88-.95c.52-.49 1.09-.92 1.7-1.29l.67 1.11c-.53.32-1.03.7-1.49 1.13zm3.17-1.91l-.42-1.23c.67-.24 1.37-.4 2.08-.48l.15 1.29c-.61.07-1.22.21-1.81.42zm10.438 2.761l-.515-1.087a4.324 4.324 0 002.461-3.89h1.3a5.63 5.63 0 01-2.553 4.695 9.26 9.26 0 01.968 1.681l-1.179.54a9.258 9.258 0 00-.94-1.6l.458-.339zm-6.099-3.12c-.229-.04-.45-.07-.669-.09l.12-1.29c.25.02.51.06.76.1.45.07.9.18 1.33.31l-.38 1.25c-.38-.12-.77-.21-1.16-.28zm-9.62 5.3l-1.2-.5c.28-.66.62-1.29 1.03-1.87l1.07.74c-.36.51-.659 1.06-.9 1.63zm.181 7.23l-1.17.56c-.11-.23-.21-.46-.3-.7-1.49 3.87-5.21 6.46-9.48 6.46-5.62 0-10.19-4.57-10.19-10.19 0-2.14.66-4.17 1.84-5.84 0-.003.002-.004.003-.006a5.631 5.631 0 01-2.512-4.67h1.301c0 1.49.787 2.87 2.035 3.648l.002-.003c.9-.98 1.991-1.8 3.25-2.38v1.47a8.839 8.839 0 00-4.62 7.78c0 4.91 3.99 8.89 8.89 8.89 4.161 0 7.73-2.83 8.661-6.88l1.07.25.6-.14c.14.6.35 1.19.62 1.75zm-.86-3.59l-1.3.03v-.24c0-.57.04-1.13.14-1.69l.03-.2 1.28.24-.03.17c-.08.49-.12.99-.12 1.48v.21zm-13.233.798a.9.9 0 111.8 0 .9.9 0 01-1.8 0zm.903-2.159c1.19 0 2.16.97 2.16 2.16 0 1.19-.97 2.16-2.16 2.16a2.173 2.173 0 01-2.17-2.16c0-1.19.98-2.16 2.17-2.16zm-3.17 2.16a3.17 3.17 0 003.17 3.16 3.166 3.166 0 003.16-3.16c0-1.74-1.42-3.16-3.16-3.16a3.17 3.17 0 00-3.17 3.16z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M27.97 34.842c.61.37 1.27.67 1.95.89l.4-1.24c-.58-.19-1.15-.44-1.68-.76l-.67 1.11zm-3.06-2.95c.4.6.86 1.15 1.36 1.64l.91-.93a8.55 8.55 0 01-1.18-1.43l-1.09.72zm3.31-14.95c-.61.37-1.18.81-1.7 1.3l.89.94c.45-.42.95-.8 1.48-1.12l-.67-1.12zm3.91 17.91l-.1 1.3a8.97 8.97 0 002.14-.08l-.2-1.29c-.6.1-1.22.12-1.84.07zm8.65-5.78l1.22.46c.24-.66.43-1.35.55-2.05l-1.29-.22c-.1.62-.26 1.23-.48 1.81zm-5.03 5.23l.49 1.2c.65-.26 1.29-.6 1.88-1l-.73-1.08c-.52.36-1.07.65-1.64.88zm5.57-9.81c.05.38.08.78.08 1.17 0 .23-.01.46-.03.69l1.3.1a10.167 10.167 0 00-.06-2.13l-1.29.17zm-2.51 7.73l.94.9c.49-.51.92-1.08 1.3-1.68l-1.1-.69c-.33.53-.72 1.02-1.14 1.47zm-14.18-4.49l-1.28.22c0 .03.01.05.02.08l-.15-.03c-1.01 4.37-3.8 6.88-7.66 6.88-4.9 0-8.88-3.99-8.88-8.89 0-2.66.65-6.05 3.61-7.77v-1.47a7.648 7.648 0 00-3.01 2.5c-.002 0-.002.002-.003.003a4.317 4.317 0 01-2.273-3.784h-1.3c0 2.034 1.13 3.907 2.892 4.889l-.007.012c-.8 1.55-1.21 3.44-1.21 5.62 0 5.62 4.57 10.19 10.18 10.19 3.92 0 6.97-2.28 8.42-6.2l1.15-.46c-.22-.58-.4-1.18-.5-1.79zm1.56-7.13l-1.06-.75c-.41.58-.76 1.21-1.04 1.86l1.19.51c.25-.57.56-1.12.91-1.62zm9.81-3.2l.47-1.21c-.59-.23-1.2-.4-1.82-.5l-.25-.04-.18 1.29.21.03c.54.09 1.07.24 1.57.43zm-3.63-.5l-.12-1.3c-.7.07-1.41.22-2.09.45l.41 1.23c.59-.2 1.2-.33 1.8-.38zm7.62 1.7c-.49-.53-1.03-1-1.62-1.4l-.74 1.07c.51.34.98.75 1.4 1.21l.96-.88zm-15.37 5.87c.02-.16.05-.31.09-.47l-1.27-.27c-.04.17-.08.35-.11.53-.08.52-.13 1.05-.15 1.57l1.3.03c.01-.46.06-.93.14-1.39zm16.29-1.8l1.23-.42c-.22-.64-.49-1.25-.82-1.83l-.007-.012a5.62 5.62 0 002.983-4.94h-1.3a4.325 4.325 0 01-2.462 3.892l.514 1.08-.909.53c.31.54.57 1.1.77 1.7zm-27.59 5.295a.9.9 0 100-1.801.9.9 0 000 1.8zm-2.16-.905c0 1.2.97 2.17 2.16 2.17a2.166 2.166 0 000-4.33c-1.19 0-2.16.97-2.16 2.16zm-1 0c0-1.74 1.42-3.16 3.16-3.16 1.74 0 3.16 1.42 3.16 3.16 0 1.75-1.42 3.17-3.16 3.17-1.74 0-3.16-1.42-3.16-3.17zM36.3 28.31l-.92.92-2.44-2.441-2.442 2.44-.919-.92 2.44-2.44-2.44-2.44.92-.92 2.44 2.44 2.441-2.44.92.92-2.442 2.44 2.441 2.44z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default BreastRemoval;
