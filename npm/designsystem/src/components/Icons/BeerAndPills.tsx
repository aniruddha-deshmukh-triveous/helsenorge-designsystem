import React from 'react';
import {SvgPathProps} from './Icon';

const BeerAndPills: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M22.854 42.705H11.636V21.221a4.28 4.28 0 011.377-3.142l.104-.094a3.737 3.737 0 001.136-2.04l.354-1.855c.16.146.355.334.606.593.52.534 1.24.838 1.982.838h.023a2.689 2.689 0 001.957-.855c.287-.306.507-.512.678-.66l.383 1.94a3.746 3.746 0 001.135 2.038l.102.095a4.277 4.277 0 011.38 3.142v21.484zM16.017 6.71h2.399l1.203 6.1c-.305.19-.701.523-1.244 1.103a1.596 1.596 0 01-1.166.508l-.014.001c-.451 0-.875-.179-1.192-.506-.527-.542-.889-.86-1.16-1.055l1.174-6.15zm-.32-2.276a.52.52 0 01.512-.43h2.072c.254 0 .469.18.508.381l.1 1.026h-3.29l.098-.977zm6.556 12.595a2.45 2.45 0 01-.74-1.332L19.74 6.71h.585l-.25-2.502a1.822 1.822 0 00-1.794-1.505h-2.072c-.886 0-1.64.633-1.8 1.554l-.244 2.453h.529l-1.718 8.991a2.438 2.438 0 01-.738 1.327l-.104.094a5.587 5.587 0 00-1.799 4.1v22.784h13.82V21.221a5.576 5.576 0 00-1.799-4.097l-.103-.095zm4.498 13.03H38.34v-4.29H26.753v4.29zM38.34 42.704H26.753V40.72h7.085v-6.973H26.75v-2.389H38.34v11.347zM26.753 39.62h5.985v-4.773H26.75v4.773zm-1.3 4.386H39.64V24.47H25.45v19.537z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M22.859 42.72H11.642V21.236a4.28 4.28 0 011.378-3.142l.103-.094a3.737 3.737 0 001.136-2.04l.355-1.855c.159.146.355.334.606.593.519.534 1.24.838 1.982.838h.023a2.689 2.689 0 001.957-.855c.286-.306.506-.512.677-.66l.383 1.94a3.746 3.746 0 001.135 2.038l.103.095a4.277 4.277 0 011.379 3.142V42.72zM18.42 6.725l1.203 6.1c-.304.19-.701.523-1.244 1.103a1.596 1.596 0 01-1.165.508l-.014.001c-.452 0-.875-.179-1.192-.506-.527-.543-.89-.86-1.161-1.055l1.175-6.15h2.398zM15.7 4.45a.52.52 0 01.513-.43h2.072c.254 0 .469.18.508.381l.1 1.026h-3.29l.098-.977zm6.558 12.595a2.45 2.45 0 01-.741-1.332l-1.772-8.987h.584l-.25-2.502a1.822 1.822 0 00-1.794-1.505h-2.072c-.885 0-1.64.633-1.8 1.554l-.243 2.453h.528l-1.717 8.991a2.438 2.438 0 01-.738 1.327l-.104.094a5.587 5.587 0 00-1.8 4.1V44.02h13.82V21.236a5.576 5.576 0 00-1.798-4.097l-.103-.095zM38.345 42.72H26.757v-1.985h7.085v-6.973h-7.085v-2.389h11.588V42.72zm-11.588-3.085h5.985v-4.773h-5.985v4.773zm2.273-17.563l10.958 3.77-1.396 4.055-10.958-3.77 1.396-4.055zm12.61 2.962L28.223 20.42l-2.24 6.515 9.123 3.14h-9.65V44.02h14.19v-13.19l1.994-5.797z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default BeerAndPills;
