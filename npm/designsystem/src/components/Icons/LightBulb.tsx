import React from 'react';
import {SvgPathProps} from './Icon';

const LightBulb: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M15.067 18.782l1.153.332c.989-3.424 4.17-5.828 7.737-5.847.279-.021.557.013.829.04l.116-1.196a10.696 10.696 0 00-.95-.043c-4.096.021-7.75 2.782-8.885 6.714zm8.99 13.56c-6.051.066-11.002-4.867-11.034-10.92a10.904 10.904 0 013.175-7.779 10.908 10.908 0 017.745-3.256h.059a10.91 10.91 0 017.72 3.175 10.902 10.902 0 013.254 7.746 10.904 10.904 0 01-3.174 7.779 10.91 10.91 0 01-7.745 3.256zm3.165 7.334a1.41 1.41 0 01-1.003.42l-.739.004a.686.686 0 00-.337-.099h-.004l-2.085.01a.686.686 0 00-.338.103l-.741.005c-.404-.025-.737-.145-1.007-.411a1.408 1.408 0 01-.421-1.003l-.002-.294 7.086-.037.002.293c.002.38-.144.737-.411 1.008zm-2.875 1.886a.34.34 0 01-.242.102h-.002a.344.344 0 01-.331-.256l.664-.002a.343.343 0 01-.089.157zm-3.816-5.928l7.086-.038.009 1.779-7.086.036-.009-1.778zm-.014-2.605c1.105.33 2.272.513 3.482.513h.064a12.287 12.287 0 003.541-.54l.008 1.593-7.086.038-.009-1.604zm15.66-11.727a12.102 12.102 0 00-3.611-8.591 12.098 12.098 0 00-8.564-3.524 12.097 12.097 0 00-8.657 3.612 12.1 12.1 0 00-3.522 8.63c.026 5.032 3.118 9.344 7.492 11.174l.032 6.108c.003.7.279 1.357.777 1.849.495.49 1.149.758 1.844.758h.014l.379-.002v.015a1.745 1.745 0 001.742 1.733h.009a1.734 1.734 0 001.23-.517c.327-.33.506-.768.504-1.234v-.016l.379-.002a2.602 2.602 0 001.85-.776 2.604 2.604 0 00.758-1.858l-.031-6.104a12.144 12.144 0 003.853-2.627 12.103 12.103 0 003.522-8.628z" />
  );

  const normalHover = (
    <path d="M24.057 32.342h-.059c-2.91 0-5.65-1.127-7.72-3.175a10.904 10.904 0 01-3.255-7.745c-.03-6.053 4.867-11.002 10.92-11.034h.058c2.91 0 5.65 1.127 7.72 3.175a10.904 10.904 0 013.255 7.745 10.905 10.905 0 01-3.174 7.778 10.91 10.91 0 01-7.745 3.256zm3.165 7.333c-.268.27-.623.419-1.004.421l-.74.004a.688.688 0 00-.336-.099h-.003l-2.085.011a.685.685 0 00-.338.102l-.74.004h-.008a1.423 1.423 0 01-1.422-1.414v-.293l7.085-.037.002.293c.002.38-.144.737-.41 1.008zm-2.875 1.888c-.038.038-.154.111-.244.101a.342.342 0 01-.33-.256l.662-.003a.356.356 0 01-.088.158zm-3.817-5.93l7.087-.037.01 1.778-7.088.037-.009-1.778zm-.013-2.596c1.116.332 2.285.505 3.481.505l.065-.001a12.11 12.11 0 003.54-.547l.01 1.602-7.088.037-.008-1.596zm15.66-11.735a12.098 12.098 0 00-3.612-8.592 12.097 12.097 0 00-8.563-3.522l-.065.001c-6.714.034-12.149 5.525-12.114 12.239a12.097 12.097 0 003.611 8.592 12.19 12.19 0 003.88 2.589l.032 6.101a2.624 2.624 0 002.622 2.608h.014l.38-.002v.015a1.745 1.745 0 001.741 1.734h.01a1.734 1.734 0 001.23-.518c.326-.331.505-.769.503-1.233v-.017l.378-.002a2.602 2.602 0 001.851-.776 2.61 2.61 0 00.758-1.858l-.032-6.107c4.355-1.875 7.402-6.22 7.376-11.252zm-21.11-2.52l1.153.332c.988-3.423 4.17-5.828 7.736-5.846.28.007.557.012.83.039l.116-1.195c-.312-.03-.635-.042-.95-.043-4.097.02-7.75 2.782-8.885 6.713zm2.056-10.7l-1.86-2.714-.99.678 1.861 2.714.99-.678zm16.603-2.035l-.989-.68-1.86 2.714.988.68 1.861-2.714zM23.4 6.638h1.2V3.071h-1.2v3.567z" />
  );

  return isHovered ? normalHover : normal;
};

export default LightBulb;
