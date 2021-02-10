import React from 'react';
import cn from 'classnames';

import { palette } from '../../theme/palette';
import Icon from '../Icons';
import { useHover } from '../..';

import { StyledNotificationPanelActionColumn, StyledLabel, StyledCloseButton } from './NotificationPanel.styled';
import InfoSignStroke from '../Icons/InfoSignStroke';
import AlertSignStroke from '../Icons/AlertSignStroke';
import AlertSignFill from '../Icons/AlertSignFill';
import X from '../Icons/X';

import NotificationPanelStyles from './styles.module.scss';

export type NotificationPanelVariants = 'info' | 'warn' | 'alert' | 'crisis';
export type NotificationPanelSizes = 'small' | 'medium' | 'large';

interface NotificationPanelProps {
  className?: string;
  children?: React.ReactNode;
  variant?: NotificationPanelVariants;
  shadow?: boolean;
  size?: NotificationPanelSizes;
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  dismissable?: boolean;
  fluid?: boolean;
  label?: string;
}

export const variantToColorMap = {
  info: { color: 'kiwi', depth: 50 },
  warn: { color: 'banana', depth: 50 },
  alert: { color: 'cherry', depth: 100 },
  crisis: { color: 'black', depth: 0 },
};

const variantToIconMap = {
  info: <Icon svgIcon={InfoSignStroke} color={palette.kiwi900} hoverColor={palette.kiwi900} />,
  warn: <Icon svgIcon={AlertSignStroke} color="black" hoverColor="black" />,
  alert: <Icon svgIcon={AlertSignFill} color={palette.cherry500} hoverColor={palette.cherry500} />,
  alertLabel: <Icon svgIcon={AlertSignStroke} color={palette.cherry500} hoverColor={palette.cherry500} />,
  crisis: <Icon svgIcon={AlertSignFill} color={palette.banana200} hoverColor={palette.banana200} />,
};

const NotificationPanel = React.forwardRef(function NotificationPanelForwardedRef(
  props: NotificationPanelProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const { children, variant = 'info', shadow = false, dismissable = false, onClick, label, fluid = false, size, className } = props;
  const { hoverRef, isHovered } = useHover<HTMLButtonElement>(undefined, dismissable);

  function wrapFluid(panel: React.ReactElement): React.ReactElement {
    if (fluid) {
      return (
        <div
          className={cn(
            NotificationPanelStyles['notification-panel__fluidwrapper'],
            NotificationPanelStyles['notification-panel__fluidwrapper--' + variant],
            { [NotificationPanelStyles['notification-panel__fluidwrapper--shadow']]: shadow }
          )}
        >
          {panel}
        </div>
      );
    }
    return panel;
  }

  return wrapFluid(
    <div
      ref={ref}
      className={cn(
        NotificationPanelStyles['notification-panel'],
        NotificationPanelStyles['notification-panel--' + size],
        NotificationPanelStyles['notification-panel--' + variant],
        {
          [NotificationPanelStyles['notification-panel--shadow']]: !fluid && shadow,
          [NotificationPanelStyles['notification-panel--haslabel']]: !!label && !children,
        },
        className ? className : ''
      )}
    >
      <span className={NotificationPanelStyles['notification-panel__icon']}>
        {variantToIconMap[variant === 'alert' && label && !children ? 'alertLabel' : variant]}
      </span>
      <div
        className={cn(NotificationPanelStyles['notification-panel__content'], {
          [NotificationPanelStyles['notification-panel__content--crisis']]: variant === 'crisis',
          [NotificationPanelStyles['notification-panel__content--haslabel']]: !!label && !children,
          [NotificationPanelStyles['notification-panel__content--isred']]: variant === 'alert' && !!label && !children,
        })}
      >
        {label ? <StyledLabel>{label}</StyledLabel> : null}
        {children}
      </div>
      <StyledNotificationPanelActionColumn>
        {dismissable ? (
          <StyledCloseButton onClick={onClick} ref={hoverRef}>
            <Icon svgIcon={X} isHovered={isHovered} size={38} color={palette.blueberry500} hoverColor={palette.blueberry700} />
          </StyledCloseButton>
        ) : null}
      </StyledNotificationPanelActionColumn>
    </div>
  );
});

export default NotificationPanel;
