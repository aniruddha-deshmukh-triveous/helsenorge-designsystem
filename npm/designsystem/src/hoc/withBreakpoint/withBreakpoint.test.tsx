import React from 'react';

import { render, screen } from '@testing-library/react';
import { when } from 'jest-when';
import { vi as jest } from 'vitest';

import { BreakpointProps, withBreakpoint } from './withBreakpoint';
import { mockWindowMatchMedia } from '../../__mocks__/matchMedia';
import { Breakpoint } from '../../hooks/useBreakpoint';
import { screen as themeScreen } from '../../theme/grid';

const Example: React.FC<BreakpointProps> = ({ breakpoint }) => {
  return <>{`${Breakpoint[breakpoint]}/${breakpoint}`}</>;
};

const ExampleWithBreakpoint = withBreakpoint(Example);

class ClassExample extends React.Component<BreakpointProps> {
  render() {
    return <>{`${Breakpoint[this.props.breakpoint]}/${this.props.breakpoint}`}</>;
  }
}

const ClassExampleWithBreakpoint = withBreakpoint(ClassExample);

describe('Gitt at withBreakpoint skal vises', (): void => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('Når skjermbredden er xl', (): void => {
    test('Så er returnerer withBreakpoint xl breakpoint', (): void => {
      when(mockWindowMatchMedia)
        .calledWith(themeScreen.xl)
        .mockReturnValue({ matches: true, addEventListener: jest.fn(), removeEventListener: jest.fn() });

      render(<ExampleWithBreakpoint />);

      expect(screen.getByText('xl/1450')).toBeVisible();
    });
  });
  describe('Når skjermbredden er lg', (): void => {
    test('Så er returnerer withBreakpoint lg breakpoint', (): void => {
      when(mockWindowMatchMedia)
        .calledWith(themeScreen.xl)
        .mockReturnValue({ matches: false, addEventListener: jest.fn(), removeEventListener: jest.fn() });
      when(mockWindowMatchMedia)
        .calledWith(themeScreen.lg)
        .mockReturnValue({ matches: true, addEventListener: jest.fn(), removeEventListener: jest.fn() });

      render(<ExampleWithBreakpoint />);

      expect(screen.getByText('lg/1088')).toBeVisible();
    });
  });
  describe('Når skjermbredden er md', (): void => {
    test('Så er returnerer withBreakpoint md breakpoint', (): void => {
      when(mockWindowMatchMedia)
        .calledWith(themeScreen.xl)
        .mockReturnValue({ matches: false, addEventListener: jest.fn(), removeEventListener: jest.fn() });
      when(mockWindowMatchMedia)
        .calledWith(themeScreen.lg)
        .mockReturnValue({ matches: false, addEventListener: jest.fn(), removeEventListener: jest.fn() });
      when(mockWindowMatchMedia)
        .calledWith(themeScreen.md)
        .mockReturnValue({ matches: true, addEventListener: jest.fn(), removeEventListener: jest.fn() });

      render(<ExampleWithBreakpoint />);

      expect(screen.getByText('md/768')).toBeVisible();
    });
  });
  describe('Når skjermbredden er sm', (): void => {
    test('Så er returnerer withBreakpoint sm breakpoint', (): void => {
      when(mockWindowMatchMedia)
        .calledWith(themeScreen.xl)
        .mockReturnValue({ matches: false, addEventListener: jest.fn(), removeEventListener: jest.fn() });
      when(mockWindowMatchMedia)
        .calledWith(themeScreen.lg)
        .mockReturnValue({ matches: false, addEventListener: jest.fn(), removeEventListener: jest.fn() });
      when(mockWindowMatchMedia)
        .calledWith(themeScreen.md)
        .mockReturnValue({ matches: false, addEventListener: jest.fn(), removeEventListener: jest.fn() });
      when(mockWindowMatchMedia)
        .calledWith(themeScreen.sm)
        .mockReturnValue({ matches: true, addEventListener: jest.fn(), removeEventListener: jest.fn() });

      render(<ExampleWithBreakpoint />);

      expect(screen.getByText('sm/564')).toBeVisible();
    });
  });
  describe('Når skjermbredden er xs', (): void => {
    test('Så er returnerer withBreakpoint xs breakpoint', (): void => {
      when(mockWindowMatchMedia)
        .calledWith(themeScreen.xl)
        .mockReturnValue({ matches: false, addEventListener: jest.fn(), removeEventListener: jest.fn() });
      when(mockWindowMatchMedia)
        .calledWith(themeScreen.lg)
        .mockReturnValue({ matches: false, addEventListener: jest.fn(), removeEventListener: jest.fn() });
      when(mockWindowMatchMedia)
        .calledWith(themeScreen.md)
        .mockReturnValue({ matches: false, addEventListener: jest.fn(), removeEventListener: jest.fn() });
      when(mockWindowMatchMedia)
        .calledWith(themeScreen.sm)
        .mockReturnValue({ matches: false, addEventListener: jest.fn(), removeEventListener: jest.fn() });
      when(mockWindowMatchMedia)
        .calledWith(themeScreen.xs)
        .mockReturnValue({ matches: true, addEventListener: jest.fn(), removeEventListener: jest.fn() });

      render(<ExampleWithBreakpoint />);

      expect(screen.getByText('xs/360')).toBeVisible();
    });
  });
  describe('Når skjermbredden er xxs', (): void => {
    test('Så er returnerer withBreakpoint xxs breakpoint', (): void => {
      when(mockWindowMatchMedia)
        .calledWith(themeScreen.xl)
        .mockReturnValue({ matches: false, addEventListener: jest.fn(), removeEventListener: jest.fn() });
      when(mockWindowMatchMedia)
        .calledWith(themeScreen.lg)
        .mockReturnValue({ matches: false, addEventListener: jest.fn(), removeEventListener: jest.fn() });
      when(mockWindowMatchMedia)
        .calledWith(themeScreen.md)
        .mockReturnValue({ matches: false, addEventListener: jest.fn(), removeEventListener: jest.fn() });
      when(mockWindowMatchMedia)
        .calledWith(themeScreen.sm)
        .mockReturnValue({ matches: false, addEventListener: jest.fn(), removeEventListener: jest.fn() });
      when(mockWindowMatchMedia)
        .calledWith(themeScreen.xs)
        .mockReturnValue({ matches: false, addEventListener: jest.fn(), removeEventListener: jest.fn() });
      when(mockWindowMatchMedia)
        .calledWith(themeScreen.xxs)
        .mockReturnValue({ matches: true, addEventListener: jest.fn(), removeEventListener: jest.fn() });

      render(<ExampleWithBreakpoint />);

      expect(screen.getByText('xxs/0')).toBeVisible();
    });
  });
  describe('Når komponenten er klassebasert', (): void => {
    test('Så er returnerer withBreakpoint breakpoint', (): void => {
      when(mockWindowMatchMedia)
        .calledWith(themeScreen.xl)
        .mockReturnValue({ matches: true, addEventListener: jest.fn(), removeEventListener: jest.fn() });

      render(<ClassExampleWithBreakpoint />);

      expect(screen.getByText('xl/1450')).toBeVisible();
    });
  });
});
