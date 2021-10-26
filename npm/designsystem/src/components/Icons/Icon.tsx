import React from 'react';

type SvgIcon = React.FC<SvgPathProps>;

interface IconProps {
  /* Sets which icon should be displayed. */
  svgIcon: SvgIcon;
  ariaLabel?: string;
  /* Changes the size of the icon. */
  size?: number;
  /* Changes the color of the icon. */
  color?: string;
  /* Changes the hover color of the icon. */
  hoverColor?: string;
  /* Adds custom classes to the element. */
  className?: string;
  /* Use a custom hover icon. */
  hoverType?: SvgIcon;
  /* Swaps the displayed icon to the hover version and changes its color. */
  isHovered?: boolean;
  /** Sets the data-testid attribute. */
  testId?: string;
}

interface SvgPathProps {
  isExtraSmall: boolean;
  isHovered: boolean;
}

const Icon = React.forwardRef((props: IconProps, ref: React.ForwardedRef<SVGSVGElement>) => {
  const {
    svgIcon,
    ariaLabel,
    className = '',
    size = 48,
    color = 'black',
    hoverColor = color || 'black',
    isHovered = false,
    testId,
    ...other
  } = props;

  const svgRaw = React.createElement(svgIcon, {
    isExtraSmall: size <= 38,
    isHovered,
  });

  return (
    <svg
      data-testid={testId}
      ref={ref as React.RefObject<SVGSVGElement>}
      className={`hnds-style-icon ${className}`}
      role="img"
      aria-label={ariaLabel}
      aria-hidden="true"
      viewBox="0 0 48 48"
      style={{ minWidth: size, minHeight: size }}
      width={size}
      height={size}
      fill={isHovered ? hoverColor : color}
      {...other}
    >
      {svgRaw}
    </svg>
  );
});

Icon.displayName = 'Icon';

export { Icon, IconProps, SvgPathProps, SvgIcon };
