import React, { lazy, Suspense } from 'react';

import ErrorBoundary from './ErrorBoundary';
import Icon, { IconProps, IconSize, SvgIcon } from '../Icon';

export type LazyIconProps = Omit<IconProps, 'svgIcon'> & {
  // Navnet på ikonet som skal vises. Tilsvarer filnavnet til ikonet i Icons-mappen
  iconName: string;
};

const isServerSide = (): boolean => typeof document === 'undefined';

export const lazyLoadIcon = (iconName: string): React.LazyExoticComponent<SvgIcon> =>
  lazy<SvgIcon>(() => import(`../Icons/${iconName}.tsx`));

export const LazyIcon: React.FC<LazyIconProps> = ({ iconName, size = IconSize.Small, ...rest }) => {
  if (isServerSide()) {
    return null;
  }

  const fallback = <span style={{ display: 'inline-block', width: `${size}px`, height: `${size}px` }} data-testid={'fallback'} />;

  return (
    <ErrorBoundary fallback={fallback} reset={iconName}>
      <Suspense fallback={fallback}>
        <Icon svgIcon={lazyLoadIcon(iconName)} size={size} {...rest} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default LazyIcon;
