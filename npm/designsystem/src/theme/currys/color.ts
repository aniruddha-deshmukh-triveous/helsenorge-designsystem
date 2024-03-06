import { theme } from '..';
import { PaletteNames, PaletteDepths } from '../palette';

export const getColor = (name: PaletteNames, depth?: PaletteDepths): string => {
  if (name === 'black' || name === 'white') {
    return theme.palette[name];
  }
  if (depth) {
    return theme.palette[`${name}${depth}`];
  }

  return '';
};

export const getHoverColor = (color: PaletteNames | 'white' | 'black') => `${getColor(color, 700)}0D`;
