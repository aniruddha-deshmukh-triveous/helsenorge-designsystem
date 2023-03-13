import React from 'react';

import { SvgPathProps } from './Icon';

const MaleDoctorAndPerson: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <g>
      <path d="M43.51 41.823h-3.224V34.91h-.9v6.913H28.334v-8.436c0-2.607-1.023-5.047-2.724-6.879a7.976 7.976 0 012.739-1.535c2.796 1.393 6.255 1.393 9.05 0 3.61 1.162 6.11 4.576 6.11 8.39v8.46zm-16.476 0H5.762v-8.436c0-3.627 2.266-6.888 5.595-8.199v5.467a1.924 1.924 0 00-1.448 1.857c0 1.062.864 1.925 1.925 1.925a1.926 1.926 0 001.925-1.925c0-.895-.617-1.643-1.445-1.857v-5.469c2.578 1.126 5.626 1.122 8.197-.013v3.51a2.163 2.163 0 00-1.683 2.104v2.973h.957v-2.973a1.205 1.205 0 012.409 0v2.973h.956v-2.973a2.162 2.162 0 00-1.681-2.104V25.2c3.313 1.318 5.564 4.571 5.564 8.187v8.435zM11.835 31.544a.968.968 0 110 1.936.968.968 0 010-1.936zm25.68-7.895l-.252-.074-.233.125c-2.543 1.355-5.77 1.355-8.314 0l-.233-.125-.254.074a9.293 9.293 0 00-3.563 1.958 10.014 10.014 0 00-3.627-1.932l-.252-.075-.233.125c-2.543 1.356-5.77 1.356-8.314 0l-.233-.125-.253.075c-4.295 1.245-7.294 5.24-7.294 9.711v9.736h23.223v.001H44.81v-9.762c0-4.474-2.998-8.468-7.294-9.712zM26.593 13.507h3.22a4.09 4.09 0 003.574-2.107 4.036 4.036 0 003.54 2.107h2.228v2.019a6.09 6.09 0 01-6.083 6.082h-.398a6.09 6.09 0 01-6.082-6.082v-2.02zm6.081-7.366h.398a6.09 6.09 0 016.083 6.082v.284h-2.227a3.033 3.033 0 01-3.03-3.03v-.268h-1v.214c0 1.7-1.385 3.084-3.086 3.084h-3.22v-.284a6.09 6.09 0 016.082-6.082zm0 16.767h.398c4.071 0 7.383-3.312 7.383-7.382v-3.303c0-4.07-3.311-7.383-7.382-7.383h-.398c-4.07 0-7.383 3.313-7.383 7.383v3.303c0 4.07 3.313 7.382 7.383 7.382z" />
      <path d="M35.52 16.332a.502.502 0 100-1.005.502.502 0 000 1.005m-5.293 0a.502.502 0 100-1.005.502.502 0 000 1.005m-20.11-2.825h.728a4.034 4.034 0 003.54-2.107 4.088 4.088 0 003.574 2.107h4.72v2.019a6.09 6.09 0 01-6.083 6.082h-.397a6.09 6.09 0 01-6.082-6.082v-2.02zm6.082-7.366h.397a6.09 6.09 0 016.084 6.082v.284h-4.721a3.088 3.088 0 01-3.084-3.084v-.214h-1v.268c0 1.67-1.36 3.03-3.03 3.03h-.728v-.284a6.09 6.09 0 016.082-6.082zm0 16.767h.397c4.072 0 7.384-3.312 7.384-7.382v-3.303c0-4.07-3.312-7.383-7.384-7.383h-.397c-4.07 0-7.383 3.313-7.383 7.383v3.303c0 4.07 3.313 7.382 7.383 7.382z" />
      <path d="M13.787 16.332a.503.503 0 100-1.006.503.503 0 000 1.006m5.293 0a.503.503 0 100-1.006.503.503 0 000 1.006" />
    </g>
  );

  const normalHover = (
    <g>
      <path d="M43.51 41.822h-3.224V34.91h-.9v6.912H28.334v-8.435c0-2.607-1.023-5.047-2.724-6.88a7.96 7.96 0 012.74-1.534c2.794 1.393 6.253 1.393 9.048 0 3.611 1.162 6.111 4.576 6.111 8.39v8.46zm-16.476 0H5.762v-8.435c0-3.627 2.266-6.888 5.595-8.199v5.467a1.925 1.925 0 00-1.447 1.857c0 1.062.865 1.925 1.925 1.925a1.926 1.926 0 001.925-1.925c0-.895-.617-1.642-1.446-1.857v-5.469c2.578 1.126 5.625 1.122 8.197-.013v3.51a2.162 2.162 0 00-1.683 2.103v2.973h.957v-2.973a1.205 1.205 0 012.409 0v2.973h.956v-2.973a2.161 2.161 0 00-1.681-2.103V25.2c3.313 1.318 5.564 4.571 5.564 8.187v8.435zM11.835 31.545a.968.968 0 110 1.936.968.968 0 010-1.936zm25.68-7.895l-.252-.074-.233.125c-2.543 1.355-5.77 1.355-8.313 0l-.233-.124-.253.073a9.263 9.263 0 00-3.564 1.958 9.999 9.999 0 00-3.627-1.932l-.253-.075-.233.125c-2.543 1.356-5.77 1.356-8.314 0l-.233-.125-.253.075c-4.295 1.245-7.294 5.24-7.294 9.711v9.736H44.81v-9.76c0-4.475-2.998-8.469-7.294-9.713zM26.593 13.507h3.22a4.091 4.091 0 003.574-2.107 4.036 4.036 0 003.54 2.107h2.228v2.019a6.09 6.09 0 01-6.083 6.082h-.398a6.09 6.09 0 01-6.082-6.082v-2.02zm6.081-7.367h.398a6.09 6.09 0 016.083 6.082v.285h-2.227a3.033 3.033 0 01-3.03-3.03v-.268h-1v.213a3.089 3.089 0 01-3.086 3.085h-3.22v-.285a6.09 6.09 0 016.082-6.082zm0 16.768h.398c4.071 0 7.383-3.312 7.383-7.382v-3.304c0-4.07-3.311-7.383-7.382-7.383h-.398c-4.07 0-7.383 3.313-7.383 7.383v3.304c0 4.07 3.313 7.382 7.383 7.382z" />
      <path d="M34.52 16.331a.503.503 0 100-1.006.503.503 0 000 1.006m-5.293 0a.503.503 0 100-1.006.503.503 0 000 1.006m-19.11-2.824h.728a4.034 4.034 0 003.54-2.107 4.09 4.09 0 003.574 2.107h4.72v2.019a6.09 6.09 0 01-6.083 6.082h-.397a6.09 6.09 0 01-6.082-6.082v-2.02zm6.082-7.367h.397a6.09 6.09 0 016.084 6.082v.285h-4.721a3.088 3.088 0 01-3.084-3.085v-.213h-1v.268c0 1.67-1.36 3.03-3.03 3.03h-.728v-.285a6.09 6.09 0 016.082-6.082zm0 16.768h.397c4.072 0 7.384-3.312 7.384-7.382v-3.304c0-4.07-3.312-7.383-7.384-7.383h-.397c-4.07 0-7.383 3.313-7.383 7.383v3.304c0 4.07 3.313 7.382 7.383 7.382z" />
      <path d="M13.787 16.331a.502.502 0 100-1.005.502.502 0 000 1.005m5.293 0a.503.503 0 100-1.006.503.503 0 000 1.006m-2.723 4.125a1.85 1.85 0 001.85-1.85h-3.699a1.85 1.85 0 001.85 1.85" />
    </g>
  );

  return isHovered ? normalHover : normal;
};

export default MaleDoctorAndPerson;
