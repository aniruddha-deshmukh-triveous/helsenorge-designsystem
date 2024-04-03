import React, { useRef } from 'react';

import classNames from 'classnames';

import { AnalyticsId, ZIndex } from '../../constants';
import { useExpand } from '../../hooks/useExpand';
import { useHover } from '../../hooks/useHover';
import { useSticky } from '../../hooks/useSticky';
import { PaletteNames } from '../../theme/palette';
import Button from '../Button';
import Icon, { IconSize, SvgIcon } from '../Icon';
import ChevronDown from '../Icons/ChevronDown';
import ChevronUp from '../Icons/ChevronUp';
import { IconName } from '../Icons/IconNames';
import LazyIcon from '../LazyIcon';

import styles from './styles.module.scss';

export enum ExpanderSize {
  small = 'small',
  large = 'large',
}

export type ExpanderColors = Extract<PaletteNames, 'banana' | 'blueberry' | 'cherry' | 'kiwi' | 'neutral' | 'plum' | 'white'>;

export interface ExpanderProps {
  /** Sets the trigger title */
  title: string;
  /** Sets the expanded content */
  children?: React.ReactNode;
  /** Sets the size of the expander. Default: ExpanderSize.small */
  size?: ExpanderSize;
  /** Sets the background of the expander. Requires size=ExpanderSize.large. */
  color?: ExpanderColors;
  /** Adds an icon to the expander trigger. Requires size=ExpanderSize.large. */
  svgIcon?: SvgIcon | IconName;
  /** Opens or closes the expander */
  expanded?: boolean;
  /** Removes border to the left of the content. Requires size=ExpanderSize.small. */
  noNestedLine?: boolean;
  /** Stick expander trigger to top of screen while scrolling down */
  sticky?: boolean;
  /** Called when expander is open/closed. */
  onExpand?: (isExpanded: boolean) => void;
  /** Whether to render children when closed (in which case they are hidden with CSS). Default: false */
  renderChildrenWhenClosed?: boolean;
  /** Sets the data-testid attribute on the expander button. */
  testId?: string;
  /** Overrides the default z-index of the expander header */
  zIndex?: number;
}

const Expander: React.FC<ExpanderProps> = props => {
  const {
    title,
    children,
    size = ExpanderSize.small,
    color,
    svgIcon: icon,
    expanded = false,
    noNestedLine = false,
    sticky = false,
    testId,
    onExpand,
    renderChildrenWhenClosed = false,
    zIndex = ZIndex.ExpanderTrigger,
  } = props;
  const [isExpanded, setIsExpanded] = useExpand(expanded, onExpand);
  const expanderRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { isHovered } = useHover(triggerRef);
  const { isOutsideWindow, isLeavingWindow, offsetHeight, contentWidth } = useSticky(expanderRef, triggerRef);

  const isSticky = sticky && isExpanded && isOutsideWindow;

  const renderChevron = (align: 'left' | 'right'): React.ReactNode => (
    <span className={classNames(styles['expander__icon'], styles[`expander__icon--${align}`])}>
      <Icon svgIcon={isExpanded ? ChevronUp : ChevronDown} size={IconSize.XSmall} isHovered={isHovered} />
    </span>
  );

  const triggerClassName = classNames(
    styles['expander__trigger'],
    size === ExpanderSize.large && styles[`expander__trigger--${size}`],
    size === ExpanderSize.large && styles[`expander__trigger--${color || 'neutral'}`],
    size === ExpanderSize.large && icon && styles['expander__trigger--icon'],
    isExpanded && styles['expander__trigger--expanded'],
    isSticky && !isLeavingWindow && styles['expander__trigger--sticky'],
    isSticky && isLeavingWindow && styles['expander__trigger--absolute']
  );

  const renderTrigger = (): React.ReactNode => (
    <button
      type="button"
      className={triggerClassName}
      style={{
        zIndex: isHovered || isSticky ? zIndex : undefined,
        width: isSticky && contentWidth ? `${contentWidth}px` : undefined,
      }}
      aria-expanded={isExpanded}
      ref={triggerRef}
      onClick={(): void => setIsExpanded(!isExpanded)}
      data-testid={testId}
      data-analyticsid={AnalyticsId.Expander}
    >
      {size === ExpanderSize.small && renderChevron('left')}
      {icon && (
        <span className={classNames(styles['expander__icon'], styles['expander__icon--left'])}>
          {typeof icon === 'string' ? (
            <LazyIcon iconName={icon} size={IconSize.XSmall} isHovered={isHovered} />
          ) : (
            <Icon svgIcon={icon} size={IconSize.XSmall} isHovered={isHovered} />
          )}
        </span>
      )}
      {title}
      {size === ExpanderSize.large && renderChevron('right')}
    </button>
  );

  const buttonClassName = classNames(
    styles['expander__button'],
    isExpanded && styles['expander__button--expanded'],
    isSticky && !isLeavingWindow && styles['expander__button--sticky'],
    isSticky && isLeavingWindow && styles['expander__button--absolute']
  );

  const renderButton = (): React.ReactNode => (
    <Button
      variant="borderless"
      className={buttonClassName}
      aria-expanded={isExpanded}
      ref={triggerRef}
      onClick={(): void => setIsExpanded(!isExpanded)}
      testId={testId}
      data-analyticsid={AnalyticsId.Expander}
    >
      <Icon svgIcon={isExpanded ? ChevronUp : ChevronDown} size={IconSize.XSmall} />
      {title}
    </Button>
  );

  const renderContent = (): React.ReactNode => {
    if (!renderChildrenWhenClosed && !isExpanded) {
      return null;
    }

    const contentClassName = classNames(
      styles['expander__content'],
      styles[`expander__content--${size}`],
      size === ExpanderSize.large && styles[`expander__content--${color || 'neutral'}`],
      size === ExpanderSize.large && icon && styles['expander__content--icon'],
      isExpanded && styles['expander__content--expanded'],
      size === ExpanderSize.small && !noNestedLine && styles['expander__content--nested-line']
    );

    return <div className={contentClassName}>{children}</div>;
  };

  return (
    <div
      className={styles['expander']}
      ref={expanderRef}
      style={{ paddingTop: isSticky && offsetHeight ? `${offsetHeight}px` : undefined }}
    >
      {size === ExpanderSize.large ? renderTrigger() : renderButton()}
      {renderContent()}
    </div>
  );
};

export default Expander;
