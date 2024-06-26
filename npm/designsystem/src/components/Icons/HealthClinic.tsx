import React from 'react';

import { SvgPathProps } from '../Icon';

const HealthClinic: React.FC<SvgPathProps> = ({ isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M19.004 28.074h3.009v1.3h-3.009v3.01h-1.3v-3.01h-3.009v-1.3h3.009v-3.009h1.3v3.01zm21.431 10.333v2.57H7.547v-2.57h32.888zm-13.94-1.3h5.425V25.715h-5.425v11.392zm-15.168-15.22l12.637-9.707 12.547 9.591h-.14v15.336H33.22V24.415h-8.025v12.692H11.327v-15.22zm-4.843-2.586L23.937 5.697l17.565 13.595-2.347 2.865-15.193-11.614L8.857 22.144l-2.373-2.843zm31.187 3.357l1.693 1.294 3.991-4.87-19.421-15.03-19.309 15.05 4.034 4.834 1.368-1.05v14.221H6.248v5.17h35.487v-5.17h-4.064V22.658z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M19.004 28.074h3.681v1.3h-3.68v3.681h-1.3v-3.68h-3.682v-1.3h3.681v-3.682h1.3v3.681zm21.431 10.333v2.57H7.547v-2.57h32.888zm-13.94-1.3h5.425V25.715h-5.425v11.392zm-15.168-15.22l12.637-9.707 12.547 9.591h-.14v15.336h-3.15V24.415h-8.026v12.692H11.327v-15.22zm-4.843-2.586L23.937 5.697l17.565 13.595-2.347 2.865-15.193-11.614L8.857 22.144l-2.373-2.843zm31.187 3.357l1.693 1.294 3.991-4.87-19.42-15.03-19.31 15.05 4.034 4.834 1.368-1.05v14.221H6.248v5.17h35.487v-5.17h-4.064V22.658z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default HealthClinic;
