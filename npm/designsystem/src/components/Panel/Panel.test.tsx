import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import Panel from './Panel';
import { Icon, IconSize } from '../Icons';
import Calendar from '../Icons/Calendar';
import Avatar from '../Avatar';
import userEvent from '@testing-library/user-event';

describe('Gitt at Panel skal vises', (): void => {
  describe('Når testId-prop er satt', (): void => {
    test('Så kan komponenten finnes ved hjelp av testId', (): void => {
      render(<Panel testId="bare-tester" />);
      const component = screen.getByTestId('bare-tester');
      expect(component).toBeVisible();
      expect(component).toHaveAttribute('data-analyticsid', 'panel');
    });
  });

  describe('Når icon er satt', (): void => {
    test('Så skal komponenten vise ikon på venstre side', (): void => {
      render(<Panel testId="bare-tester" icon={<Icon testId="icon-testid" svgIcon={Calendar} size={IconSize.XSmall} />} />);
      const icon = screen.getByTestId('icon-testid');
      expect(icon).toBeVisible();
      expect(icon.parentElement).toHaveClass('panel__icon');
    });
  });

  describe('Når icon er satt og iconRight er aktiv', (): void => {
    test('Så skal komponenten vise ikon på høyre side', (): void => {
      render(<Panel testId="bare-tester" iconRight icon={<Icon testId="icon-testid" svgIcon={Calendar} size={IconSize.XSmall} />} />);
      const icon = screen.getByTestId('icon-testid');
      expect(icon).toBeVisible();
      expect(icon.parentElement).toHaveClass('panel__icon--right');
    });
  });

  describe('Når Avatar er satt', (): void => {
    test('Så skal komponenten vise Avatar', (): void => {
      render(<Panel icon={<Avatar testId="avatar-test">{'Anne Brun'}</Avatar>} />);
      const avatar = screen.getByTestId('avatar-test');
      expect(avatar).toBeVisible();
      expect(avatar.parentElement).toHaveClass('panel__icon');
    });
  });

  describe('Gitt at status ikke er satt', (): void => {
    test('Så skal Panel vises som default normal', (): void => {
      render(<Panel testId="panel-test-status" title="Dette er en tittel" />);
      const panel = screen.getByTestId('panel-test-status');
      expect(panel.firstChild).toHaveClass('panel panel--fill');
    });
  });

  describe('Gitt at status er new og statusMessage er satt', (): void => {
    test('Så vises panel i new visning og Badge vises med statusMessage', (): void => {
      render(<Panel testId="panel-test-status" status="new" statusMessage="1 ny" title="Dette er en tittel" />);
      const panel = screen.getByTestId('panel-test-status');
      expect(panel.firstChild).toHaveClass('panel panel--fill panel--new panel--status');
      const badge = screen.getByTestId('badge-status');
      expect(badge.innerHTML).toEqual('1 ny');
    });
  });

  describe('Gitt at status er draft og statusMessage er satt', (): void => {
    test('Så vises panel i draft visning og statusMessage vises med ikon', (): void => {
      render(<Panel testId="panel-test-status" status="draft" statusMessage="Dette en beskjed" title="Dette er en tittel" />);
      const panel = screen.getByTestId('panel-test-status');
      expect(panel.firstChild).toHaveClass('panel panel--fill panel--draft panel--status');
      const status = screen.getByTestId('display-status');
      expect(status.children[1].innerHTML).toEqual('Dette en beskjed');

      //expect draft icon
      expect(status).toMatchSnapshot();
    });
  });

  describe('Gitt at status er error og statusMessage er satt', (): void => {
    test('Så vises panel i error visning og statusMessage vises med ikon', (): void => {
      render(<Panel testId="panel-test-status" status="error" statusMessage="Dette en error beskjed" title="Dette er en tittel" />);
      const panel = screen.getByTestId('panel-test-status');
      expect(panel.firstChild).toHaveClass('panel panel--fill panel--error panel--status');
      const status = screen.getByTestId('display-status');
      expect(status.children[1].innerHTML).toEqual('Dette en error beskjed');

      //expect error icon
      expect(status).toMatchSnapshot();
    });
  });

  describe('Gitt at panelet har default variant', (): void => {
    test('Så skal panelet vise en default variant', (): void => {
      render(<Panel testId="panel-test-status" title="Dette er en tittel" />);
      const panel = screen.getByTestId('panel-test-status');
      expect(panel.firstChild).toHaveClass('panel panel--fill');
    });
  });

  describe('Gitt at panelet har variant line', (): void => {
    test('Så skal panelet vise variant line', (): void => {
      render(<Panel variant="line" testId="panel-test-status" title="Dette er en tittel" />);
      const panel = screen.getByTestId('panel-test-status');
      expect(panel.firstChild).toHaveClass('panel panel--line');
    });
  });

  describe('Gitt at panelet har variant stroke', (): void => {
    test('Så skal panelet vise variant stroke', (): void => {
      render(<Panel variant="stroke" testId="panel-test-status" title="Dette er en tittel" />);
      const panel = screen.getByTestId('panel-test-status');
      expect(panel.firstChild).toHaveClass('panel panel--stroke');
    });
  });

  describe('Gitt at panelet har variant white', (): void => {
    test('Så skal panelet vise variant white', (): void => {
      render(<Panel variant="white" testId="panel-test-status" title="Dette er en tittel" />);
      const panel = screen.getByTestId('panel-test-status');
      expect(panel.firstChild).toHaveClass('panel panel--white');
    });
  });

  describe('Gitt at panelet har en url knapp', (): void => {
    test('Så skal knappen rendres som anchor-tag', (): void => {
      render(<Panel url="/#?test" title="Dette er en tittel" />);
      const btnDetails = screen.getByTestId('url');
      expect(btnDetails).toHaveAttribute('href', '/#?test');
      expect(btnDetails).toHaveAttribute('target', '_self');
    });
  });

  describe('Gitt at panelet har en expand knapp, og gitt at knappen trykkes', (): void => {
    test('Så vises detalje-området', (): void => {
      render(
        <Panel title="Dette er en tittel">
          <div>{'Details'}</div>
        </Panel>
      );

      const btnDetails = screen.getAllByTestId('expand');

      expect(btnDetails).toHaveLength(2);

      const panelDetails = screen.getByTestId('panel-details');

      userEvent.click(btnDetails[0]);
      expect(screen.getByText('Details')).toBeVisible();
      expect(panelDetails).toHaveClass('panel-details--open');

      userEvent.click(btnDetails[1]);
      expect(panelDetails).not.toHaveClass('panel-details--open');
    });
  });

  describe('Gitt at panelet er button, og container trigger click-event', (): void => {
    test('Så vises detalje-området', (): void => {
      render(
        <Panel testId="panel-test" containerAsButton title="Dette er en tittel">
          <div>{'Details'}</div>
        </Panel>
      );

      const container = screen.getByTestId('panel-test');
      const btnDetails = screen.getAllByTestId('expand');

      expect(btnDetails).toHaveLength(2);
      expect(btnDetails[0]).toHaveAttribute('tabIndex', '-1');
      expect(btnDetails[1]).not.toHaveAttribute('tabIndex', '-1');

      const panelDetails = screen.getByTestId('panel-details');

      userEvent.click(container.children[0]);

      expect(screen.getByText('Details')).toBeVisible();
      expect(panelDetails).toHaveClass('panel-details--open');

      userEvent.click(btnDetails[1]);
      expect(panelDetails).not.toHaveClass('panel-details--open');
    });
  });

  describe('Gitt at panelet er button, og container trigger key-down event', (): void => {
    test('Så vises detalje-området', (): void => {
      render(
        <Panel testId="panel-test" containerAsButton title="Dette er en tittel">
          <div>{'Details'}</div>
        </Panel>
      );

      const container = screen.getByTestId('panel-test').children[0];

      const panelDetails = screen.getByTestId('panel-details');

      fireEvent.keyDown(container, { key: 'Enter' });

      expect(screen.getByText('Details')).toBeVisible();
      expect(panelDetails).toHaveClass('panel-details--open');

      fireEvent.keyDown(container, { key: ' ' });
      expect(panelDetails).not.toHaveClass('panel-details--open');
    });
  });

  describe('Gitt at panelet skal vise tid og dato', (): void => {
    test('Så vises tid og dato', (): void => {
      render(
        <Panel
          testId="panel-test"
          containerAsButton
          date="dato"
          time="tid"
          title="Dette er en tittel"
          contentA={'Innhold A'}
          contentB={'Innhold B'}
        >
          <div>{'Details'}</div>
        </Panel>
      );

      expect(screen.getByText('dato')).toBeVisible();
      expect(screen.getByText('tid')).toBeVisible();
    });
  });
});
