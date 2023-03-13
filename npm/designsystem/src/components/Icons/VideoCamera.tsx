import React from 'react';

import { getIcon, SvgPathProps } from './Icon';

const VideoCamera: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule="evenodd"
      d="M25.624 32.174a.367.367 0 100 .733.367.367 0 000-.733zM14.118 13.301a1.166 1.166 0 11-.001 2.331 1.166 1.166 0 01.001-2.33zm0 3.53a2.366 2.366 0 002.364-2.365 2.366 2.366 0 00-2.364-2.364 2.366 2.366 0 00-2.364 2.364 2.366 2.366 0 002.364 2.364zm9.857 15.343a.367.367 0 10-.001.735.367.367 0 00.001-.735zm-12.337-5.119h15.77v-3.144h-15.77v3.144zm-1.199 1.2h18.168v-5.543H10.44v5.542zm.6 2.585h16.97v-1.199h-16.97v1.2zm16.235 1.334a.367.367 0 10-.001.735.367.367 0 00.001-.735zm13.551 2.888l-6.957-3.024v-8.24l6.957-3.024v14.288zm-9.485-3.23h1.33v-7.829h-1.33v7.83zM8.907 34.86h21.234V20.976H8.907V34.86zm-.594-20.394c0-3.2 2.605-5.805 5.805-5.805 3.2 0 5.805 2.605 5.805 5.805a5.795 5.795 0 01-3.47 5.311h-4.664a5.79 5.79 0 01-3.476-5.31zm13.494 5.311H18.68a7.003 7.003 0 001.682-2.155 6.108 6.108 0 001.445 2.155zm4.185-9.247a4.876 4.876 0 014.87 4.871 4.88 4.88 0 01-2.747 4.376h-4.248a4.886 4.886 0 01-2.745-4.376 4.876 4.876 0 014.87-4.87zm7.151 12.274H31.34v-3.027h-1.163a6.078 6.078 0 001.884-4.376 6.076 6.076 0 00-6.069-6.07 6.064 6.064 0 00-5.213 2.978c-.912-2.809-3.55-4.847-6.66-4.847a7.012 7.012 0 00-7.005 7.004c0 2.084.92 4.003 2.444 5.311h-1.85V36.06H31.34v-3.028h1.803l8.881 3.861V18.944l-8.88 3.86zm-7.15-8.568a1.166 1.166 0 11-.002 2.331 1.166 1.166 0 01.001-2.33zm0 3.53a2.367 2.367 0 002.363-2.365 2.367 2.367 0 00-2.364-2.365 2.367 2.367 0 00-2.364 2.365 2.367 2.367 0 002.364 2.364z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M25.624 32.174a.367.367 0 100 .733.367.367 0 000-.733zM14.118 13.301a1.166 1.166 0 11-.001 2.331 1.166 1.166 0 01.001-2.33zm0 3.53a2.366 2.366 0 002.364-2.365 2.366 2.366 0 00-2.364-2.364 2.366 2.366 0 00-2.364 2.364 2.366 2.366 0 002.364 2.364zm9.857 15.343a.367.367 0 10-.001.735.367.367 0 00.001-.735zm-12.337-5.119h15.77v-3.144h-15.77v3.144zm-1.199 1.2h18.168v-5.543H10.44v5.542zm.6 2.585h16.97v-1.199h-16.97v1.2zm16.235 1.334a.367.367 0 10-.001.735.367.367 0 00.001-.735zm14.551 3.888l-7.957-4.024v-8.24l7.957-4.024v16.288zm-10.485-4.23h1.33v-7.829h-1.33v7.83zM8.907 34.86h21.234V20.976H8.907V34.86zm-.594-20.394c0-3.2 2.605-5.805 5.805-5.805 3.2 0 5.805 2.605 5.805 5.805a5.795 5.795 0 01-3.47 5.311h-4.664a5.79 5.79 0 01-3.476-5.31zm13.494 5.311H18.68a7.003 7.003 0 001.682-2.155 6.108 6.108 0 001.445 2.155zm4.185-9.247a4.876 4.876 0 014.87 4.871 4.88 4.88 0 01-2.747 4.376h-4.248a4.886 4.886 0 01-2.745-4.376 4.876 4.876 0 014.87-4.87zm7.151 12.274H31.34v-3.027h-1.163a6.078 6.078 0 001.884-4.376 6.076 6.076 0 00-6.069-6.07 6.064 6.064 0 00-5.213 2.978c-.912-2.809-3.55-4.847-6.66-4.847a7.012 7.012 0 00-7.005 7.004c0 2.084.92 4.003 2.444 5.311h-1.85V36.06H31.34v-3.028h1.803l9.881 4.861V17.944l-9.88 4.86zm-7.15-8.568a1.166 1.166 0 11-.002 2.331 1.166 1.166 0 01.001-2.33zm0 3.53a2.367 2.367 0 002.363-2.365 2.367 2.367 0 00-2.364-2.365 2.367 2.367 0 00-2.364 2.365 2.367 2.367 0 002.364 2.364z"
    />
  );

  const xSmall = (
    <path
      fillRule="evenodd"
      d="M40.567 34.908l-6.848-2.975v-8.148l6.848-2.976v14.099zm-9.361-3.192h1.25v-7.713h-1.25v7.713zm-22.308 3.01h21.045V20.991H8.898v13.735zm-.59-20.243a5.743 5.743 0 015.738-5.738 5.743 5.743 0 015.736 5.738 5.726 5.726 0 01-3.425 5.244h-4.622a5.717 5.717 0 01-3.426-5.244zm13.3 5.244h-2.939a6.934 6.934 0 001.578-2.023c.312.759.775 1.446 1.36 2.023zm4.246-9.122a4.812 4.812 0 014.806 4.806 4.815 4.815 0 01-2.704 4.316h-4.207a4.82 4.82 0 01-2.704-4.316 4.813 4.813 0 014.809-4.806zm7.103 12.134h-1.751v-3.012h-1.107a6.072 6.072 0 001.824-4.316 6.077 6.077 0 00-6.07-6.07c-2.195 0-4.104 1.183-5.17 2.934-.929-2.78-3.55-4.793-6.637-4.793-3.86 0-7 3.14-7 7 0 2.053.895 3.942 2.377 5.245H7.635V35.99h23.57v-3.01h1.752l8.873 3.855V18.881l-8.873 3.858zm-5.731 5.09h-15.61v-3.918l15.61-.001v3.92zm1.263-5.182H10.352v6.445H28.49v-6.445zm-14.443-9.288a1.125 1.125 0 11-1.124 1.124c0-.62.505-1.124 1.124-1.124zm0 3.51a2.39 2.39 0 002.386-2.386 2.39 2.39 0 00-2.386-2.388 2.39 2.39 0 00-2.388 2.388 2.39 2.39 0 002.388 2.386zm11.808-2.58a1.123 1.123 0 11-.004 2.246 1.123 1.123 0 01.004-2.247zm0 3.508a2.389 2.389 0 002.385-2.386 2.388 2.388 0 00-2.385-2.386 2.39 2.39 0 00-2.388 2.386 2.39 2.39 0 002.388 2.386z"
    />
  );

  const xSmallHover = (
    <path
      fillRule="evenodd"
      d="M41.83 36.171l-8.11-4.238v-8.148l8.11-4.24v16.626zm-10.624-4.455h1.25v-7.713h-1.25v7.713zm-22.308 3.01h21.045V20.991H8.898v13.735zm-.59-20.243a5.743 5.743 0 015.738-5.738 5.743 5.743 0 015.736 5.738 5.726 5.726 0 01-3.425 5.244h-4.622a5.717 5.717 0 01-3.426-5.244zm13.3 5.244h-2.939a6.934 6.934 0 001.578-2.023c.312.759.775 1.446 1.36 2.023zm4.246-9.122a4.812 4.812 0 014.806 4.806 4.815 4.815 0 01-2.704 4.316h-4.207a4.82 4.82 0 01-2.704-4.316 4.813 4.813 0 014.809-4.806zm7.103 12.134h-1.751v-3.012h-1.107a6.072 6.072 0 001.824-4.316 6.077 6.077 0 00-6.07-6.07c-2.195 0-4.104 1.183-5.17 2.934-.929-2.78-3.55-4.793-6.637-4.793-3.86 0-7 3.14-7 7 0 2.053.895 3.942 2.377 5.245H7.635V35.99h23.57v-3.01h1.752l10.136 5.118v-20.48L32.957 22.74zm-5.731 5.09h-15.61v-3.918l15.61-.001v3.92zm1.263-5.182H10.352v6.445H28.49v-6.445zm-14.443-9.288a1.125 1.125 0 11-1.124 1.124c0-.62.505-1.124 1.124-1.124zm0 3.51a2.39 2.39 0 002.386-2.386 2.39 2.39 0 00-2.386-2.388 2.39 2.39 0 00-2.388 2.388 2.39 2.39 0 002.388 2.386zm11.808-2.58a1.123 1.123 0 11-.004 2.246 1.123 1.123 0 01.004-2.247zm0 3.508a2.389 2.389 0 002.385-2.386 2.388 2.388 0 00-2.385-2.386 2.39 2.39 0 00-2.388 2.386 2.39 2.39 0 002.388 2.386z"
    />
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default VideoCamera;
