import React from 'react';
import { SvgPathProps } from './Icon';

const Mirror: React.FC<SvgPathProps> = ({ isExtraSmall, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M23.868 6.896c3.315-1.231 6.706-1.035 9.55.555 2.842 1.59 4.785 4.377 5.47 7.846.677 3.43.041 7.125-1.792 10.403-2.739 4.897-7.572 7.76-12.24 7.76-.848 0-1.687-.103-2.509-.296l-3.293 6.882a3.54 3.54 0 01-4.845 1.4 3.522 3.522 0 01-1.682-2.13 3.52 3.52 0 01.318-2.696l4.211-6.532c-1.444-1.546-2.453-3.53-2.906-5.818-.677-3.431-.04-7.125 1.792-10.402 1.833-3.278 4.648-5.753 7.926-6.972zM18.02 30.995l-4.06 6.295c-.585 1.046-.197 2.418.884 3.022a2.234 2.234 0 001.708.202 2.237 2.237 0 001.35-1.066l3.188-6.667a10.412 10.412 0 01-1.468-.665 10.49 10.49 0 01-1.602-1.121zM28.17 7.398c-1.263 0-2.56.238-3.848.717-2.989 1.11-5.56 3.38-7.244 6.387-1.682 3.008-2.269 6.388-1.65 9.516.61 3.09 2.324 5.563 4.83 6.964 5.205 2.912 12.25.258 15.704-5.917 1.683-3.008 2.27-6.388 1.651-9.516-.609-3.09-2.325-5.562-4.829-6.963a9.39 9.39 0 00-4.615-1.188zm-9.57 7.955c2.84-5.08 8.705-7.224 13.073-4.781 4.367 2.444 5.61 8.564 2.77 13.643-2.045 3.654-5.656 5.79-9.147 5.79a7.986 7.986 0 01-3.927-1.01c-4.369-2.443-5.61-8.562-2.77-13.642zm9.135-4.493c-3.03 0-6.195 1.898-8 5.128-2.492 4.453-1.474 9.78 2.268 11.873 3.742 2.092 8.813.173 11.304-4.281 2.491-4.453 1.474-9.78-2.269-11.873a6.718 6.718 0 00-3.303-.847zm.258 8.847l.353 1.25-3.88 1.097-.353-1.251 3.88-1.096zm2.341-4.167l.354 1.251-5.185 1.465-.354-1.25 5.185-1.466z" />
  );

  const normalHover = (
    <path d="M23.869 6.896c3.315-1.231 6.706-1.035 9.549.555C39.25 10.713 40.9 18.899 37.097 25.7c-2.74 4.897-7.573 7.76-12.241 7.76-.847 0-1.686-.103-2.508-.296l-3.293 6.882a3.54 3.54 0 01-4.845 1.4 3.523 3.523 0 01-1.683-2.13 3.529 3.529 0 01.318-2.696l4.212-6.532c-1.445-1.546-2.453-3.53-2.906-5.818-.677-3.431-.041-7.125 1.792-10.402 1.833-3.278 4.648-5.753 7.926-6.972zm-5.85 24.099l-4.06 6.295c-.584 1.046-.196 2.418.885 3.022.524.294 1.13.364 1.708.202a2.235 2.235 0 001.349-1.066l3.189-6.666c-.5-.186-.992-.4-1.468-.666a10.55 10.55 0 01-1.603-1.121zm10.15-23.597c-1.262 0-2.56.238-3.847.717-2.99 1.11-5.562 3.38-7.244 6.387-1.682 3.008-2.27 6.388-1.651 9.516.61 3.09 2.325 5.563 4.829 6.964 5.206 2.91 12.252.258 15.706-5.917 3.454-6.175 2.028-13.567-3.18-16.48a9.385 9.385 0 00-4.613-1.187zm-9.57 7.955c2.84-5.08 8.706-7.223 13.074-4.781 4.367 2.444 5.61 8.564 2.769 13.643-2.045 3.654-5.655 5.79-9.146 5.79a7.993 7.993 0 01-3.928-1.01c-4.368-2.443-5.61-8.562-2.77-13.642zm9.136-4.493c-3.031 0-6.195 1.898-8.001 5.128-2.491 4.453-1.474 9.78 2.269 11.873 3.742 2.093 8.813.173 11.304-4.281 2.49-4.453 1.473-9.78-2.27-11.873a6.718 6.718 0 00-3.302-.847zm1.144 8.596l.354 1.25-3.7 1.047-.354-1.252 3.7-1.046zm2.826-4.303l.353 1.25-5.652 1.599-.354-1.252 5.653-1.598z" />
  );

  return isHovered ? normalHover : normal;
};

export default Mirror;
