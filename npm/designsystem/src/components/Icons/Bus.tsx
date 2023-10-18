import React from 'react';

import { getIcon, SvgPathProps } from '../Icon';

const Bus: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path
      fillRule="evenodd"
      d="M19.156 9.781h9.501v-1h-9.501v1zm-8.511 25.91h26.523V27.07H10.645v8.621zm0-9.922h26.523v-12.99H10.645v12.99zm0-14.291h26.523V7.39H10.645v4.088zM33.39 39.105c0 .692-.621 1.255-1.386 1.255-.764 0-1.385-.563-1.385-1.255v-2.113h2.771v2.113zm-16.195 0c0 .692-.622 1.255-1.385 1.255-.765 0-1.386-.563-1.386-1.255v-2.113h2.771v2.113zm-7.85-2.113h3.778v2.113c0 1.409 1.205 2.556 2.687 2.556 1.48 0 2.685-1.147 2.685-2.556v-2.113h10.823v2.113c0 1.409 1.205 2.556 2.686 2.556 1.481 0 2.686-1.147 2.686-2.556v-2.113h3.779V6.089H9.345v30.903zm6.465-4.691a1.198 1.198 0 010-2.393c.659 0 1.196.537 1.196 1.196 0 .66-.537 1.197-1.196 1.197zm0-3.393a2.199 2.199 0 00-2.197 2.196c0 1.212.985 2.197 2.197 2.197a2.2 2.2 0 002.196-2.197 2.199 2.199 0 00-2.196-2.196zm16.194 3.393a1.198 1.198 0 01-1.196-1.197c0-.659.537-1.196 1.196-1.196.66 0 1.197.537 1.197 1.196 0 .66-.537 1.197-1.197 1.197zm0-3.393a2.198 2.198 0 00-2.196 2.196c0 1.212.985 2.197 2.196 2.197a2.2 2.2 0 002.197-2.197 2.2 2.2 0 00-2.197-2.196zm10.86-8.944a.927.927 0 01-1.852 0v-5.336a.927.927 0 011.852 0v5.336zm-.926-7.563a2.23 2.23 0 00-2.226 2.227v5.336a2.23 2.23 0 002.226 2.227 2.23 2.23 0 002.226-2.227v-5.336a2.23 2.23 0 00-2.226-2.227zm-35.2 7.563a.927.927 0 01-1.852 0v-5.336a.927.927 0 011.852 0v5.336zm-.926-7.563a2.229 2.229 0 00-2.226 2.227v5.336c0 1.228.998 2.227 2.226 2.227a2.23 2.23 0 002.226-2.227v-5.336a2.23 2.23 0 00-2.226-2.227z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M10.645 34.191h26.523V25.57H10.645v8.621zm0-9.922h26.523v-12.99H10.645v12.99zm0-14.291h26.523V5.89H10.645v4.088zM33.39 39.105c0 .692-.622 1.255-1.385 1.255-.765 0-1.386-.563-1.386-1.255v-3.613h2.771v3.613zm-16.195 0c0 .692-.622 1.255-1.386 1.255-.764 0-1.386-.563-1.386-1.255v-3.613h2.772v3.613zm-7.85-3.613h3.779v3.613c0 1.409 1.204 2.556 2.685 2.556s2.686-1.147 2.686-2.556v-3.613h10.823v3.613c0 1.409 1.205 2.556 2.687 2.556 1.48 0 2.685-1.147 2.685-2.556v-3.613h3.778V4.589H9.345v30.903zm22.66-4.691a1.198 1.198 0 010-2.393c.659 0 1.196.537 1.196 1.196 0 .66-.537 1.197-1.196 1.197zm0-3.393a2.199 2.199 0 00-2.197 2.196c0 1.212.985 2.197 2.197 2.197a2.2 2.2 0 002.196-2.197 2.199 2.199 0 00-2.196-2.196zM19.156 8.281h9.5v-1h-9.5v1zm23.708 10.183a.927.927 0 01-1.852 0v-5.336a.927.927 0 011.852 0v5.336zm-.926-7.563a2.23 2.23 0 00-2.226 2.227v5.336a2.23 2.23 0 002.226 2.227 2.229 2.229 0 002.226-2.227v-5.336a2.229 2.229 0 00-2.226-2.227zm-35.2 7.563a.927.927 0 01-1.852 0v-5.336a.927.927 0 011.852 0v5.336zm-.926-7.563a2.23 2.23 0 00-2.226 2.227v5.336a2.23 2.23 0 002.226 2.227 2.23 2.23 0 002.226-2.227v-5.336a2.23 2.23 0 00-2.226-2.227zm9.997 19.9a1.198 1.198 0 01-1.196-1.197c0-.659.537-1.196 1.196-1.196.66 0 1.197.537 1.197 1.196 0 .66-.537 1.197-1.197 1.197zm0-3.393a2.198 2.198 0 00-2.196 2.196c0 1.212.985 2.197 2.196 2.197a2.199 2.199 0 002.197-2.197 2.199 2.199 0 00-2.197-2.196z"
    />
  );

  const xSmall = (
    <g fillRule="evenodd">
      <path d="M19.282 9.912h9.5V8.901h-9.5z" />
      <path d="M10.753 11.621h26.56V7.496h-26.56v4.125zm-.001 24.214H37.31v-8.658H10.75v8.658zm22.78 3.397c0 .702-.628 1.273-1.403 1.273-.774 0-1.404-.571-1.404-1.273v-2.134h2.808v2.134zm-16.193 0c0 .702-.63 1.273-1.405 1.273-.774 0-1.404-.571-1.404-1.273v-2.134h2.81v2.134zm-6.586-13.318h26.56V12.886h-26.56v13.028zM9.489 37.098h3.778v2.134c0 1.398 1.197 2.536 2.667 2.536 1.47 0 2.668-1.138 2.668-2.536v-2.134h10.86v2.134c0 1.398 1.196 2.536 2.667 2.536 1.47 0 2.667-1.138 2.667-2.536v-2.134h3.78V6.234H9.488v30.864zM6.88 20.153a.88.88 0 01-.88.88h-.128a.88.88 0 01-.88-.88V14.69a.88.88 0 01.88-.88h.128a.88.88 0 01.88.88v5.464zm-.88-7.608h-.128A2.146 2.146 0 003.73 14.69v5.464c0 1.182.96 2.144 2.143 2.144h.128a2.146 2.146 0 002.143-2.144V14.69a2.146 2.146 0 00-2.143-2.144zm37.007 7.608c0 .486-.396.88-.88.88H42a.881.881 0 01-.882-.88V14.69c0-.487.395-.88.882-.88h.127c.485 0 .88.393.88.88v5.464zm-.88-7.608H42a2.147 2.147 0 00-2.145 2.144v5.464c0 1.182.962 2.144 2.145 2.144h.127a2.146 2.146 0 002.144-2.144V14.69a2.146 2.146 0 00-2.144-2.144z" />
      <path d="M15.934 32.421a1.192 1.192 0 01-1.191-1.191c0-.657.534-1.191 1.191-1.191s1.191.534 1.191 1.19c0 .658-.534 1.192-1.191 1.192m0-3.394c-1.214 0-2.202.989-2.202 2.203 0 1.215.988 2.203 2.202 2.203a2.205 2.205 0 002.202-2.203 2.205 2.205 0 00-2.202-2.203m16.195 3.394a1.192 1.192 0 01-1.19-1.191c0-.657.534-1.191 1.19-1.191.657 0 1.192.534 1.192 1.19 0 .658-.535 1.192-1.192 1.192m0-3.394c-1.214 0-2.201.989-2.201 2.203 0 1.215.987 2.203 2.201 2.203a2.205 2.205 0 002.202-2.203 2.205 2.205 0 00-2.202-2.203" />
    </g>
  );

  const xSmallHover = (
    <g fillRule="evenodd">
      <path d="M10.752 10.122h26.56V5.997h-26.56v4.125zm0 24.212h26.56v-8.657h-26.56v8.657zm22.78 4.898c0 .702-.628 1.273-1.403 1.273-.774 0-1.404-.571-1.404-1.273v-3.633h2.808v3.633zm-16.194 0c0 .702-.63 1.273-1.404 1.273-.775 0-1.404-.571-1.404-1.273v-3.633h2.808v3.633zm-6.586-14.818h26.56V11.385h-26.56v13.029zM9.489 35.599h3.778v3.633c0 1.398 1.196 2.536 2.667 2.536 1.47 0 2.667-1.138 2.667-2.536v-3.633h10.86v3.633c0 1.398 1.197 2.536 2.668 2.536 1.47 0 2.667-1.138 2.667-2.536v-3.633h3.78V4.734H9.488v30.865zM6.88 18.59a.945.945 0 01-1.89 0v-5.338a.946.946 0 011.89 0v5.338zm-.945-7.546a2.212 2.212 0 00-2.208 2.208v5.338a2.21 2.21 0 002.208 2.207 2.21 2.21 0 002.208-2.207v-5.338c0-1.216-.99-2.208-2.208-2.208zm37.07 7.546a.945.945 0 01-1.887 0v-5.338c0-.52.423-.945.943-.945.522 0 .945.425.945.945v5.338zm-.944-7.546a2.21 2.21 0 00-2.207 2.208v5.338a2.21 2.21 0 002.207 2.207 2.21 2.21 0 002.208-2.207v-5.338c0-1.216-.99-2.208-2.208-2.208z" />
      <path d="M15.934 30.921a1.192 1.192 0 01-1.191-1.191c0-.657.534-1.191 1.191-1.191s1.191.534 1.191 1.191-.534 1.191-1.191 1.191m0-3.394c-1.214 0-2.202.99-2.202 2.203 0 1.215.988 2.203 2.202 2.203a2.205 2.205 0 002.202-2.203 2.205 2.205 0 00-2.202-2.203m16.195 3.394a1.192 1.192 0 01-1.191-1.191c0-.657.534-1.191 1.19-1.191.658 0 1.192.534 1.192 1.191s-.534 1.191-1.191 1.191m0-3.394c-1.214 0-2.202.99-2.202 2.203 0 1.215.988 2.203 2.202 2.203a2.205 2.205 0 002.201-2.203 2.205 2.205 0 00-2.201-2.203M19.282 8.413h9.5V7.401h-9.5z" />
    </g>
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default Bus;
