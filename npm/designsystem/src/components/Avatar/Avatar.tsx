import React from 'react';
import Icon from '../Icons';
import Check from '../Icons/Check';
import cn from 'classnames';

import styles from './styles.module.scss';

interface AvatarProps {
  /** Name to display in the avatar. Will be truncated to the first two characters. */
  children: string;
  /** Displays a check icon to indicated the selected state. */
  selected?: boolean;
  /** Adds custom classes to the element. */
  className?: string;
}

const Avatar = React.forwardRef(function AvatarForwardedRef(props: AvatarProps, ref: React.ForwardedRef<HTMLElement>) {
  const { children, className = '', selected = false } = props;
  const truncatedName = children.charAt(0).toLocaleUpperCase() + children.substring(1, 2);
  return (
    <span className={cn(styles.avatar, selected && styles['avatar--selected'], className)} ref={ref}>
      {selected ? <Icon svgIcon={Check} size={48} color="kiwi" /> : truncatedName}
    </span>
  );
});

export default Avatar;
