import React from 'react';
import {SvgPathProps} from './Icon';

const Avatar: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M26.682 15.15a.503.503 0 10-.001-1.004.503.503 0 00.001 1.005zm-5.293 0a.503.503 0 10-.001-1.004.503.503 0 00.001 1.005zm13.247 25.526h-3.225v-6.947h-.899v6.947H17.488v-6.947h-.9v6.947h-3.224v-8.461c0-3.813 2.5-7.226 6.111-8.39 2.795 1.394 6.254 1.394 9.05 0 3.611 1.164 6.111 4.577 6.111 8.39v8.46zm-5.993-18.173l-.253-.073-.233.124c-2.543 1.354-5.77 1.354-8.314 0l-.233-.124-.254.073c-4.294 1.246-7.293 5.239-7.293 9.712v9.76h23.873v-9.76c0-4.473-2.999-8.466-7.293-9.712zM16.157 12.326h.261v1.59h-.26a.797.797 0 010-1.591zm1.561 0h.728a4.034 4.034 0 003.542-2.108 4.086 4.086 0 003.573 2.108h4.72v2.018a6.09 6.09 0 01-6.082 6.083h-.398a6.09 6.09 0 01-6.083-6.083v-2.018zm0-1.285a6.09 6.09 0 016.083-6.082h.398a6.088 6.088 0 016.082 6.082v.285h-4.72a3.089 3.089 0 01-3.085-3.085v-.213h-1v.267a3.034 3.034 0 01-3.03 3.03h-.728v-.284zm13.863 1.285h.262a.797.797 0 010 1.59h-.262v-1.59zm-15.424 2.59h.291c.294 3.804 3.475 6.81 7.353 6.81h.398c3.877 0 7.06-3.006 7.353-6.81h.291c.99 0 1.796-.805 1.796-1.795 0-.99-.806-1.795-1.796-1.795h-.262v-.285c0-4.071-3.312-7.382-7.382-7.382h-.398c-4.07 0-7.383 3.31-7.383 7.382v.285h-.26c-.992 0-1.797.805-1.797 1.795 0 .99.805 1.796 1.796 1.796z" />
  );

  const normalHover = (
    <path d="M23.961 19.274a1.849 1.849 0 001.85-1.848h-3.699c0 1.02.828 1.848 1.85 1.848zm-8.6-6.153c0 .44.357.796.796.796h.261v-1.592h-.26a.797.797 0 00-.797.796zm2.357 1.223a6.09 6.09 0 006.083 6.082h.397a6.09 6.09 0 006.083-6.082v-2.019h-4.72a4.088 4.088 0 01-3.574-2.107 4.034 4.034 0 01-3.54 2.107h-.729v2.02zm0-3.019h.728a3.033 3.033 0 003.03-3.03v-.268h1v.214c0 1.7 1.384 3.084 3.085 3.084h4.72v-.284a6.09 6.09 0 00-6.083-6.083h-.397a6.09 6.09 0 00-6.083 6.083v.284zm13.863 2.592h.261a.797.797 0 000-1.592h-.26v1.592zm-17.22-.796c0-.99.806-1.796 1.796-1.796h.261v-.284c0-4.07 3.312-7.383 7.383-7.383h.397c4.071 0 7.383 3.312 7.383 7.383v.284h.261a1.797 1.797 0 010 3.592h-.29c-.294 3.803-3.476 6.81-7.354 6.81h-.397c-3.878 0-7.06-3.007-7.354-6.81h-.29c-.99 0-1.796-.806-1.796-1.796zm20.275 19.094c0-3.813-2.5-7.226-6.112-8.389-2.795 1.392-6.254 1.392-9.049 0-3.612 1.163-6.112 4.576-6.112 8.39v8.46h3.224V33.73h.901v6.947h13.023V33.73h.901v6.947h3.224v-8.46zm1.3 0v9.761H12.063v-9.76c0-4.474 3-8.468 7.293-9.713l.254-.074.233.124c2.543 1.355 5.77 1.355 8.313 0l.233-.124.254.074c4.294 1.245 7.293 5.24 7.293 9.712zM21.388 15.15a.503.503 0 10.001-1.005.503.503 0 000 1.005zm4.791-.502a.502.502 0 111.004 0 .502.502 0 01-1.004 0z" />
  );

  const simplified = (
    <path d="M17.996 15.132h.548a4.092 4.092 0 003.48-1.939 4.151 4.151 0 003.51 1.939h4.47v1.848a5.817 5.817 0 01-5.81 5.81h-.389a5.816 5.816 0 01-5.809-5.81v-1.848zm0-1.397a5.815 5.815 0 015.81-5.808h.389a5.815 5.815 0 015.809 5.808v.144h-4.47a2.897 2.897 0 01-2.894-2.894v-.21h-1.253v.262a2.846 2.846 0 01-2.843 2.842h-.548v-.144zm5.81 10.665h.389c4.09 0 7.42-3.329 7.42-7.42v-3.245c0-4.091-3.33-7.419-7.42-7.419h-.39c-4.092 0-7.42 3.328-7.42 7.419v3.245c0 4.091 3.328 7.42 7.42 7.42zm10.476 16.536H13.718v-6.4c0-3.651 2.38-6.921 5.824-8.062 2.763 1.353 6.153 1.353 8.916 0 3.444 1.14 5.824 4.41 5.824 8.061v6.4zm-5.674-16.1l-.315-.093-.288.153c-2.453 1.306-5.559 1.306-8.01 0l-.288-.153-.316.093c-4.289 1.243-7.284 5.232-7.284 9.7v8.01h23.786v-8.01c0-4.468-2.995-8.457-7.285-9.7z" />
  );

  const simplifiedHover = (
    <path d="M17.997 15.132h.548a4.095 4.095 0 003.479-1.939 4.15 4.15 0 003.51 1.939h4.47v1.848a5.817 5.817 0 01-5.809 5.81h-.39a5.816 5.816 0 01-5.808-5.81v-1.848zm0-1.397a5.814 5.814 0 015.808-5.808h.39a5.815 5.815 0 015.81 5.808v.144h-4.47a2.898 2.898 0 01-2.896-2.894v-.21h-1.253v.262a2.845 2.845 0 01-2.84 2.842h-.55v-.144zM23.805 24.4h.39c4.092 0 7.42-3.329 7.42-7.42v-3.245c0-4.091-3.328-7.419-7.42-7.419h-.39c-4.092 0-7.419 3.328-7.419 7.419v3.245c0 4.091 3.327 7.42 7.419 7.42zm.222-3.696c.876 0 1.585-.71 1.585-1.585h-3.17c0 .875.71 1.585 1.585 1.585zm-2.592-2.932a.494.494 0 100-.988.494.494 0 000 .988zm12.848 23.164H13.717v-6.4c0-3.651 2.38-6.921 5.826-8.062 2.762 1.353 6.154 1.353 8.914 0 3.446 1.14 5.826 4.41 5.826 8.061v6.4zm-5.676-16.1l-.314-.093-.288.154c-2.45 1.303-5.557 1.307-8.01 0l-.288-.154-.316.093c-4.288 1.243-7.284 5.232-7.284 9.7v8.01h23.786v-8.01c0-4.47-2.996-8.457-7.286-9.7zm-1.973-7.064a.494.494 0 100-.988.494.494 0 000 .988z" />
  );
  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default Avatar;
