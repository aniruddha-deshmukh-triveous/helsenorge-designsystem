import React from 'react';

import { SvgPathProps } from './Icon';

const Taxi: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M15.907 31.097h-.005a1.04 1.04 0 01-.737-.303 1.04 1.04 0 01-.31-.738c-.002-.28.106-.543.302-.74.198-.202.45-.272.745-.312.277 0 .539.108.736.303a1.049 1.049 0 01-.731 1.79zm-.005-3.394h-.013a2.332 2.332 0 00-1.655.697 2.33 2.33 0 00-.68 1.662c.004.627.25 1.216.697 1.656.442.44 1.028.68 1.65.68h.013a2.35 2.35 0 002.335-2.36 2.339 2.339 0 00-.696-1.656 2.338 2.338 0 00-1.651-.679zm5.072 1.67l.007 1.301 6.047-.03-.007-1.302-6.047.031zm-10.211 5.971l-.056-10.888 26.53-.137.057 10.888-26.531.137zm22.384 4.28a1.451 1.451 0 01-.994.387h-.01c-.76 0-1.38-.558-1.383-1.247l-.012-2.224 2.773-.013.01 2.221c.003.328-.134.64-.384.875zm-16.2.083a1.451 1.451 0 01-.993.388h-.008c-.761 0-1.382-.558-1.385-1.247l-.011-2.224 2.772-.013.012 2.221c0 .328-.136.64-.386.875zm-2.172-25.85a1.278 1.278 0 011.239-1.018l15.795-.082c.603.03 1.124.418 1.25 1.003l1.999 9.271-22.185.115 1.902-9.29zM38.6 36.5l-.07-13.488-2.144.011-2.056-9.536c-.255-1.184-1.315-2.024-2.527-2.03l-15.795.081a2.584 2.584 0 00-2.506 2.056l-1.958 9.558-2.144.011.07 13.488 3.779-.02.012 2.223c.007 1.404 1.21 2.542 2.685 2.542h.015a2.748 2.748 0 001.88-.743 2.482 2.482 0 00.793-1.827l-.012-2.223 10.827-.055.01 2.222c.008 1.404 1.21 2.542 2.685 2.542h.015a2.748 2.748 0 001.88-.743 2.486 2.486 0 00.794-1.826l-.012-2.223 3.779-.02zm-6.494-5.487c-.267.02-.543-.106-.742-.303a1.04 1.04 0 01-.008-1.479c.198-.2.467-.336.745-.31.575 0 1.044.465 1.047 1.04a1.049 1.049 0 01-1.042 1.052zM32.1 27.62h-.012a2.338 2.338 0 00-1.657.697 2.326 2.326 0 00-.678 1.662c.003.628.25 1.216.696 1.656.442.44 1.028.68 1.65.68h.013a2.351 2.351 0 002.335-2.36A2.35 2.35 0 0032.1 27.62zm-5.178-17.314l-.007-1.3-6.047.03.007 1.301 6.047-.03z" />
  );

  const normalHover = (
    <path d="M20.974 29.373l.007 1.301 6.047-.03-.007-1.302-6.047.031zm-10.21 5.971l-.057-10.888 26.53-.138.056 10.89-26.53.136zm22.382 4.28a1.447 1.447 0 01-.993.387 1.473 1.473 0 01-.998-.377 1.193 1.193 0 01-.395-.87l-.012-2.224 2.773-.014.012 2.222a1.19 1.19 0 01-.387.875zm-17.193.471h-.007c-.761 0-1.382-.558-1.385-1.247l-.012-2.224 2.773-.014.01 2.222c.005.692-.614 1.26-1.38 1.263zm-1.178-26.24a1.277 1.277 0 011.24-1.016l15.794-.082c.605.03 1.124.418 1.25 1.003l1.999 9.27-22.186.115 1.903-9.29zM38.6 36.5l-.07-13.488-2.144.01-2.056-9.536c-.255-1.183-1.311-2.073-2.527-2.03l-15.795.082a2.586 2.586 0 00-2.507 2.056l-1.957 9.557-2.144.012.07 13.487 3.779-.019.012 2.222c.007 1.405 1.21 2.542 2.685 2.542h.014c1.482-.007 2.68-1.16 2.674-2.569l-.012-2.224 10.826-.054.012 2.221c.003.692.292 1.336.812 1.818a2.735 2.735 0 001.872.724h.016a2.734 2.734 0 001.879-.743 2.471 2.471 0 00.793-1.826l-.011-2.223L38.6 36.5zm-22.693-5.403h-.005a1.044 1.044 0 01-1.047-1.04 1.047 1.047 0 011.04-1.053h.007c.574 0 1.044.466 1.047 1.04a1.049 1.049 0 01-1.042 1.053zm-.017-3.394a2.35 2.35 0 00-2.335 2.358 2.33 2.33 0 00.696 1.657 2.33 2.33 0 001.65.68h.013a2.348 2.348 0 002.334-2.36 2.338 2.338 0 00-2.358-2.335zm16.216 3.31c-.257.018-.543-.107-.742-.303a1.035 1.035 0 01-.31-.738 1.04 1.04 0 01.302-.742c.199-.2.46-.336.745-.31.575 0 1.044.466 1.047 1.04a1.049 1.049 0 01-1.042 1.053zM32.1 27.62h-.013a2.339 2.339 0 00-1.656.696 2.333 2.333 0 00-.678 1.662 2.33 2.33 0 00.696 1.657 2.33 2.33 0 001.65.68h.013a2.35 2.35 0 002.335-2.36A2.35 2.35 0 0032.1 27.62zM23.246 6.095h1.3V3.818h-1.3v2.277zm-2.37 4.241l6.047-.03-.007-1.302-6.047.031.007 1.301zm.902-3.499l-1.384-2.019-1.072.735 1.384 2.018 1.072-.734zm6.692-1.284l-1.072-.735-1.385 2.02 1.072.733 1.385-2.018z" />
  );

  return isHovered ? normalHover : normal;
};

export default Taxi;
