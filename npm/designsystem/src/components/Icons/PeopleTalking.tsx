import React from 'react';

import { SvgPathProps } from './Icon';

const PeopleTalking: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M17.418 23.009a.45.45 0 11.9 0 .45.45 0 01-.9 0zm-4.742 0a.45.45 0 11.899-.001.45.45 0 01-.899 0zm-2.77-2.03h.584a3.665 3.665 0 003.173-1.834 3.713 3.713 0 003.201 1.835h4.161v1.757a5.387 5.387 0 01-5.38 5.38h-.358a5.388 5.388 0 01-5.382-5.38V20.98zm5.381-6.583h.357a5.387 5.387 0 015.381 5.38v.204h-4.16a2.714 2.714 0 01-2.712-2.711v-.191h-1v.239a2.667 2.667 0 01-2.663 2.663h-.585v-.203a5.388 5.388 0 015.382-5.381zm0 15.023h.357a6.69 6.69 0 006.681-6.682v-2.96a6.69 6.69 0 00-6.68-6.682h-.358a6.69 6.69 0 00-6.682 6.682v2.96a6.69 6.69 0 006.682 6.682zm13.808-6.524a.458.458 0 11-.917.001.458.458 0 01.917-.001zm4.838 0a.459.459 0 11-.918 0 .459.459 0 01.918 0zm-1.657-8.8h.364a5.51 5.51 0 015.503 5.503v.218h-1.98a2.73 2.73 0 01-2.726-2.727v-.244h-1v.195a2.78 2.78 0 01-2.776 2.776h-2.888v-.218a5.51 5.51 0 015.503-5.503zm.364 14.025h-.364a5.51 5.51 0 01-5.503-5.503v-1.801h2.888a3.778 3.778 0 003.265-1.882 3.73 3.73 0 003.237 1.882h1.98v1.8a5.51 5.51 0 01-5.503 5.504zm-7.166-8.522v3.019c0 3.752 3.051 6.804 6.802 6.804h.364a6.811 6.811 0 006.803-6.804v-3.02a6.81 6.81 0 00-6.803-6.801h-.364a6.81 6.81 0 00-6.802 6.802zm16.62 23.557H39.27v-3.167h-.9v3.167H26.452v-4.213a9.273 9.273 0 00-1.668-5.282 7.939 7.939 0 013.504-2.324c2.56 1.267 5.718 1.267 8.28 0a8.037 8.037 0 015.525 7.606v4.213zm-16.942 0h-2.715v-3.167h-.9v3.167H9.438v-3.167h-.9v3.167H5.821v-4.213a8.037 8.037 0 015.525-7.606c2.561 1.267 5.72 1.267 8.28 0a8.036 8.036 0 015.525 7.606v4.213zm11.536-13.143l-.254-.073-.233.124c-2.309 1.23-5.237 1.23-7.545 0l-.233-.124-.254.073c-1.629.473-3.056 1.388-4.203 2.625a9.25 9.25 0 00-4.22-2.625l-.254-.073-.233.124c-2.308 1.23-5.236 1.23-7.545 0l-.233-.124-.253.073c-3.949 1.145-6.706 4.818-6.706 8.93v5.513H43.393v-5.513c0-4.113-2.758-7.785-6.705-8.93zM21.72 8.412h4.61v-.8h-4.61v.8zm-.002-1.843h7.438v-.8h-7.438v.8zm-2.429-1.624c0-.495.401-.896.896-.896h9.887c.494 0 .896.4.896.896v4.573a.898.898 0 01-.896.897h-5.858l-1.778 1.143v-1.143h-2.25a.897.897 0 01-.897-.897V4.945zm.896 6.47h1.251v1.975l3.072-1.975h5.564a1.898 1.898 0 001.896-1.897V4.945c0-1.046-.85-1.896-1.896-1.896h-9.887c-1.046 0-1.896.85-1.896 1.896v4.573c0 1.046.85 1.897 1.896 1.897z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M18.717 22.985a.444.444 0 11.888 0 .444.444 0 01-.888 0zm-4.677 0a.444.444 0 11.887 0 .444.444 0 01-.887 0zM9.906 20.99h1.978a3.623 3.623 0 003.13-1.803 3.67 3.67 0 003.157 1.803h2.855v1.746a5.388 5.388 0 01-5.382 5.38h-.356a5.388 5.388 0 01-5.382-5.38V20.99zm5.382-6.595h.356a5.388 5.388 0 015.382 5.38v.215H18.17a2.67 2.67 0 01-2.667-2.667v-.19h-1v.237a2.623 2.623 0 01-2.62 2.62H9.906v-.214a5.388 5.388 0 015.382-5.381zm0 15.023h.356a6.69 6.69 0 006.68-6.682v-2.96a6.69 6.69 0 00-6.68-6.682h-.356a6.69 6.69 0 00-6.682 6.682v2.96a6.69 6.69 0 006.682 6.682zm13.808-6.524a.46.46 0 11-.919 0 .46.46 0 01.919 0zm4.837 0a.458.458 0 11-.917.001.458.458 0 01.917-.001zm-1.656-8.8h.363a5.51 5.51 0 015.503 5.503v.218h-1.98a2.73 2.73 0 01-2.726-2.727v-.244h-1v.195a2.78 2.78 0 01-2.776 2.776h-2.887v-.218a5.51 5.51 0 015.503-5.503zm.363 14.025h-.363a5.508 5.508 0 01-5.503-5.503v-1.801h2.887a3.778 3.778 0 003.265-1.882 3.73 3.73 0 003.237 1.882h1.98v1.8a5.508 5.508 0 01-5.503 5.504zm-7.166-8.522v3.019a6.811 6.811 0 006.803 6.804h.363a6.811 6.811 0 006.803-6.804v-3.02a6.81 6.81 0 00-6.803-6.801h-.363a6.81 6.81 0 00-6.803 6.802zm16.619 23.557h-2.821v-3.167h-.901v3.167H26.45v-4.213a9.273 9.273 0 00-1.667-5.282c.95-1.075 2.14-1.883 3.504-2.324 2.562 1.267 5.72 1.267 8.28 0a8.036 8.036 0 015.525 7.606v4.213zm-16.941 0h-2.715v-3.167h-.9v3.167h-12.1v-3.167h-.9v3.167H5.822v-4.213c0-3.453 2.26-6.544 5.525-7.606 2.56 1.267 5.72 1.267 8.28 0a8.037 8.037 0 015.525 7.606v4.213zm11.536-13.143l-.254-.073-.233.124c-2.31 1.23-5.236 1.23-7.545 0l-.233-.124-.254.073c-1.63.473-3.056 1.388-4.202 2.625a9.263 9.263 0 00-4.22-2.625l-.254-.073-.233.124c-2.31 1.23-5.236 1.23-7.545 0l-.233-.124-.254.073c-3.948 1.145-6.705 4.817-6.705 8.93v5.513h38.869v-5.513c0-4.113-2.756-7.785-6.704-8.93zM21.716 8.41h7.437v-.8h-7.437v.8zm.002-1.842h7.437v-.8h-7.437v.8zm-2.43-1.625c0-.494.402-.896.896-.896h9.887c.495 0 .896.402.896.896v4.574a.897.897 0 01-.896.897h-5.857l-1.78 1.143v-1.143h-2.25a.898.898 0 01-.896-.897V4.944zm.896 6.47h1.25v1.976l3.074-1.975h5.563a1.898 1.898 0 001.896-1.897V4.944c0-1.045-.85-1.896-1.896-1.896h-9.887a1.898 1.898 0 00-1.896 1.896v4.574c0 1.046.85 1.897 1.896 1.897z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default PeopleTalking;
