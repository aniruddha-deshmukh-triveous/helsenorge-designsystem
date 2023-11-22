import React from 'react';

import { SvgPathProps } from '../Icon';

const EarHearingAid: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path d="M12.892 9.847c1.891-2.167 4.684-3.964 8.708-3.964.366 0 .737.019 1.111.054 1.344.559 2.423 1.159 3.298 1.766-1.252-.6-2.727-.962-4.452-.962-5.493 0-8.564 3.82-10.039 7.241l1.194.515c1.375-3.19 4.094-6.456 8.845-6.456 3.365 0 5.6 1.544 7.055 3.49 1.473 1.97 2.141 4.35 2.299 5.925.238 2.387-.18 4.907-.846 7.426-.42 1.586-.921 3.122-1.41 4.616-.294.903-.584 1.79-.848 2.665-.228.757-.427 1.45-.616 2.111v.001c-.198.691-.386 1.346-.585 1.996-.378 1.23-.752 2.279-1.207 3.145-.453.862-.971 1.517-1.624 1.98-.649.46-1.473.762-2.586.847-1.736.133-3.15-.63-4.159-2.018-1.022-1.407-1.624-3.461-1.624-5.824h-1.3c0 2.562.65 4.905 1.873 6.589 1.237 1.702 3.064 2.721 5.31 2.55 1.306-.1 2.366-.465 3.238-1.084.868-.616 1.507-1.454 2.023-2.436.512-.976.915-2.12 1.299-3.368.191-.623.39-1.318.598-2.041.194-.678.396-1.38.605-2.073.245-.814.527-1.677.818-2.57v-.001c.2-.613.405-1.24.606-1.874l.287.166c1.193.689 2.715.552 3.79.264.687-.184 1.438-.752 2.072-1.465a7.782 7.782 0 0 0 1.588-2.775c.64-2.033 1.154-5.519.514-8.294-.384-1.663-.862-2.947-1.518-4.083-.655-1.135-1.47-2.096-2.491-3.124-2.115-2.13-4.896-3.603-11.807-4.134v.002a13.18 13.18 0 0 0-1.311-.067c-4.468 0-7.599 2.016-9.687 4.41-2.311 2.649-3.663 5.973-3.026 10.254.401 2.7 2.172 4.767 4.353 5.894 1.202.62 2.364.745 3.437.698.626.018 1.164.193 1.579.498.432.319.772.81.932 1.518.156.692.05 1.316-.273 1.84-.328.531-.911 1.01-1.788 1.335l.453 1.219c.4-.149.766-.329 1.095-.539.34.438.706.812 1.153 1.02.67.311 1.368.193 2.128-.146.899-.402 1.487-1.2 1.775-2.192.287-.984.29-2.186.027-3.505-.277-1.386-1.028-2.596-1.964-3.281-.47-.345-1.018-.577-1.595-.591-.592-.016-1.16.2-1.633.656-.237.228-.453.467-.588.73a17.85 17.85 0 0 1-1.056.12c-.978-1.695-1.99-4.974-.697-7.955 1.273-2.935 3.533-4.016 5.607-3.826 2.107.193 4.134 1.702 4.901 4.207l1.243-.38c-.916-2.995-3.377-4.88-6.025-5.122-2.681-.245-5.442 1.2-6.919 4.604-1.35 3.116-.56 6.41.41 8.445a4.9 4.9 0 0 1-1.605-.508c-1.872-.967-3.334-2.707-3.664-4.93-.573-3.855.624-6.807 2.72-9.209Z" />
  );

  const normalHover = (
    <>
      <path d="M12.892 9.847c1.902-2.179 4.49-4.106 9.012-4.106.738 0 1.49.028 2.235.083 4.465.946 6.405 2.922 7.42 4.313 1.275 1.748 2.831 5.024 3.007 8.124.206 3.65-.307 5.562-1.278 8.527l-.176.536.506.25c.643.317 1.5.4 2.265.379.78-.021 1.575-.152 2.148-.347.645-.219 1.398-.78 2.041-1.51.654-.742 1.25-1.723 1.524-2.847.514-2.1.605-5.906-.208-8.61-.486-1.612-1.003-2.942-1.762-4.115-.764-1.181-1.752-2.173-3.143-3.143-2.432-1.697-5.33-2.775-12.238-2.852a31.784 31.784 0 0 0-2.341-.088c-4.992 0-7.913 2.17-9.991 4.552-2.311 2.649-3.663 5.973-3.026 10.255.401 2.7 2.172 4.767 4.353 5.893 1.202.62 2.364.745 3.437.698.626.018 1.164.193 1.579.498.432.319.772.81.932 1.518.156.693.05 1.316-.273 1.84-.328.532-.911 1.01-1.788 1.335l.453 1.22c.4-.15.766-.33 1.095-.54.34.438.706.812 1.153 1.02.67.312 1.368.194 2.128-.146.899-.401 1.487-1.199 1.775-2.192.287-.984.29-2.186.027-3.504-.277-1.387-1.028-2.597-1.964-3.282-.47-.344-1.018-.576-1.595-.591-.592-.015-1.16.201-1.633.657-.237.228-.453.466-.588.73a18.02 18.02 0 0 1-1.056.119c-.978-1.694-1.99-4.974-.697-7.954 1.273-2.936 3.533-4.016 5.607-3.827 2.107.193 4.134 1.703 4.901 4.207l1.243-.38c-.916-2.995-3.377-4.88-6.025-5.121-2.681-.245-5.442 1.199-6.919 4.603-1.35 3.116-.56 6.411.41 8.445a4.899 4.899 0 0 1-1.605-.508c-1.872-.967-3.334-2.707-3.664-4.93-.573-3.855.624-6.807 2.72-9.209Z" />
      <path d="M21.557 8.042c-4.751 0-7.47 3.266-8.845 6.455l-1.194-.515c1.475-3.42 4.546-7.24 10.04-7.24 3.835 0 6.433 1.789 8.095 4.01 1.643 2.197 2.375 4.817 2.551 6.575.261 2.613-.2 5.308-.882 7.887-.426 1.611-.953 3.226-1.451 4.753v.001a122.38 122.38 0 0 0-.82 2.57c-.208.693-.41 1.396-.604 2.073v.001c-.208.723-.407 1.417-.598 2.04-.384 1.249-.787 2.392-1.3 3.369-.515.981-1.154 1.82-2.022 2.436-.872.619-1.932.983-3.239 1.083-2.245.172-4.072-.848-5.31-2.55-1.223-1.683-1.872-4.026-1.872-6.588h1.3c0 2.362.602 4.417 1.624 5.824 1.009 1.387 2.423 2.15 4.159 2.017 1.113-.085 1.937-.386 2.586-.846.653-.464 1.172-1.119 1.624-1.98.455-.867.83-1.916 1.207-3.146.2-.65.386-1.303.584-1.995v-.001c.19-.66.389-1.355.617-2.112.264-.874.554-1.761.849-2.664.488-1.495.99-3.03 1.409-4.617.666-2.519 1.084-5.039.846-7.426-.158-1.575-.826-3.955-2.3-5.925-1.454-1.945-3.689-3.49-7.054-3.49Z" />
    </>
  );

  return isHovered ? normalHover : normal;
};

export default EarHearingAid;
