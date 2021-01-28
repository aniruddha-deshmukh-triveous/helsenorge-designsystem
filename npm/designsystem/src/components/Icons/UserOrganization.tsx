import React from 'react';
import { SvgPathProps } from './Icon';

const UserOrganization: React.FC<SvgPathProps> = ({ isExtraSmall, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M13.018 34.28l.254.073A6.328 6.328 0 0117.81 40.4v3.025H3.045V40.4a6.327 6.327 0 014.539-6.047l.254-.074.234.125a5.071 5.071 0 004.712 0l.234-.125zm27.144 0l.254.073a6.328 6.328 0 014.54 6.047v3.025H30.188V40.4a6.328 6.328 0 014.54-6.047l.253-.074.234.125a5.106 5.106 0 004.712 0l.234-.125zm-27.016 1.398a6.413 6.413 0 01-5.436 0A5.021 5.021 0 004.346 40.4v1.724H16.51V40.4a5.022 5.022 0 00-3.364-4.722zm27.144 0a6.413 6.413 0 01-5.436 0A5.022 5.022 0 0031.49 40.4v1.724h12.164V40.4a5.022 5.022 0 00-3.364-4.722zm-15.62-8.342v4.918l4.259 2.46-.651 1.124-4.258-2.459-4.258 2.46-.651-1.126 4.258-2.458v-4.919h1.3zm-14.124-5.134a4.673 4.673 0 014.667 4.666v1.971a4.673 4.673 0 01-4.667 4.666h-.238a4.672 4.672 0 01-4.666-4.666v-1.97a4.672 4.672 0 014.666-4.667zm27.145 0a4.673 4.673 0 014.667 4.666v1.971a4.673 4.673 0 01-4.667 4.666h-.237a4.673 4.673 0 01-4.667-4.666v-1.97a4.673 4.673 0 014.667-4.667zM9.228 26.753a2.606 2.606 0 01-2.114 1.083h-.17v1.003a3.37 3.37 0 003.364 3.365h.238a3.37 3.37 0 003.366-3.365v-1.003h-2.554a2.637 2.637 0 01-2.13-1.083zm27.145 0a2.604 2.604 0 01-2.113 1.083h-.172v1.003a3.37 3.37 0 003.366 3.365h.237a3.37 3.37 0 003.366-3.365v-1.003h-2.553a2.64 2.64 0 01-2.131-1.083zm-25.827-3.25h-.238a3.367 3.367 0 00-3.362 3.333h.168c.886 0 1.606-.72 1.606-1.605v-.16h1v.127a1.64 1.64 0 001.638 1.638h2.551a3.368 3.368 0 00-3.363-3.333zm27.145 0h-.237a3.367 3.367 0 00-3.363 3.333h.169c.886 0 1.605-.72 1.605-1.605v-.16h1v.127a1.64 1.64 0 001.639 1.638h2.55a3.368 3.368 0 00-3.363-3.333zm-11.101-8.49l.253.074a6.324 6.324 0 014.54 6.045v3.026H16.617v-3.026a6.324 6.324 0 014.54-6.045l.253-.074.234.125a5.106 5.106 0 004.712 0l.234-.125zm.128 1.398a6.413 6.413 0 01-5.436 0 5.019 5.019 0 00-3.364 4.72v1.726h12.164v-1.725a5.019 5.019 0 00-3.364-4.721zm-2.6-13.475a4.673 4.673 0 014.668 4.666v1.97a4.673 4.673 0 01-4.667 4.667h-.238a4.672 4.672 0 01-4.666-4.666V7.602a4.672 4.672 0 014.666-4.666zm-1.317 4.55a2.604 2.604 0 01-2.113 1.084h-.172v1.003a3.37 3.37 0 003.365 3.365h.238a3.37 3.37 0 003.366-3.365V8.57H24.93a2.637 2.637 0 01-2.13-1.083zm1.318-3.25h-.238a3.368 3.368 0 00-3.362 3.334h.169c.886 0 1.605-.72 1.605-1.605v-.16h1v.127A1.64 1.64 0 0024.93 7.57h2.55a3.369 3.369 0 00-3.362-3.333z" />
  );

  const normalHover = (
    <path d="M13.018 34.28l.254.073A6.328 6.328 0 0117.81 40.4v3.025H3.045V40.4a6.327 6.327 0 014.539-6.047l.254-.074.234.125a5.106 5.106 0 004.712 0l.234-.125zm27.144 0l.254.073a6.328 6.328 0 014.54 6.047v3.025H30.188V40.4a6.328 6.328 0 014.54-6.047l.253-.074.234.125a5.106 5.106 0 004.712 0l.234-.125zm-27.016 1.398a6.413 6.413 0 01-5.436 0A5.021 5.021 0 004.346 40.4v1.724H16.51V40.4a5.022 5.022 0 00-3.364-4.722zm27.144 0a6.413 6.413 0 01-5.436 0A5.022 5.022 0 0031.49 40.4v1.724h12.164V40.4a5.022 5.022 0 00-3.364-4.722zm-15.62-9.342v5.918l5.109 2.95-.65 1.124-5.11-2.949-5.108 2.95-.65-1.126 5.108-2.949v-5.918h1.3zm-14.124-4.134a4.673 4.673 0 014.667 4.666v1.971a4.673 4.673 0 01-4.667 4.666h-.238a4.672 4.672 0 01-4.666-4.666v-1.97a4.672 4.672 0 014.666-4.667zm27.146 0a4.672 4.672 0 014.666 4.666v1.971a4.672 4.672 0 01-4.666 4.666h-.238a4.673 4.673 0 01-4.667-4.666v-1.97a4.673 4.673 0 014.667-4.667zM9.228 26.753a2.606 2.606 0 01-2.114 1.083h-.17v1.003a3.37 3.37 0 003.364 3.365h.238a3.37 3.37 0 003.366-3.365v-1.003h-2.554a2.637 2.637 0 01-2.13-1.083zm27.145 0a2.604 2.604 0 01-2.113 1.083h-.172v1.003a3.37 3.37 0 003.366 3.365h.238a3.37 3.37 0 003.365-3.365v-1.003h-2.553a2.64 2.64 0 01-2.131-1.083zm-25.827-3.25h-.238a3.367 3.367 0 00-3.362 3.333h.168c.886 0 1.606-.72 1.606-1.605v-.16h1v.127a1.64 1.64 0 001.638 1.638h2.551a3.368 3.368 0 00-3.363-3.333zm27.146 0h-.238a3.367 3.367 0 00-3.363 3.333h.169c.886 0 1.605-.72 1.605-1.605v-.16h1v.127a1.64 1.64 0 001.639 1.638h2.55a3.368 3.368 0 00-3.362-3.333zm-11.102-8.49l.253.074a6.324 6.324 0 014.54 6.045v3.026H16.617v-3.026a6.324 6.324 0 014.54-6.045l.253-.074.234.125a5.106 5.106 0 004.712 0l.234-.125zm.128 1.398a6.413 6.413 0 01-5.436 0 5.019 5.019 0 00-3.364 4.72v1.726h12.164v-1.725a5.019 5.019 0 00-3.364-4.721zm-2.6-13.475a4.673 4.673 0 014.668 4.666v1.97a4.673 4.673 0 01-4.667 4.667h-.237a4.673 4.673 0 01-4.667-4.666V7.602a4.673 4.673 0 014.667-4.666zm-1.317 4.55a2.604 2.604 0 01-2.113 1.084h-.172v1.003a3.37 3.37 0 003.366 3.365h.237a3.37 3.37 0 003.366-3.365V8.57h-2.553A2.64 2.64 0 0122.8 7.487zm1.318-3.25h-.237a3.368 3.368 0 00-3.363 3.334h.169c.886 0 1.605-.72 1.605-1.605v-.16h1v.127a1.64 1.64 0 001.639 1.638h2.55a3.369 3.369 0 00-3.363-3.333z" />
  );

  return isHovered ? normalHover : normal;
};

export default UserOrganization;
