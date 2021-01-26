import React from 'react';
import {SvgPathProps} from './Icon';

const ShakingHand: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M39.341 19.158c-.182 2.276-1.562 4.508-3.91 6.303l-1.159.974-.98-1.08a2.537 2.537 0 00-3.58-.201 2.502 2.502 0 00-.689 1.047 2.532 2.532 0 00-3.425-.06 2.538 2.538 0 00-.813 2.28c-.6.002-1.2.204-1.683.634a2.535 2.535 0 00-.752 2.542 2.517 2.517 0 00-1.524.628 2.518 2.518 0 00-.842 1.749c-.013.229.015.452.061.67l-.395.36a1.17 1.17 0 01-.908.294 1.543 1.543 0 01-.99-.502 1.543 1.543 0 01-.42-1.028 1.164 1.164 0 01.365-.881l4.361-4.04.007-.006v-.001l.003-.002-.442-.477-.439-.48-4.61 4.222a1.261 1.261 0 01-1.778-.079 1.26 1.26 0 01.063-1.776l4.98-4.547-.438-.48-.435-.482-.003.002-.01.01-5.064 4.57a1.243 1.243 0 01-.9.334 1.233 1.233 0 01-.865-.398 1.233 1.233 0 01-.328-.894 1.26 1.26 0 01.407-.873l5.987-5.576-.012-.011c1.392.034 2.885-.35 3.974-1.135l1.96 1.626c1.224.942 2.703 1.278 4.057.923 1.031-.27 1.831-.917 2.196-1.774a.65.65 0 00-.114-.69l-4.993-5.547 1.674-1.535c1.548-1.366 6.456-3.974 10.522.307 1.381 1.455 2.032 3.21 1.884 5.08zm-5.265 10.848a1.237 1.237 0 01-1.745-.098l-.003-.003-1.493-1.646-.39-.452a1.221 1.221 0 01-.277-.832 1.23 1.23 0 011.232-1.166c.34 0 .68.14.926.415l1.848 2.038a1.229 1.229 0 01-.098 1.744zm-3.078 2.288a1.237 1.237 0 01-1.742-.095l-2.89-3.342a1.225 1.225 0 01-.312-.893 1.235 1.235 0 012.148-.762l1.225 1.416c.031.039.053.082.087.12l.35.384 1.232 1.427c.22.246.331.563.312.893a1.227 1.227 0 01-.41.852zm-2.85 2.546a1.231 1.231 0 01-1.74-.093L23.87 31.77a1.237 1.237 0 01.098-1.745 1.234 1.234 0 011.735.087l2.543 2.983c.454.508.41 1.29-.098 1.745zm-3.154 2.158a1.237 1.237 0 01-1.739-.092l-1.66-1.967a1.229 1.229 0 01.097-1.744 1.232 1.232 0 011.733.084l1.667 1.974a1.236 1.236 0 01-.098 1.745zM10.808 23.222c-1.237-1.47-1.798-3.161-1.625-4.89.191-1.907 1.281-3.782 2.991-5.144 2.634-2.097 6.664-3.01 10.073.712l6.723 7.47c-.253.32-.647.563-1.128.689-.947.248-2.044-.011-2.915-.68l-2.353-1.952a.65.65 0 00-.858.024c-1.488 1.388-4.314 1.489-5.499.597l-.782 1.038c.326.246.721.42 1.143.556l-3.962 3.69-1.808-2.11zM38.4 13.182c-4.24-4.463-9.81-2.605-12.335-.378l-1.674 1.536-1.182-1.314c-4.02-4.39-8.893-3.204-11.845-.855-1.982 1.579-3.249 3.778-3.475 6.032-.208 2.086.457 4.11 1.928 5.86l1.847 2.156-.342.318a2.54 2.54 0 00-.82 1.77 2.524 2.524 0 00.67 1.83c.46.5 1.09.79 1.77.817l.1.002c.047 0 .092-.01.14-.013-.004.042-.016.082-.017.125a2.549 2.549 0 00.68 1.837 2.548 2.548 0 001.888.828c.103 0 .204-.016.305-.028 0 .024-.007.047-.007.07a2.84 2.84 0 00.765 1.903 2.835 2.835 0 002.068.925 2.43 2.43 0 001.665-.64l.128-.118 1.611 1.908.012.013c.5.56 1.195.845 1.892.845.602 0 1.206-.212 1.69-.643.48-.43.748-1.003.818-1.597a2.527 2.527 0 00.648.083 2.522 2.522 0 002.522-2.581c.108.014.217.034.326.034a2.525 2.525 0 002.524-2.352 2.525 2.525 0 002.243-.58 2.52 2.52 0 00.841-1.748 2.525 2.525 0 00-.638-1.83l1.098-.922c2.621-2.003 4.182-4.565 4.393-7.214.176-2.214-.618-4.373-2.237-6.078z" />
  );

  const normalHover = (
    <path d="M35.513 24.981l-1.715 1.596-.457-.565a2.523 2.523 0 00-1.698-.94 2.523 2.523 0 00-1.865.534c-.339.27-.586.617-.749 1.005a2.514 2.514 0 00-3.415-.253 2.523 2.523 0 00-.944 2.228 2.515 2.515 0 00-2.656 2.235c-.03.272-.007.538.046.797a2.51 2.51 0 00-2.499 2.238 2.503 2.503 0 00.365 1.605c-.49.256-1.148.163-1.618-.299-.566-.557-.633-1.41-.147-1.905l4.17-4.256-.465-.455-.462-.457-.002.002-.003.003-4.395 4.434a1.26 1.26 0 01-1.779.008 1.256 1.256 0 01-.379-.889 1.238 1.238 0 01.355-.888l4.754-4.782-.46-.459-.459-.46-4.849 4.824a1.25 1.25 0 01-1.766.02 1.249 1.249 0 01-.012-1.762l6.424-6.41c1.278.032 2.622-.279 3.651-.934l1.864 1.735c1.168 1.01 2.625 1.43 3.997 1.154 1.044-.21 1.881-.81 2.294-1.646a.649.649 0 00-.075-.695l-5.214-6.506 1.11-1.122c1.481-1.44 6.257-4.282 10.525-.203 1.45 1.385 2.186 3.108 2.128 4.982-.07 2.282-1.34 4.578-3.6 6.486zm-1.656 5.72a1.237 1.237 0 01-1.737-.198l-.003-.004-1.396-1.728-.365-.474a1.223 1.223 0 01-.228-.846c.037-.328.2-.622.46-.827a1.238 1.238 0 011.739.201l1.728 2.14c.206.257.298.58.261.908-.038.328-.2.622-.459.827zm-3.204 2.107a1.222 1.222 0 01-.909.261 1.23 1.23 0 01-.825-.455l-2.694-3.502a1.226 1.226 0 01-.26-.909c.037-.328.2-.622.458-.827.258-.206.582-.299.91-.26.327.036.621.2.82.45l1.137 1.477c.03.042.052.09.085.13l.33.408 1.146 1.491a1.23 1.23 0 01-.198 1.736zm-2.99 2.38c-.259.205-.58.297-.91.26a1.227 1.227 0 01-.823-.453l-2.363-3.117a1.232 1.232 0 01.198-1.737c.258-.205.581-.299.91-.26.327.037.621.2.817.446l2.368 3.124c.206.26.3.581.261.91a1.23 1.23 0 01-.459.827zm-3.273 1.974a1.226 1.226 0 01-.909.26 1.228 1.228 0 01-.822-.452l-1.546-2.058a1.23 1.23 0 01.198-1.736 1.233 1.233 0 011.725.183l1.552 2.066a1.237 1.237 0 01-.198 1.737zM11.014 22.598c-1.149-1.539-1.613-3.259-1.342-4.975.3-1.894 1.495-3.704 3.28-4.965 2.75-1.943 6.826-2.624 10.016 1.286l6.285 7.843c-.27.305-.677.525-1.165.623-.96.195-2.04-.128-2.872-.846l-2.237-2.083a.652.652 0 00-.859-.025c-1.565 1.3-4.392 1.24-5.523.281l-.84.992c.403.342.911.594 1.474.762l-3.993 3.985-2.224-2.878zm26.87-10.025c-4.45-4.253-9.925-2.128-12.339.22l-1.013 1.024-.553-.69c-3.764-4.613-8.696-3.708-11.777-1.53-2.07 1.462-3.46 3.585-3.814 5.823-.328 2.07.221 4.13 1.591 5.964l2.332 3.017-.825.823a2.553 2.553 0 00.023 3.605 2.535 2.535 0 001.784.728c.088 0 .176-.016.264-.025-.002.043-.012.085-.01.128.006.683.28 1.323.766 1.803a2.56 2.56 0 001.801.737c.144 0 .287-.017.428-.042.021.69.305 1.39.854 1.93a2.83 2.83 0 001.98.827c.47 0 .93-.13 1.33-.38l.92 1.224.011.014a2.514 2.514 0 001.99.958 2.516 2.516 0 002.482-2.099 2.5 2.5 0 00.79.125c.57 0 1.12-.192 1.573-.552.53-.422.864-1.025.94-1.698.008-.062.001-.123.003-.185.061.012.12.032.182.04a2.518 2.518 0 001.865-.535 2.52 2.52 0 00.933-1.66c.133.037.266.07.406.086a2.519 2.519 0 001.865-.535 2.515 2.515 0 00.941-1.698 2.522 2.522 0 00-.538-1.87l-.452-.56 1.758-1.636c2.521-2.128 3.955-4.763 4.037-7.419.07-2.22-.829-4.338-2.529-5.962z" />
  );

  return isHovered ? normalHover : normal;
};

export default ShakingHand;
