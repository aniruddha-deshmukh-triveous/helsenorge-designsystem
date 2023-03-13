import React, { useEffect, useState } from 'react';

import classNames from 'classnames';

import { AnalyticsId, FormMode, FormVariant, IconSize } from '../../constants';
import { getColor } from '../../theme/currys/color';
import { uuid } from '../../utils/uuid';
import Icon from '../Icons';
import Check from '../Icons/Check';

import checkboxStyles from './styles.module.scss';


export interface CheckboxProps
  extends Pick<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'value' | 'disabled' | 'checked' | 'required' | 'onChange'> {
  /** Adds custom classes to the element. */
  className?: string;
  /** The label text next to the checkbox */
  label: string;
  /** input id of the checkbox */
  inputId?: string;
  /** Changes the visuals of the checkbox */
  mode?: keyof typeof FormMode;
  /** Changes the visuals of the checkbox */
  variant?: keyof typeof FormVariant;
  /** Activates Error style for the checkbox - This is can be true while errorText is empty, when in a FormGroup */
  error?: boolean;
  /** Error text to show above the component */
  errorText?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export const Checkbox = React.forwardRef((props: CheckboxProps, ref: React.Ref<HTMLInputElement>) => {
  const {
    className,
    checked = false,
    disabled,
    label,
    inputId = uuid(),
    mode,
    name = inputId,
    variant,
    errorText,
    error = !!errorText,
    value = label,
    testId,
    required,
    onChange,
    ...rest
  } = props;
  const [isChecked, setIsChecked] = useState(checked);
  const invalid = error || mode === FormMode.oninvalid;
  const onDark = mode === FormMode.ondark;
  const onBlueberry = mode === FormMode.onblueberry;
  const bigform = variant === FormVariant.bigform;

  const checkboxWrapperClasses = classNames(checkboxStyles['checkbox-wrapper'], {
    [checkboxStyles['checkbox-wrapper--with-error']]: errorText,
    [checkboxStyles['checkbox-wrapper--bigform']]: bigform,
  });
  const checkboxLabelClasses = classNames(checkboxStyles['checkbox-label'], {
    [checkboxStyles['checkbox-label--disabled']]: disabled,
    [checkboxStyles['checkbox-label--on-dark']]: onDark,
    [checkboxStyles['checkbox-label--on-blueberry']]: onBlueberry,
    [checkboxStyles['checkbox-label--invalid']]: invalid,
    [checkboxStyles['checkbox-label--bigform']]: bigform,
  });
  const checkboxClasses = classNames(checkboxStyles.checkbox, className);
  const checkboxIconWrapperClasses = classNames(checkboxStyles['checkbox__icon-wrapper'], {
    [checkboxStyles['checkbox__icon-wrapper--checked']]: isChecked,
    [checkboxStyles['checkbox__icon-wrapper--disabled']]: disabled,
    [checkboxStyles['checkbox__icon-wrapper--on-dark']]: onDark,
    [checkboxStyles['checkbox__icon-wrapper--on-blueberry']]: onBlueberry,
    [checkboxStyles['checkbox__icon-wrapper--invalid']]: invalid,
  });
  const errorStyles = classNames(checkboxStyles['checkbox-errors'], {
    [checkboxStyles['checkbox-errors--bigform']]: bigform,
  });

  let iconColor = getColor('blueberry', 500);
  if (disabled) iconColor = getColor('neutral', 400);
  if (onDark) iconColor = getColor('blueberry', 200);
  if (invalid) iconColor = getColor('cherry', 500);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (onChange) {
      onChange(e);
    }

    setIsChecked(!isChecked);
  };

  return (
    <div data-testid={testId} data-analyticsid={AnalyticsId.Checkbox} className={checkboxWrapperClasses}>
      {errorText && <p className={errorStyles}>{errorText}</p>}
      <label htmlFor={inputId} className={checkboxLabelClasses}>
        <input
          id={inputId}
          name={name}
          className={checkboxClasses}
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          value={value}
          ref={ref}
          aria-invalid={error}
          required={required}
          onChange={onChangeHandler}
          {...rest}
        />
        <span className={checkboxIconWrapperClasses}>
          {isChecked && <Icon color={iconColor} className={checkboxStyles['checkbox__icon']} svgIcon={Check} size={IconSize.XSmall} />}
        </span>
        <span className={checkboxStyles['checkbox-label__text']}>{label}</span>
      </label>
    </div>
  );
});

export default Checkbox;
