import React from 'react';

import { SvgPathProps } from './Icon';

const MotherHoldingBaby: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M18.157 24.502l.348.376c.05.05 1.341 1.357 4.445 1.357.02 0 2.953-.063 4.617-1.325l.308-.232.352.157c1.526.683 2.02.978 3.325 2.005 2.58.07 4.662 2.18 4.662 4.778 0 .983-.3 1.896-.808 2.657-.124 4.844-4.322 8.703-10.304 9.42a2.64 2.64 0 01-.686.104c-.085 0-.172-.005-.259-.014l-2.451-.27-.35-.038-.943-.104.003-.023c-2.709-.412-5.066-1.497-6.68-3.107-1.92-1.912-2.768-4.453-2.449-7.347.395-3.586 3.577-6.559 6.425-8.145l.445-.249zm4.049 14.468l-.18 1.626-.177 1.627 2.45.27a1.045 1.045 0 00.928-1.689 1.037 1.037 0 00-.7-.385l-.962-.105.072-.646a.537.537 0 00-.476-.593l-.956-.105zm11.719-3.285a4.745 4.745 0 01-2.502.724c-.326 0-.645-.034-.953-.097a4.936 4.936 0 01-2.354 3.195l-1.628.86c.215.41.306.874.255 1.345a2.296 2.296 0 01-.077.374c3.805-.939 6.537-3.354 7.259-6.4zm-15.968-9.574c-2.458 1.47-5.055 3.988-5.378 6.927-.274 2.487.444 4.66 2.073 6.284 1.412 1.406 3.49 2.368 5.906 2.744l.343-3.129.015-.125c-1.995-.319-3.431-1.05-4.276-2.18-.838-1.12-.902-2.379-.808-3.236.074-.677.236-1.252.495-1.759l1.158.591c-.186.364-.303.793-.36 1.31-.043.38-.026.865.11 1.361a4.93 4.93 0 011.745-1.74l4.165-2.289a4.934 4.934 0 013.675-.507 4.783 4.783 0 012.962-3.229c-.537-.373-.99-.613-1.753-.962-2.014 1.303-4.94 1.361-5.07 1.363-2.716 0-4.313-.906-5.003-1.424zm8.68 5.57c-.963-.28-1.983-.182-2.855.322l-4.163 2.29a3.617 3.617 0 00-1.591 1.942c.764.724 1.992 1.185 3.67 1.371l1.607.177a1.838 1.838 0 011.58 1.378c.228.046.442.132.643.241l1.959-1.032c.92-.532 1.543-1.45 1.739-2.52-1.517-.79-2.564-2.35-2.588-4.17zm4.785-3.554a3.495 3.495 0 00-3.49 3.491 3.495 3.495 0 003.49 3.491 3.495 3.495 0 003.491-3.49 3.495 3.495 0 00-3.49-3.492zM23.085 5.19a3.46 3.46 0 013.456 3.455v.396a6.877 6.877 0 013.6 6.04v1.2h.191c.95 0 1.723.773 1.723 1.723 0 .95-.773 1.722-1.723 1.722h-.386c-.72 3.022-3.437 5.28-6.677 5.28h-.368c-3.239 0-5.956-2.258-6.677-5.28h-.386a1.725 1.725 0 01-1.722-1.722c0-.95.773-1.723 1.722-1.723h.192v-1.2a6.878 6.878 0 013.6-6.04v-.396a3.459 3.459 0 013.455-3.455zm-1.858 10.258a3.79 3.79 0 01-3.273 1.883h-.623v.803a5.577 5.577 0 005.57 5.571h.368a5.577 5.577 0 005.571-5.57v-.804h-4.313a3.836 3.836 0 01-3.3-1.883zm.446 3.289a.464.464 0 110 .928.464.464 0 010-.928zm4.891 0a.464.464 0 110 .928.464.464 0 010-.928zM16.03 17.33h-.192a.673.673 0 000 1.345h.205v-.308c-.003-.079-.013-.155-.013-.234v-.803zm14.302 0h-.192v.803c0 .08-.009.157-.012.236v.306h.204a.674.674 0 000-1.345zm-7.063-7.82h-.368a5.577 5.577 0 00-5.57 5.57v1.2h.623a2.74 2.74 0 002.737-2.737v-.247h1.05v.197a2.79 2.79 0 002.786 2.787h4.313v-1.2a5.577 5.577 0 00-5.57-5.57zm-.184-3.02c-1.138 0-2.063.89-2.14 2.007a6.834 6.834 0 011.956-.287h.368c.68 0 1.336.102 1.957.287a2.152 2.152 0 00-2.14-2.008z" />
  );

  const normalHover = (
    <path d="M18.383 24.208l.347.326c.017.016 1.76 1.624 4.24 1.702.047.002 3.444.15 5.091-1.099l.308-.232.352.157c1.355.607 1.938 1.07 2.611 1.605l.22.173c2.58.07 4.662 2.18 4.662 4.778 0 .983-.298 1.896-.808 2.657-.124 4.844-4.322 8.703-10.304 9.42a2.64 2.64 0 01-.686.104c-.085 0-.172-.005-.259-.014l-3.744-.412.003-.023c-2.709-.412-5.066-1.497-6.68-3.107-1.92-1.912-2.767-4.453-2.449-7.347.438-3.98 4.405-7.189 6.68-8.457l.416-.23zm3.823 14.762l-.082.744-.275 2.51 2.45.27a1.045 1.045 0 001.152-.924 1.039 1.039 0 00-.224-.766 1.037 1.037 0 00-.7-.385l-.962-.105.072-.646a.537.537 0 00-.474-.593l-.957-.105zm11.719-3.285a4.745 4.745 0 01-2.502.724c-.326 0-.645-.034-.953-.097a4.933 4.933 0 01-2.354 3.195l-1.628.86c.216.41.306.874.255 1.345a2.296 2.296 0 01-.077.374c3.805-.939 6.537-3.354 7.259-6.4zm-15.707-9.889c-2.568 1.548-5.323 4.378-5.639 7.242-.273 2.487.444 4.66 2.073 6.284 1.412 1.406 3.49 2.368 5.906 2.744l.343-3.129.015-.125c-1.994-.319-3.431-1.05-4.276-2.18-.838-1.12-.902-2.379-.808-3.236.075-.677.236-1.252.496-1.759l1.157.591c-.186.364-.302.793-.36 1.31-.043.38-.026.865.11 1.361a4.93 4.93 0 011.745-1.74l4.165-2.289a4.93 4.93 0 013.675-.507 4.783 4.783 0 012.97-3.23 8.528 8.528 0 00-1.273-.733c-2.078 1.292-5.45 1.142-5.6 1.135-2.263-.07-3.974-1.177-4.7-1.739zm8.42 5.884c-.963-.279-1.985-.18-2.857.323l-4.162 2.29a3.617 3.617 0 00-1.591 1.942c.764.724 1.992 1.185 3.67 1.371l1.607.177a1.838 1.838 0 011.58 1.378c.228.046.442.132.644.241l1.957-1.032c.92-.532 1.543-1.45 1.74-2.52-1.517-.79-2.564-2.35-2.587-4.17zm4.784-3.553a3.495 3.495 0 00-3.49 3.491 3.495 3.495 0 003.49 3.491 3.495 3.495 0 003.492-3.49 3.495 3.495 0 00-3.492-3.492zM24.988 5.293l.23.015a3.434 3.434 0 012.33 1.247 3.43 3.43 0 01.768 2.531l-.038.393a6.881 6.881 0 012.989 6.366l-.158 1.592.192.02c.458.044.87.264 1.162.62.292.356.428.804.383 1.262a1.71 1.71 0 01-.622 1.162 1.709 1.709 0 01-1.262.383l-.487-.048a6.891 6.891 0 01-7.021 4.21l-.366-.037a6.825 6.825 0 01-4.637-2.48 6.854 6.854 0 01-1.431-3.02l-.481-.049a1.724 1.724 0 01-1.545-1.883 1.726 1.726 0 011.883-1.545l.19.02.159-1.593a6.872 6.872 0 014.174-5.657l.039-.394a3.438 3.438 0 011.247-2.333 3.44 3.44 0 012.532-.767zM22.32 15.737a3.81 3.81 0 01-.667.707 3.762 3.762 0 01-2.774.841l-.62-.062-.04.401a5.54 5.54 0 001.237 4.081 5.535 5.535 0 003.76 2.01l.366.036a5.525 5.525 0 004.08-1.237 5.534 5.534 0 002.01-3.759l.04-.4-4.291-.425a3.806 3.806 0 01-2.59-1.384 3.896 3.896 0 01-.511-.809zm4.989 3.792a.465.465 0 11-.092.926.465.465 0 01.092-.926zm-4.951-.48h.083a.464.464 0 11-.09.923.464.464 0 01.09-.923zm8.648-.567l-.04.4c-.008.084-.025.165-.036.247l-.068.69.203.02a.672.672 0 00.133-1.338l-.192-.019zm-14.3-1.408a.672.672 0 00-.064 1.341l.203.02.069-.694c.005-.082.003-.163.012-.245l.039-.4-.192-.019a.729.729 0 00-.066-.003zm7.353-7.512a5.58 5.58 0 00-5.54 5.025l-.157 1.591.62.062a2.728 2.728 0 002.005-.608c.565-.464.916-1.12.988-1.847l.024-.246 1.045.103-.02.197c-.073.74.147 1.465.62 2.041a2.77 2.77 0 001.88 1.006l4.29.423.159-1.592a5.578 5.578 0 00-4.997-6.09l-.366-.037a5.394 5.394 0 00-.551-.028zm1.03-2.96a2.133 2.133 0 00-2.327 1.79 6.803 6.803 0 011.976-.096l.365.036c.678.067 1.32.233 1.92.478a2.142 2.142 0 00-1.933-2.208z" />
  );

  return isHovered ? normalHover : normal;
};

export default MotherHoldingBaby;
