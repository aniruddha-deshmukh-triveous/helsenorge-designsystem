import React from 'react';

import { getIcon, SvgPathProps } from './Icon';

import { IconSize } from '.';

const AcupunctureBack: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      d="m27.102 20.225-.65-.035-.648-.038c-.076 1.296.525 4.04 3.344 5.14l.473-1.212c-2.631-1.027-2.525-3.74-2.52-3.855Zm-9.046.062c.018.123.419 3.035-1.931 4.197l.576 1.166c3.21-1.589 2.665-5.398 2.64-5.559l-1.285.196Zm5.187-6.273-1.292-.143c-.032.285-.765 7.027.006 11.311.798 4.434.75 6.08.706 7.67-.012.39-.022.778-.022 1.203 0 2.117-.53 4.801-.535 4.827l1.275.254c.023-.114.559-2.834.559-5.08 0-.412.01-.789.022-1.167.047-1.657.096-3.37-.726-7.937-.737-4.097-.001-10.87.007-10.938Zm9.796 17.308c-.714-3.144 1.866-11.586 1.892-11.67l-1.242-.384c-.111.36-2.71 8.861-1.918 12.342.249 1.094.602 2.195.976 3.36.786 2.451 1.599 4.986 1.568 7.842l1.3.014c.032-3.067-.851-5.822-1.631-8.253-.364-1.137-.71-2.21-.945-3.25Zm5.792 3.227a12.168 12.168 0 0 1-.208-4.413c.642-4.714 1.623-12.97.973-15.302-1.144-4.102-3.798-4.643-6.364-5.166-.866-.176-1.761-.359-2.623-.677-2.974-1.1-2.816-3.649-2.807-3.757l-.648-.053-.648-.057c-.11 1.251.51 3.924 3.652 5.085.955.354 1.9.546 2.815.733 2.48.506 4.44.905 5.37 4.242.424 1.516.046 7.04-1.01 14.776a13.492 13.492 0 0 0 .243 4.923l2.435 8.122 1.245-.373-2.425-8.083Zm-26.295-2.113.36.626c.033-.092.064-.183.094-.273.362-1.064.674-1.983.757-2.462.127-.736-.48-3.117-1.211-5.528v7.637Zm-.038-11.928c.479 1.356 2.847 8.213 2.53 10.041-.101.58-.413 1.496-.807 2.658-.861 2.54-2.163 6.373-2.216 9.622l-1.3-.02c.007-.442.042-.893.087-1.346-1.263-1.264-2.512-2.77-3.715-4.5a10.752 10.752 0 0 1-1.928-5.84c-.087-3.004.227-7.25.457-10.348.12-1.62.224-3.02.238-3.788.07-3.992 2.909-6.589 8.436-7.719 3.426-.7 3.07-3.977 3.053-4.115l1.29-.157c.194 1.59-.412 4.795-4.083 5.545-4.917 1.005-7.337 3.122-7.396 6.47-.015.804-.115 2.152-.241 3.86-.228 3.071-.54 7.277-.454 10.214a9.456 9.456 0 0 0 1.695 5.135 33.597 33.597 0 0 0 2.875 3.61c.318-1.785.832-3.566 1.33-5.117l-1.026-1.778a.651.651 0 0 1-.087-.325V20.724c0-.316.228-.587.54-.64a.646.646 0 0 1 .722.424Zm7.633 16.87a.65.65 0 1 0 .706 1.093.65.65 0 0 0-.706-1.093Zm4.797 0a.65.65 0 1 0 .703 1.093.65.65 0 0 0-.703-1.093Zm-4.476-2.512a.649.649 0 1 0 .704 1.092.649.649 0 1 0-.704-1.092Zm7.067 0a.65.65 0 1 0 .706 1.093.65.65 0 0 0-.706-1.093Zm0-2.727a.65.65 0 1 0 .706 1.093.65.65 0 0 0-.706-1.093Zm2.2 0a.65.65 0 1 0 .706 1.093.65.65 0 0 0-.706-1.093Zm-13.68 0a.65.65 0 1 0 .703 1.092.65.65 0 0 0-.703-1.092Zm2.2 2.727a.65.65 0 1 0 .703 1.092.65.65 0 0 0-.703-1.092Zm0-2.727a.65.65 0 1 0 .703 1.092.65.65 0 0 0-.703-1.092Zm2.213.06a.649.649 0 1 0 .704 1.092.649.649 0 1 0-.704-1.092Zm4.806 2.667a.649.649 0 1 0 .704 1.092.649.649 0 1 0-.704-1.092Zm.96-2.533a.65.65 0 1 1-1.092.704.65.65 0 0 1 1.092-.704Z"
      fillRule="evenodd"
    />
  );

  const normalHover = (
    <path
      d="m27.102 20.225-.649-.035-.649-.038c-.076 1.296.525 4.04 3.344 5.14l.473-1.212c-2.63-1.027-2.525-3.74-2.519-3.855Zm-9.046.062c.018.124.42 3.035-1.932 4.197l.577 1.166c3.21-1.589 2.665-5.398 2.64-5.559l-1.285.196Zm5.186-6.273-1.292-.143c-.032.285-.764 7.027.006 11.311.798 4.434.751 6.08.706 7.67-.01.39-.022.778-.022 1.203 0 2.117-.529 4.801-.535 4.827l1.276.254c.022-.114.56-2.834.56-5.08 0-.412.01-.789.02-1.167.048-1.657.097-3.37-.725-7.937-.737-4.097 0-10.87.006-10.938Zm9.797 17.308c-.715-3.144 1.866-11.586 1.892-11.67l-1.243-.384c-.11.36-2.708 8.861-1.917 12.343.248 1.093.602 2.193.975 3.357.786 2.452 1.6 4.987 1.57 7.844l1.3.014c.031-3.067-.853-5.823-1.633-8.254-.364-1.137-.708-2.21-.944-3.25Zm5.792 3.227a12.149 12.149 0 0 1-.208-4.413c.784-5.76 1.59-13.089.973-15.302-1.144-4.102-3.798-4.643-6.364-5.166-.866-.176-1.762-.359-2.624-.677-2.973-1.1-2.815-3.649-2.807-3.757l-.648-.053-.647-.057c-.11 1.251.511 3.924 3.652 5.085.955.354 1.9.546 2.814.733 2.481.506 4.441.905 5.372 4.242.422 1.514.045 7.038-1.01 14.776a13.495 13.495 0 0 0 .241 4.923l2.436 8.122 1.245-.373-2.425-8.083Zm-26.296-2.113.362.626.093-.273c.361-1.064.673-1.983.756-2.462.128-.736-.478-3.117-1.21-5.528v7.637Zm-.037-11.928c.478 1.356 2.847 8.213 2.53 10.041-.102.58-.413 1.496-.807 2.658-.862 2.54-2.163 6.373-2.217 9.622l-1.299-.02c.007-.442.041-.893.087-1.346-1.263-1.264-2.513-2.77-3.715-4.5a10.747 10.747 0 0 1-1.928-5.84c-.088-3.004.227-7.25.457-10.35.12-1.619.224-3.018.237-3.786.072-3.992 2.91-6.589 8.436-7.719 3.427-.7 3.071-3.977 3.054-4.115l1.291-.157c.192 1.59-.414 4.795-4.085 5.545-4.917 1.006-7.336 3.122-7.396 6.47-.014.804-.114 2.152-.24 3.858-.228 3.072-.54 7.28-.454 10.216a9.448 9.448 0 0 0 1.695 5.135 33.474 33.474 0 0 0 2.875 3.61c.318-1.785.831-3.566 1.33-5.117l-1.027-1.778a.651.651 0 0 1-.087-.325V20.724a.651.651 0 0 1 1.263-.216Zm7.633 17.67a.649.649 0 1 0 .704 1.092.649.649 0 1 0-.704-1.092Zm4.796 0a.65.65 0 1 0 .704 1.092.65.65 0 0 0-.704-1.092Zm-4.476-3.312a.65.65 0 1 0 .706 1.093.65.65 0 0 0-.706-1.093Zm7.068 0a.649.649 0 1 0 .704 1.092.65.65 0 1 0-.704-1.092Zm0-3.327a.649.649 0 1 0 .704 1.092.65.65 0 1 0-.704-1.092Zm2.2 0a.649.649 0 1 0 .704 1.092.65.65 0 1 0-.704-1.092Zm-13.68 0a.649.649 0 1 0 .704 1.092.649.649 0 1 0-.704-1.092Zm2.2 3.327a.649.649 0 1 0 .704 1.092.649.649 0 1 0-.704-1.092Zm0-3.327a.649.649 0 1 0 .704 1.092.649.649 0 1 0-.704-1.092Zm2.212.06a.65.65 0 1 0 .706 1.093.65.65 0 0 0-.706-1.093Zm4.807 3.267a.65.65 0 1 0 .703 1.093.65.65 0 0 0-.703-1.093Zm.96-3.133a.649.649 0 1 1-1.093.704.649.649 0 1 1 1.092-.704Z"
      fillRule="evenodd"
    />
  );

  return getIcon({ size: IconSize.Medium, isHovered, normal, normalHover });
};

export default AcupunctureBack;
