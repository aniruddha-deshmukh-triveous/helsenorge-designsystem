import React from 'react';

import { SvgPathProps } from '../Icon';

const PersonOverweight: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path d="M34.888 30.85a1.326 1.326 0 01-1.727-.936l-2.727-9.09a.717.717 0 00-.788-.532l-.627.141v.571l.035.208c.022.067 2.243 6.686 1.698 9.554-.156.822-.614 1.366-1.018 1.846-.349.413-.678.803-.678 1.301 0 2.24.02 7.421.02 7.421a2.182 2.182 0 01-4.363.003h-.036l.026-.002-.047-7.204-.003-.118-1.299.033.011 7.291a2.183 2.183 0 01-4.364.001s.021-5.184.021-7.425c0-.498-.329-.888-.677-1.3-.404-.48-.862-1.025-1.019-1.847-.544-2.865 1.676-9.487 1.7-9.554l.033-.208a.72.72 0 00-.627-.712l-.623-.019-2.898 9.663a1.308 1.308 0 01-.66.834 1.305 1.305 0 01-1.06.08 1.322 1.322 0 01-.853-1.555l2.636-10.197c.632-2.599 3.832-4.344 6.426-4.344h5.278c2.594 0 5.794 1.745 6.43 4.354l2.63 10.178a1.322 1.322 0 01-.85 1.564m2.11-1.88l-2.63-10.179c-.802-3.296-4.616-5.337-7.69-5.337H21.4c-3.075 0-6.888 2.041-7.687 5.328L11.077 28.98a2.62 2.62 0 001.684 3.098 2.633 2.633 0 003.243-1.353c.013.098.028.192.045.284.22 1.157.845 1.9 1.302 2.442.146.173.347.412.37.463 0 2.24-.02 7.42-.02 7.423a3.489 3.489 0 003.482 3.475 3.48 3.48 0 002.856-1.5 3.48 3.48 0 002.856 1.5 3.489 3.489 0 003.482-3.479s-.02-5.18-.025-7.38c.028-.09.228-.329.375-.502.457-.542 1.082-1.285 1.302-2.442.017-.093.033-.188.045-.288a2.63 2.63 0 003.243 1.357 2.62 2.62 0 001.68-3.108M23.907 4.264a3.054 3.054 0 013.051 3.051 3.055 3.055 0 01-3.051 3.052 3.056 3.056 0 01-3.052-3.052 3.054 3.054 0 013.052-3.05m0 7.402a4.358 4.358 0 004.352-4.352c0-2.4-1.953-4.352-4.352-4.352a4.358 4.358 0 00-4.353 4.352 4.359 4.359 0 004.353 4.352" />
  );

  const normalHover = (
    <path d="M34.877 30.85a1.326 1.326 0 01-1.727-.936l-2.726-9.09a.715.715 0 00-.783-.533l-.624.137-.01.657.024.085c.018.068 1.759 6.708 1.21 9.596-.162.855-.485 1.433-.744 1.898-.242.433-.451.807-.451 1.25 0 2.24.02 7.42.02 7.42a2.184 2.184 0 01-2.18 2.176 2.184 2.184 0 01-2.182-2.173h-.026l.026-.002-.048-7.204-.003-.118-1.298.033.01 7.291a2.182 2.182 0 01-4.363.001s.02-5.184.02-7.425c0-.442-.208-.816-.451-1.25-.258-.464-.582-1.043-.744-1.897-.55-2.888 1.193-9.528 1.21-9.596l.023-.166a.72.72 0 00-.627-.712l-.623-.019-2.898 9.663a1.311 1.311 0 01-.66.834 1.307 1.307 0 01-1.061.08 1.322 1.322 0 01-.852-1.555l2.636-10.197c.63-2.599 3.832-4.344 6.425-4.344h5.268c2.594 0 5.794 1.745 6.429 4.354l2.63 10.178a1.322 1.322 0 01-.85 1.564m2.11-1.88l-2.63-10.179c-.801-3.296-4.615-5.337-7.69-5.337H21.4c-3.074 0-6.887 2.041-7.686 5.328L11.078 28.98a2.62 2.62 0 001.684 3.098 2.631 2.631 0 003.402-1.789l.26-.869c0 .584.038 1.125.126 1.59.2 1.06.598 1.77.887 2.288.133.241.285.512.285.616 0 2.24-.021 7.42-.021 7.423a3.489 3.489 0 003.483 3.475 3.478 3.478 0 002.85-1.494 3.48 3.48 0 002.852 1.494 3.49 3.49 0 003.482-3.479s-.021-5.18-.021-7.419c0-.104.158-.387.285-.615.289-.518.685-1.228.887-2.29a8.808 8.808 0 00.126-1.59l.253.848a2.632 2.632 0 003.409 1.811 2.62 2.62 0 001.68-3.108M23.907 4.264a3.054 3.054 0 013.051 3.051 3.055 3.055 0 01-3.051 3.052 3.056 3.056 0 01-3.052-3.052 3.054 3.054 0 013.052-3.05m0 7.402a4.358 4.358 0 004.352-4.352c0-2.4-1.953-4.352-4.352-4.352a4.358 4.358 0 00-4.353 4.352 4.359 4.359 0 004.353 4.352" />
  );

  return isHovered ? normalHover : normal;
};

export default PersonOverweight;
