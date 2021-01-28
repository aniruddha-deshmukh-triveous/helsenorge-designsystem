import React from 'react';
import { SvgPathProps } from './Icon';

const Rocket: React.FC<SvgPathProps> = ({ isExtraSmall, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M31.445 30l-2.294 2.316-1.177-2.876c1.515-.986 3.058-2.135 4.357-3.394A3.842 3.842 0 0131.445 30zm-9.582 1.374l-5.309-5.255c.891-1.906 3.347-6.798 6.407-9.89 1.092-1.104 2.45-1.984 3.901-2.694l7.478 7.401c-.695 1.458-1.56 2.825-2.653 3.928-3.06 3.093-7.927 5.6-9.824 6.51zm-6.328-12.532l2.294-2.319a3.844 3.844 0 013.944-.926c-1.245 1.311-2.379 2.867-3.349 4.391l-2.889-1.146zm21.414-8.02c-.195 1.941-.717 5.503-2.048 8.84l-6.77-6.7c3.322-1.367 6.88-1.926 8.818-2.14zm-3.66 14.205c4.742-5.64 5.072-15.632 5.072-15.632s-9.975.432-15.568 5.223l-.106-.067a5.15 5.15 0 00-5.782 1.058l-3.677 3.715 4.505 1.79a50.1 50.1 0 00-2.736 5.293l6.594 6.527s2.436-1.07 5.266-2.79l1.835 4.485 3.677-3.716a5.153 5.153 0 001-5.792l-.08-.094zM16.78 35.458l-.118.131c-.043.04-.089.077-.137.117-.093.08-.19.15-.31.23-1.56 1.053-3.889 1.31-5.268 1.362.052-1.259.266-3.38 1.084-4.933l.016-.03.015-.032c.133-.288.305-.547.516-.77l.12-.115a2.87 2.87 0 011.98-.788 2.85 2.85 0 012.018.831 2.86 2.86 0 01.084 3.997zm.831-4.922a4.155 4.155 0 00-2.934-1.206 4.167 4.167 0 00-2.872 1.144l-.005-.005c-.016.015-.03.034-.046.051-.016.016-.035.03-.052.047a4.168 4.168 0 00-.82 1.192c-.977 1.851-1.2 4.314-1.242 5.722a1.087 1.087 0 001.09 1.123h.028c1.521-.039 4.275-.3 6.184-1.59.145-.096.286-.2.421-.314.133-.109.262-.224.383-.347l-.012-.01a4.176 4.176 0 00-.123-5.807zm10.553-8.438a1.69 1.69 0 01-2.886-1.179c-.002-.45.17-.875.488-1.195.317-.32.74-.498 1.19-.5h.01c.446 0 .868.172 1.186.487a1.69 1.69 0 01.012 2.387zm-1.198-4.175h-.017a2.968 2.968 0 00-2.107.887 2.962 2.962 0 00-.864 2.116 2.982 2.982 0 002.987 2.97c.77 0 1.54-.295 2.123-.884a2.992 2.992 0 00-.022-4.225 2.963 2.963 0 00-2.1-.864z" />
  );

  const normalHover = (
    <path d="M35.61 26.526l-2.294 2.317-1.177-2.877c1.515-.985 3.06-2.134 4.357-3.393a3.842 3.842 0 01-.886 3.953zM26.03 27.9l-5.31-5.254c.891-1.906 3.348-6.798 6.409-9.891 1.091-1.103 2.45-1.983 3.9-2.693l7.477 7.4c-.695 1.459-1.56 2.825-2.653 3.929-3.06 3.093-7.926 5.599-9.823 6.509zM19.7 15.369l2.294-2.32a3.835 3.835 0 013.944-.924c-1.245 1.31-2.38 2.865-3.35 4.39l-2.888-1.146zm21.413-8.022c-.194 1.942-.716 5.504-2.047 8.842l-6.772-6.701c3.323-1.366 6.88-1.925 8.82-2.141zm-3.66 14.207c4.742-5.64 5.072-15.632 5.072-15.632s-9.975.432-15.568 5.223l-.105-.067a5.151 5.151 0 00-5.783 1.058l-3.677 3.715 4.505 1.789a50.147 50.147 0 00-2.735 5.293l6.593 6.528s2.436-1.07 5.267-2.791l1.835 4.486 3.677-3.716a5.153 5.153 0 00.998-5.792l-.078-.094zm-5.126-2.93a1.68 1.68 0 01-1.19.5c-.469-.03-.876-.171-1.196-.488a1.69 1.69 0 01-.012-2.386 1.684 1.684 0 011.2-.5 1.683 1.683 0 011.687 1.678 1.68 1.68 0 01-.489 1.196zm-3.322-3.288a2.99 2.99 0 00.021 4.224 2.97 2.97 0 002.102.864h.016a2.97 2.97 0 002.109-.886 2.968 2.968 0 00.863-2.116 2.966 2.966 0 00-.886-2.108 2.992 2.992 0 00-4.225.022zm-8.06 16.649l-.118.13a4.48 4.48 0 01-.45.348c-1.558 1.053-3.887 1.309-5.267 1.362.053-1.26.268-3.384 1.084-4.933l.017-.031.015-.031c.131-.287.303-.544.517-.773l.119-.112a2.87 2.87 0 011.979-.788c.762 0 1.478.295 2.018.83a2.863 2.863 0 01.085 3.998zm.83-4.922a4.155 4.155 0 00-2.934-1.206A4.168 4.168 0 0015.97 27l-.006-.005c-.016.015-.03.034-.045.05-.017.017-.036.03-.053.047a4.172 4.172 0 00-.82 1.193c-.976 1.85-1.2 4.313-1.241 5.722a1.088 1.088 0 001.09 1.123h.027c1.523-.04 4.276-.301 6.184-1.592a4.05 4.05 0 00.421-.312c.133-.11.262-.224.383-.347l-.01-.011a4.177 4.177 0 00-.124-5.806z" />
  );

  return isHovered ? normalHover : normal;
};

export default Rocket;
