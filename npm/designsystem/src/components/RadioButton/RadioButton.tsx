import React, { useState } from 'react';

import classNames from 'classnames';

import { AnalyticsId, FormMode, FormVariant } from '../../constants';
import { usePseudoClasses } from '../../hooks/usePseudoClasses';
import { uuid } from '../../utils/uuid';

import radioButtonStyles from './styles.module.scss';

export interface RadioButtonProps
  extends Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    'aria-describedby' | 'name' | 'value' | 'disabled' | 'defaultChecked' | 'required' | 'onChange'
  > {
  /** Adds custom classes to the element. */
  className?: string;
  /** The label text next to the radioButton */
  label: string;
  /** input id of the radioButton */
  inputId?: string;
  /** Changes the visuals of the radioButton */
  mode?: keyof typeof FormMode;
  /** Changes the visuals of the radioButton */
  variant?: keyof typeof FormVariant;
  /** Activates Error style for the radioButton - This is can be true while errorText is empty, when in a FormGroup */
  error?: boolean;
  /** Error text to show above the component */
  errorText?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export const RadioButton = React.forwardRef((props: RadioButtonProps, ref: React.Ref<HTMLInputElement>) => {
  const {
    className,
    defaultChecked = false,
    onChange,
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
    ...rest
  } = props;
  const invalid = error || mode === FormMode.oninvalid;
  const onDark = mode === FormMode.ondark;
  const onBlueberry = mode === FormMode.onblueberry;
  const onGrey = mode === FormMode.ongrey;
  const onCherry = mode === FormMode.oninvalid;
  const bigform = variant === FormVariant.bigform;
  const [checked, changeChecked] = useState<boolean>(defaultChecked);
  const { refObject, isFocused } = usePseudoClasses(ref as React.RefObject<HTMLInputElement>);
  const radioButtonWrapperClasses = classNames(radioButtonStyles['radio-button-wrapper'], {
    [radioButtonStyles['radio-button-wrapper--with-error']]: errorText,
    [radioButtonStyles['radio-button-wrapper__bigform']]: bigform,
    [radioButtonStyles['radio-button-wrapper__bigform--focused']]: bigform && isFocused,
    [radioButtonStyles['radio-button-wrapper__bigform--selected']]: bigform && checked && isFocused,
    [radioButtonStyles['radio-button-wrapper__bigform--invalid']]: bigform && onCherry && isFocused,
    [radioButtonStyles['radio-button-wrapper__bigform--on-blueberry']]: bigform && onBlueberry && isFocused,
  });
  const radioButtonLabelClasses = classNames(radioButtonStyles['radio-button-label'], {
    [radioButtonStyles['radio-button-label--disabled']]: disabled,
    [radioButtonStyles['radio-button-label--on-dark']]: onDark,
    [radioButtonStyles['radio-button-label--invalid']]: invalid,
    [radioButtonStyles['radio-button-label__bigform']]: bigform,
    [radioButtonStyles['radio-button-label__bigform--on-grey']]: bigform && onGrey && !checked,
    [radioButtonStyles['radio-button-label__bigform--on-blueberry']]: onBlueberry && !checked && bigform,
    [radioButtonStyles['radio-button-label__bigform--selected']]: bigform && checked && !onCherry,
    [radioButtonStyles['radio-button-label__bigform--disabled']]: bigform && disabled,
    [radioButtonStyles['radio-button-label__bigform--selected-invalid']]: bigform && checked && onCherry,
  });
  const radioButtonClasses = classNames(
    radioButtonStyles['radio-button'],
    {
      [radioButtonStyles['radio-button--on-dark']]: onDark,
      [radioButtonStyles['radio-button--disabled']]: disabled,
      [radioButtonStyles['radio-button--on-blueberry']]: onBlueberry,
      [radioButtonStyles['radio-button--invalid']]: invalid,
      [radioButtonStyles['radio-button__bigform']]: bigform,
      [radioButtonStyles['radio-button__bigform--disabled']]: bigform && disabled,
      [radioButtonStyles['radio-button__bigform--invalid']]: bigform && invalid,
    },
    className
  );
  const errorStyles = classNames(radioButtonStyles['radio-button-errors']);

  const change = (e: React.ChangeEvent<HTMLInputElement>): void => {
    changeChecked(true);
    onChange && onChange(e);
  };
  return (
    <div data-testid={testId} data-analyticsid={AnalyticsId.RadioButton} className={radioButtonWrapperClasses}>
      {errorText && <p className={errorStyles}>{errorText}</p>}
      <label htmlFor={inputId} className={radioButtonLabelClasses}>
        <input
          id={inputId}
          name={name}
          className={radioButtonClasses}
          type="radio"
          disabled={disabled}
          value={value}
          ref={refObject}
          defaultChecked={defaultChecked}
          aria-describedby={props['aria-describedby'] ?? undefined}
          required={required}
          {...rest}
          onChange={(e): void => change(e)}
        />
        {label}
      </label>
    </div>
  );
});

RadioButton.displayName = 'RadioButton';

export default RadioButton;
