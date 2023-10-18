import React from 'react';

import { SvgPathProps } from '../Icon';

const Amputation: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path d="M34.878 30.85a1.326 1.326 0 01-1.727-.936l-2.727-9.09a.725.725 0 00-.787-.531c-.325.042-.628.387-.627.715l.033 7.975-4.376 1.448-.011-1.3-.003-.117a.642.642 0 00-.666-.633.65.65 0 00-.633.65v.016l.01 12.29a2.182 2.182 0 01-4.363 0l.059-20.332a.72.72 0 00-.698-.717c-.298 0-.627.232-.712.514l-2.738 9.135a1.311 1.311 0 01-.66.834 1.307 1.307 0 01-1.061.08 1.322 1.322 0 01-.852-1.555l2.636-10.197c.632-2.6 3.832-4.344 6.425-4.344h5.268c2.594 0 5.794 1.745 6.429 4.354l2.63 10.178a1.32 1.32 0 01-.85 1.564zm-7.992 6.166a2.177 2.177 0 01-2.071-1.533l4.25-1.306.002.662a2.185 2.185 0 01-2.181 2.177zm1.073-3.545l-3.258 1-.02-2.296 3.278 1.296zm1.1-.641l-3.855-1.524 3.844-1.271.012 2.795zm7.928-3.86l-2.63-10.178c-.801-3.296-4.615-5.337-7.69-5.337H21.4c-3.074 0-6.887 2.04-7.686 5.328L11.078 28.98a2.62 2.62 0 001.684 3.098 2.63 2.63 0 003.402-1.79l1.584-5.284-.047 16.333a3.489 3.489 0 003.483 3.475 3.49 3.49 0 003.482-3.472l-.003-3.83a3.463 3.463 0 002.223.807 3.49 3.49 0 003.482-3.48l-.041-9.813 1.572 5.243a2.632 2.632 0 003.409 1.81 2.618 2.618 0 001.679-3.107zM23.907 4.265a3.054 3.054 0 013.051 3.05 3.055 3.055 0 01-3.051 3.053 3.056 3.056 0 01-3.052-3.052 3.054 3.054 0 013.052-3.051m0 7.403a4.358 4.358 0 004.352-4.352c0-2.4-1.953-4.352-4.352-4.352a4.358 4.358 0 00-4.353 4.352 4.359 4.359 0 004.353 4.352" />
  );

  const normalHover = (
    <path d="M32.704 31.428a1.31 1.31 0 01-1.035-.247 1.302 1.302 0 01-.52-.912l-.706-9.33a.701.701 0 00-.802-.648c-.327.04-.632.388-.631.717l.033 7.976-4.376 1.447-.011-1.3-.003-.117a.65.65 0 00-1.299.033l.01 12.29a2.185 2.185 0 01-2.181 2.174 2.183 2.183 0 01-2.181-2.173l.057-20.333a.72.72 0 00-.697-.717c-.3 0-.627.232-.712.514l-2.738 9.135a1.311 1.311 0 01-.66.834 1.307 1.307 0 01-1.061.08 1.32 1.32 0 01-.851-1.555l2.635-10.197c.63-2.6 3.832-4.344 6.425-4.344h5.268c2.576 0 5.752 1.722 6.413 4.29l.709 10.973a1.323 1.323 0 01-1.086 1.41zm-5.818 5.588a2.18 2.18 0 01-2.072-1.533l4.25-1.306.003.662a2.185 2.185 0 01-2.181 2.177zm1.073-3.545l-3.258 1-.02-2.296 3.278 1.296zm1.1-.641l-3.855-1.524 3.844-1.271.01 2.795zm5.315-13.926a.594.594 0 00-.017-.112c-.8-3.297-4.614-5.338-7.69-5.338H21.4c-3.074 0-6.887 2.04-7.685 5.328L11.079 28.98a2.615 2.615 0 001.683 3.097 2.627 2.627 0 003.402-1.79l1.584-5.283-.047 16.333a3.488 3.488 0 003.482 3.475 3.49 3.49 0 003.483-3.472l-.003-3.83a3.463 3.463 0 002.223.807 3.49 3.49 0 003.482-3.48l-.014-3.156c.15.202.328.384.532.538a2.652 2.652 0 002.048.488 2.615 2.615 0 002.152-2.783l-.712-11.02zM25.766 4.713a3.054 3.054 0 013.052 3.05 3.056 3.056 0 01-3.052 3.053 3.055 3.055 0 01-3.05-3.052 3.054 3.054 0 013.05-3.051m0 7.403a4.359 4.359 0 004.353-4.352c0-2.4-1.954-4.352-4.353-4.352a4.357 4.357 0 00-4.352 4.352 4.358 4.358 0 004.352 4.352" />
  );

  return isHovered ? normalHover : normal;
};

export default Amputation;
