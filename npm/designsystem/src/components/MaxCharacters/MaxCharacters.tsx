import React from 'react';
import { FormMode } from '../../constants';
import styles from './styles.module.scss';
import classNames from 'classnames';

interface MaxCharactersProps {
  /** Current input length */
  length: number;
  /** max character limit in textarea  */
  maxCharacters: number;
  /** The text is displayed in the end of the text-counter */
  maxText?: string;
  /** Changes the visuals of the textarea */
  mode?: keyof typeof FormMode;
  /** Max width of the component */
  maxWidth?: string;
}

const MaxCharacters: React.FC<MaxCharactersProps> = ({ maxCharacters, maxText, length, mode, maxWidth }) => {
  const progress = length / maxCharacters;

  const counterTextClass = classNames(styles['max-characters'], {
    [styles[`max-characters--on-dark`]]: mode === FormMode.ondark,
    [styles[`max-characters--invalid`]]: progress > 1,
  });

  const ariaLevel = progress > 0.95 ? 'polite' : 'off';

  return (
    <div aria-live={ariaLevel} aria-atomic={'true'} className={counterTextClass} style={{ maxWidth }}>
      {`${length}/${maxCharacters} ${maxText ? maxText : 'tegn'}`}
    </div>
  );
};

export default MaxCharacters;
