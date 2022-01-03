import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NotificationPanel from './NotificationPanel';

describe('Gitt at NotificationPanel skal vises', () => {
  describe('Når panelet vises med default props', () => {
    test('Så rendres komponenten riktig', (): void => {
      const { container } = render(<NotificationPanel>Some text here for testing.</NotificationPanel>);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Når panelet skal kunne lukkes', () => {
    test('Så kalles onClick-handler når man klikker på lukkeknappen', (): void => {
      const mockClose = jest.fn();

      render(
        <NotificationPanel onClick={mockClose} dismissable ariaLabelCloseBtn="Lukk denne beskjeden">
          Some text here for testing.
        </NotificationPanel>
      );

      const closeButton = screen.getByRole('button', { name: 'Lukk denne beskjeden' });
      userEvent.click(closeButton);
      expect(mockClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når panelet kan lukkes', () => {
    test('Så kalles onClick-handleren når man klikker på knappen', (): void => {
      const mockOnClick = jest.fn();
      const { container } = render(
        <NotificationPanel dismissable onClick={mockOnClick}>
          Some text here for testing.
        </NotificationPanel>
      );
      expect(container).toMatchSnapshot();

      const closeButton = screen.getByRole('button');
      userEvent.click(closeButton);

      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når testId-prop er satt', (): void => {
    test('Så kan komponenten finnes ved hjelp av testId', (): void => {
      render(<NotificationPanel testId="bare-tester">Some text here for testing.</NotificationPanel>);

      const component = screen.getByTestId('bare-tester');
      expect(component).toBeVisible();
    });
  });
});
