import React from 'react';
import { render, screen } from '@testing-library/react';
import Select from './Select';
import { FormMode } from '../../constants';

describe('Gitt at Select skal vises', (): void => {
  describe('Når Select rendres', (): void => {
    test('Så vises Select', (): void => {
      const { container } = render(
        <Select selectId={'test01'} label={'Label test'}>
          <option value={'Option 1'}>{'Option 1'}</option>
          <option value={'Option 2'}>{'Option 2'}</option>
          <option value={'Option 3'}>{'Option 3'}</option>
        </Select>
      );

      expect(container).toMatchSnapshot();

      const label = screen.getByText('Label test').parentElement;
      expect(label).toBeVisible();
      expect(label).toHaveClass('select-wrapper__label-wrapper');

      const select = screen.getByRole('combobox');
      expect(select).toBeVisible();
      expect(select).toHaveClass('select');

      const icon = select.previousElementSibling;
      expect(icon).toBeVisible();
      expect(icon).toHaveClass('hnds-style-icon select-arrow');
    });
  });

  describe('Når disabled er true', (): void => {
    test('Så vises Select som disabled', (): void => {
      render(
        <Select disabled selectId={'test01'} label={'Label test'}>
          <option value={'Option 1'}>{'Option 1'}</option>
          <option value={'Option 2'}>{'Option 2'}</option>
          <option value={'Option 3'}>{'Option 3'}</option>
        </Select>
      );

      const selectGrid = screen.getByRole('combobox').parentElement;
      expect(selectGrid).toHaveClass('select-inner-wrapper select-inner-wrapper--disabled');
    });
  });

  describe('Når mode er onBlueberry', (): void => {
    test('Så vises Select med onBlueberry styling', (): void => {
      render(
        <Select selectId={'test01'} label={'Label test'} mode={FormMode.onblueberry}>
          <option value={'Option 1'}>{'Option 1'}</option>
          <option value={'Option 2'}>{'Option 2'}</option>
          <option value={'Option 3'}>{'Option 3'}</option>
        </Select>
      );

      const select = screen.getByRole('combobox');
      const selectGrid = select?.parentElement;

      expect(select).toHaveClass('select select--on-blueberry');
      expect(selectGrid).toHaveClass('select-inner-wrapper select-inner-wrapper--on-blueberry');
    });
  });
  describe('Når mode er onDark', (): void => {
    test('Så vises Select med onDark styling', (): void => {
      render(
        <Select selectId={'test01'} label={'Label test'} mode={FormMode.ondark}>
          <option value={'Option 1'}>{'Option 1'}</option>
          <option value={'Option 2'}>{'Option 2'}</option>
          <option value={'Option 3'}>{'Option 3'}</option>
        </Select>
      );

      const label = screen.getByText('Label test').parentElement;
      expect(label).toHaveClass('select-wrapper__label-wrapper select-wrapper__label-wrapper--on-dark');
    });
  });

  describe('Når Select får satt error', (): void => {
    test('Så vises Select med indre error styling, uten ytre error styling', (): void => {
      render(
        <Select selectId={'test01'} label={'Label test'} error>
          <option value={'Option 1'}>{'Option 1'}</option>
          <option value={'Option 2'}>{'Option 2'}</option>
          <option value={'Option 3'}>{'Option 3'}</option>
        </Select>
      );

      const select = screen.getByRole('combobox');
      const wrapper = select?.parentElement;

      expect(select).toHaveClass('select select--invalid');
      expect(wrapper).toHaveClass('select-inner-wrapper select-inner-wrapper--invalid');
    });
  });

  describe('Når select får satt errorText', (): void => {
    test('Så vises Select med errormelding i tilleg til error styling', (): void => {
      render(
        <Select selectId={'test01'} label={'Label test'} errorText={'error error!'}>
          <option value={'Option 1'}>{'Option 1'}</option>
          <option value={'Option 2'}>{'Option 2'}</option>
          <option value={'Option 3'}>{'Option 3'}</option>
        </Select>
      );

      expect(screen.getByText('error error!')).toBeVisible();

      const select = screen.getByRole('combobox');
      const wrapper = select?.parentElement;

      expect(select).toHaveClass('select select--invalid');
      expect(wrapper).toHaveClass('select-inner-wrapper select-inner-wrapper--invalid');
    });
  });

  describe('Når name-prop er satt', (): void => {
    test('Så har Select riktig name', (): void => {
      render(
        <Select selectId={'test01'} label={'Label test'} name={'custom-name'}>
          <option value={'Option 1'}>{'Option 1'}</option>
          <option value={'Option 2'}>{'Option 2'}</option>
          <option value={'Option 3'}>{'Option 3'}</option>
        </Select>
      );

      const select = screen.getByRole('combobox');
      expect(select).toHaveAttribute('name', 'custom-name');
    });
  });

  describe('Når required er satt', (): void => {
    test('Så er Select required', (): void => {
      render(
        <Select selectId={'test01'} label={'Label test'} required>
          <option value={'Option 1'}>{'Option 1'}</option>
          <option value={'Option 2'}>{'Option 2'}</option>
          <option value={'Option 3'}>{'Option 3'}</option>
        </Select>
      );

      const select = screen.getByRole('combobox');
      expect(select).toBeRequired();
    });
  });

  describe('Når et option er satt til selected true', (): void => {
    test('Så er det satt som default Select option', (): void => {
      render(
        <Select selectId={'test01'} label={'Label test'}>
          <option value={'Option 1'}>{'Option 1'}</option>
          <option selected={true} value={'Option 2'}>
            {'Option 2'}
          </option>
          <option value={'Option 3'}>{'Option 3'}</option>
        </Select>
      );

      const select = screen.getByRole('combobox');
      expect(select).toHaveValue('Option 2');
    });
  });
});