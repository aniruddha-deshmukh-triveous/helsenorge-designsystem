import React from 'react';

import { SvgPathProps } from '../Icon';

const Tooth: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path d="M30.713 7.55c3.625 0 7.858 2.15 7.858 8.212 0 3.681-1.162 5.183-2.188 6.508-.708.916-1.32 1.708-1.46 3.201-.234 2.501-1.606 14.98-5.686 14.98-2.847 0-3.117-4.015-3.379-7.897-.2-2.976-.427-6.35-1.858-6.35-1.355 0-1.63 3.02-1.826 5.865l-.033.485c-.261 3.882-.531 7.897-3.378 7.897-4.081 0-5.453-12.479-5.687-14.98-.139-1.493-.751-2.285-1.46-3.2-1.025-1.326-2.187-2.828-2.187-6.509 0-6.062 4.233-8.213 7.857-8.213 2.07 0 3.287.556 4.361 1.048.813.372 1.456.667 2.353.667.897 0 1.54-.295 2.353-.667 1.073-.492 2.29-1.048 4.36-1.048zm-13.427 1.3c-1.095 0-6.556.332-6.556 6.912 0 3.013.843 4.313 1.72 5.46l.195.253c.762.986 1.551 2.006 1.726 3.875.62 6.637 2.475 13.801 4.392 13.801 1.632 0 1.87-3.55 2.081-6.684.25-3.718.509-7.563 3.156-7.563 2.647 0 2.905 3.845 3.155 7.563.211 3.133.45 6.684 2.082 6.684 1.916 0 3.772-7.164 4.392-13.8.174-1.87.963-2.89 1.726-3.876.942-1.218 1.916-2.477 1.916-5.713 0-6.58-5.462-6.913-6.558-6.913-1.787 0-2.82.473-3.819.93-.842.385-1.714.784-2.894.784-1.181 0-2.052-.399-2.895-.784-.999-.457-2.032-.93-3.819-.93zm-1.966 2.764l.451 1.218c-.604.224-1.059.878-1.247 1.795-.317 1.551.181 3.316 1.211 4.292l-.894.944c-1.571-1.488-1.93-3.832-1.59-5.495.28-1.369 1.034-2.372 2.069-2.755z" />
  );

  const normalHover = (
    <path d="M30.713 7.55c3.625 0 7.858 2.15 7.858 8.212 0 3.681-1.162 5.183-2.188 6.508-.709.916-1.321 1.708-1.46 3.201-.234 2.501-1.606 14.98-5.686 14.98-2.848 0-3.118-4.015-3.379-7.897-.2-2.976-.427-6.35-1.858-6.35-1.432 0-1.659 3.374-1.859 6.35-.261 3.882-.531 7.897-3.379 7.897-4.08 0-5.452-12.479-5.686-14.98-.139-1.493-.751-2.285-1.46-3.2-1.025-1.326-2.187-2.828-2.187-6.509 0-6.062 4.233-8.213 7.857-8.213 2.07 0 3.287.556 4.36 1.048.814.372 1.457.667 2.354.667s1.539-.295 2.353-.667c1.073-.492 2.29-1.048 4.36-1.048zm-13.427 1.3c-1.095 0-6.557.332-6.557 6.912 0 3.236.974 4.496 1.916 5.713.762.986 1.551 2.006 1.726 3.875.619 6.637 2.475 13.801 4.391 13.801 1.632 0 1.871-3.55 2.082-6.684.25-3.718.509-7.563 3.156-7.563 2.47 0 2.86 3.35 3.104 6.819l.051.744c.211 3.133.45 6.684 2.082 6.684 1.916 0 3.772-7.164 4.391-13.8.175-1.87.964-2.89 1.727-3.876.941-1.218 1.916-2.477 1.916-5.713 0-6.58-5.463-6.913-6.558-6.913-1.787 0-2.82.473-3.819.93-.843.385-1.714.784-2.894.784-1.181 0-2.052-.399-2.895-.784-.999-.457-2.032-.93-3.819-.93zm-1.967 2.764l.451 1.218c-.604.224-1.059.878-1.245 1.795-.318 1.551.18 3.316 1.21 4.292l-.894.944c-1.57-1.488-1.93-3.832-1.59-5.495.28-1.369 1.034-2.372 2.069-2.755zM4.62 9.184l3.165.965-.378 1.243-3.166-.965.379-1.243zm4.444-4.862l1.985 2.648-1.04.779-1.985-2.648 1.04-.78z" />
  );

  return isHovered ? normalHover : normal;
};

export default Tooth;
