import React from 'react';

import { SvgPathProps } from '../Icon';

const Pregnant: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path d="M25.643 16.856a.503.503 0 10-.001-1.005.503.503 0 000 1.005zm-5.293 0a.503.503 0 10-.003-1.006.503.503 0 00.003 1.006zm5.476 19.072a.925.925 0 010 1.848h-2.247v-2.95h.848c.25 0 .453.202.453.452v.65h.946zm-1.003 8.426c-4.85 0-8.796-3.31-8.846-7.392 1.614 1.24 3.767 1.982 6.3 2.09v.025h3.549a2.227 2.227 0 002.224-2.225 2.227 2.227 0 00-1.99-2.212 1.756 1.756 0 00-1.633-1.116h-1.5c-3.007 0-4.597-1.123-4.597-3.249 0-.478.064-.88.197-1.23l-1.216-.46c-.19.5-.281 1.051-.281 1.69 0 1.31.527 4.283 5.248 4.533v2.951c-3.921-.2-8.2-2.239-8.2-7.484 0-2.632 1.103-4.707 3.198-6.03a8.625 8.625 0 005.486 1.964h.398a8.637 8.637 0 005.39-1.889c2.03 1.277 3.228 3.196 3.228 5.205 0 .304-.028.605-.08.904a10.513 10.513 0 00-3.02-1.659l-.435 1.225c3.298 1.17 5.429 3.874 5.429 6.89 0 4.118-3.97 7.47-8.85 7.47zm7.952-12.928a6.528 6.528 0 00.303-1.9c0-2.61-1.598-5.066-4.274-6.567l-.404-.228-.347.31a7.34 7.34 0 01-4.893 1.867h-.398a7.33 7.33 0 01-4.873-1.85l-.232-.529-.625.348c-2.743 1.528-4.254 4.155-4.254 7.398 0 2.191.716 4.077 1.978 5.54a7.69 7.69 0 00-.084 1.07c0 4.835 4.554 8.77 10.15 8.77 5.597 0 10.15-3.935 10.15-8.77 0-2.035-.802-3.942-2.197-5.459zm-17.656-17.37h.26v1.541h-.26a.77.77 0 110-1.54zm1.56 0h.729a4.06 4.06 0 003.54-2.08 4.115 4.115 0 003.574 2.08h4.72v1.993a6.09 6.09 0 01-6.082 6.082h-.398a6.09 6.09 0 01-6.082-6.082v-1.993zm0-1.31a6.09 6.09 0 016.083-6.082h.398a6.09 6.09 0 016.083 6.082v.26h-4.721a3.062 3.062 0 01-3.06-3.059v-.214h-1.05v.268a3.008 3.008 0 01-3.004 3.004h-.728v-.259zm6.282-9.35a2.383 2.383 0 012.377 2.296 7.329 7.329 0 00-2.178-.329h-.398c-.758 0-1.49.115-2.178.33a2.384 2.384 0 012.377-2.298zm7.58 10.66h.263a.771.771 0 010 1.541h-.262v-1.54zM15.12 16.648h.29c.308 3.791 3.484 6.784 7.353 6.784h.398c3.869 0 7.046-2.993 7.352-6.784h.292a1.823 1.823 0 001.82-1.82 1.824 1.824 0 00-1.82-1.823h-.262v-.259a7.386 7.386 0 00-3.895-6.504v-.46a3.69 3.69 0 00-3.686-3.687 3.69 3.69 0 00-3.686 3.686v.461a7.386 7.386 0 00-3.895 6.504v.26h-.261a1.824 1.824 0 00-1.822 1.821c0 1.004.817 1.821 1.822 1.821z" />
  );

  const normalHover = (
    <path d="M25.643 18.356a.503.503 0 10-.003-1.006.503.503 0 00.003 1.006zm-5.293 0a.503.503 0 10-.003-1.006.503.503 0 00.003 1.006zm-5.232-2.8h.262v.493l.002.053v.995h-.264a.77.77 0 010-1.54zm1.562 0h.728a4.06 4.06 0 003.54-2.08 4.115 4.115 0 003.574 2.08h4.72v.493a6.09 6.09 0 01-6.082 6.082h-.398a6.09 6.09 0 01-6.082-6.082v-.493zm0-2.81a6.09 6.09 0 016.082-6.082h.398a6.09 6.09 0 016.083 6.082v1.76h-4.721a3.062 3.062 0 01-3.06-3.059v-.214h-1.05v.268a3.008 3.008 0 01-3.004 3.004h-.728v-1.759zm6.28-8.253a2.38 2.38 0 012.006 1.102 7.368 7.368 0 00-1.806-.232h-.398c-.624 0-1.227.086-1.806.232a2.381 2.381 0 012.005-1.102zM30.54 16.1l.002-.05v-.494h.262a.771.771 0 010 1.541h-.264V16.1zm-15.422 2.048h.57c.907 3.051 3.733 5.284 7.074 5.284h.398c3.34 0 6.168-2.233 7.074-5.284h.57a1.823 1.823 0 001.82-1.82 1.824 1.824 0 00-1.82-1.823h-.262v-1.759A7.388 7.388 0 0026.58 6.21a3.689 3.689 0 00-3.62-3.017 3.688 3.688 0 00-3.617 3.017 7.387 7.387 0 00-3.963 6.537v1.76h-.262a1.824 1.824 0 00-1.821 1.821c0 1.004.817 1.821 1.82 1.821zm10.708 17.78a.925.925 0 010 1.848h-2.247v-2.95h.848c.25 0 .453.202.453.452v.65h.946zm-.662 8.426c-5.122 0-9.137-3.24-9.187-7.392 1.614 1.24 3.767 1.982 6.3 2.09v.025h3.549a2.227 2.227 0 002.224-2.225 2.227 2.227 0 00-1.99-2.212 1.756 1.756 0 00-1.633-1.116h-1.5c-3.007 0-4.597-1.123-4.597-3.249 0-.478.064-.88.197-1.23l-1.216-.46c-.19.5-.281 1.051-.281 1.69 0 1.31.527 4.283 5.248 4.533v2.951c-3.921-.2-8.2-2.239-8.2-7.484 0-2.632 1.103-4.707 3.198-6.03a8.625 8.625 0 005.486 1.964h.398a8.637 8.637 0 005.39-1.889c2.03 1.277 3.228 3.196 3.228 5.205 0 .148-.014.295-.027.443a15.95 15.95 0 00-3.117-1.212l-.347 1.252c4.456 1.236 6.91 3.678 6.91 6.877 0 3.598-3.14 7.47-10.033 7.47zm7.796-13.66c.07-.387.118-.776.118-1.169 0-2.609-1.598-5.065-4.274-6.566l-.404-.228-.347.31a7.34 7.34 0 01-4.893 1.867h-.398a7.328 7.328 0 01-4.886-1.862l-.251-.5-.593.331c-2.743 1.528-4.254 4.156-4.254 7.398 0 2.194.717 4.083 1.984 5.546-.054.352-.09.707-.09 1.064 0 4.917 4.609 8.77 10.492 8.77 7.44 0 11.333-4.412 11.333-8.77 0-2.494-1.254-4.629-3.537-6.192z" />
  );

  return isHovered ? normalHover : normal;
};

export default Pregnant;
