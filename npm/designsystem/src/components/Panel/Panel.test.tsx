import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Panel from './Panel';
import { Icon, IconSize } from '../Icons';
import Calendar from '../Icons/Calendar';
import Avatar from '../Avatar';

import * as uuidUtils from '../../utils/uuid';

describe('Gitt at Panel skal vises', (): void => {
  describe('Når testId-prop er satt', (): void => {
    test('Så kan komponenten finnes ved hjelp av testId', (): void => {
      render(<Panel testId="bare-tester" />);
      const component = screen.getByTestId('bare-tester');
      expect(component).toBeVisible();
      expect(component).toHaveAttribute('data-analyticsid', 'panel');
    });
  });

  describe('Når panelet har children', (): void => {
    describe('Når panelet har title', (): void => {
      test('Så er tittelen synlig', (): void => {
        render(
          <Panel title="Medisinsk fødselsregister" buttonText="Vis detaljer">
            <p>Mer tekst</p>
          </Panel>
        );
        const title = screen.getByRole('heading', { name: 'Medisinsk fødselsregister' });
        expect(title).toBeVisible();
      });
      test('Så har knappen som brukes for å ekspandere et unikt navn', (): void => {
        jest.spyOn(uuidUtils, 'uuid').mockReturnValueOnce('a').mockReturnValueOnce('b');

        render(
          <Panel title="Medisinsk fødselsregister" buttonText="Vis detaljer">
            <p>Mer tekst</p>
          </Panel>
        );
        const button = screen.getByRole('button', { name: 'Vis detaljer Medisinsk fødselsregister' });
        expect(button).toBeVisible();
      });
    });
    describe('Når panelet ikke har title', (): void => {
      test('Så har knappen som brukes for å ekspandere riktig navn', (): void => {
        jest.spyOn(uuidUtils, 'uuid').mockReturnValueOnce('a').mockReturnValueOnce('b');

        render(
          <Panel buttonText="Vis detaljer">
            <p>Mer tekst</p>
          </Panel>
        );
        const button = screen.getByRole('button', { name: 'Vis detaljer' });
        expect(button).toBeVisible();
      });
    });
  });

  describe('Når panelet har url', (): void => {
    describe('Når panelet har title', (): void => {
      test('Så har linken et unikt navn', (): void => {
        jest.spyOn(uuidUtils, 'uuid').mockReturnValueOnce('a').mockReturnValueOnce('b');

        render(<Panel title="Medisinsk fødselsregister" buttonText="Åpne" url={'https://www.helsenorge.no'} />);

        const link = screen.getByRole('link', { name: 'Åpne Medisinsk fødselsregister' });
        expect(link).toBeVisible();
      });
    });
  });

  describe('Når buttonAriaLabelledById-prop er satt', (): void => {
    test('Så har knappen som brukes for å ekspandere riktig navn', (): void => {
      render(
        <Panel buttonText="Vis detaljer" buttonAriaLabelledById="egen-id" contentA={<h2 id="egen-id">Egendefinert tittel</h2>}>
          <p>Mer tekst</p>
        </Panel>
      );
      const button = screen.getByRole('button', { name: 'Vis detaljer Egendefinert tittel' });
      expect(button).toBeVisible();
    });
  });

  describe('Når buttonAriaLabel-prop er satt', (): void => {
    test('Så har knappen som brukes for å ekspandere riktig navn', (): void => {
      render(
        <Panel buttonText="Vis detaljer" buttonAriaLabel="Helt egen tekst på knappen">
          <p>Mer tekst</p>
        </Panel>
      );
      const button = screen.getByRole('button', { name: 'Helt egen tekst på knappen' });
      expect(button).toBeVisible();
    });
  });

  describe('Når title og  buttonAriaLabel-prop er satt', (): void => {
    test('Så har knappen som brukes for å ekspandere riktig navn', (): void => {
      render(
        <Panel title="Medisinsk fødselsregister" buttonText="Vis detaljer" buttonAriaLabel="Helt egen tekst på knappen">
          <p>Mer tekst</p>
        </Panel>
      );
      const button = screen.getByRole('button', { name: 'Helt egen tekst på knappen' });
      expect(button).toBeVisible();
    });
  });

  describe('Når titleHtmlMarkup-prop er satt', (): void => {
    test('Så er tittel satt til ønsket overskriftsnivå', (): void => {
      render(<Panel title="Tittel" titleHtmlMarkup="h3" />);
      const title = screen.getByRole('heading', { name: 'Tittel' });
      expect(title).toBeVisible();
      expect(title.tagName).toEqual('H3');
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
    test('Så vises detalje-området', async (): Promise<void> => {
      render(
        <Panel title="Dette er en tittel" renderChildrenWhenClosed>
          <div>{'Details'}</div>
        </Panel>
      );

      const btnDetails = screen.getByTestId('expand');

      expect(btnDetails).toBeVisible();

      const panelDetails = screen.getByTestId('panel-details');

      await userEvent.click(btnDetails);
      expect(screen.getByText('Details')).toBeVisible();
      expect(panelDetails).toHaveClass('panel-details--open');

      await userEvent.click(btnDetails);
      expect(panelDetails).not.toHaveClass('panel-details--open');
    });
  });

  describe('Gitt at panelet skal vises som ekspandert', (): void => {
    test('Så vises innholdet ekspandert fra starten av', (): void => {
      render(
        <Panel title={'Dette er en tittel'} expanded>
          <h1>Innhold i panel</h1>
        </Panel>
      );

      const button = screen.getByTestId('expand');
      expect(button).toHaveAttribute('aria-expanded', 'true');

      const content = screen.getByRole('heading', { name: 'Innhold i panel' });
      expect(content).toBeInTheDocument();
    });
    test('Så er det bare én knapp for skjul detaljer', (): void => {
      render(
        <Panel title={'Dette er en tittel'} expanded>
          <h1>Innhold i panel</h1>
        </Panel>
      );

      const button = screen.getByTestId('expand');
      expect(button).toBeVisible();
    });
  });

  describe('Gitt at panelet har onExpand-callback', (): void => {
    describe('Når man klikker på panelet to ganger', (): void => {
      test('Så kalles callback først med true og så med false', async (): Promise<void> => {
        const handleExpand = jest.fn();
        render(
          <Panel title={'Dette er en tittel'} onExpand={handleExpand}>
            <h1>Innhold i panel</h1>
          </Panel>
        );

        const button = screen.getAllByTestId('expand')[0];

        await userEvent.click(button);
        await userEvent.click(button);

        expect(handleExpand).toHaveBeenCalledTimes(2);
        expect(handleExpand).toHaveBeenNthCalledWith(1, true);
        expect(handleExpand).toHaveBeenNthCalledWith(2, false);
      });
    });
  });
  describe('Gitt at panelet har onExpand-callback og expanded satt til true', (): void => {
    describe('Når man klikker på panelet én gang', (): void => {
      test('Så kalles callback først med true og så med false', async (): Promise<void> => {
        const handleExpand = jest.fn();
        render(
          <Panel title={'Dette er en tittel'} onExpand={handleExpand} expanded>
            <h1>Innhold i panel</h1>
          </Panel>
        );

        const button = screen.getAllByTestId('expand')[0];

        await userEvent.click(button);

        expect(handleExpand).toHaveBeenCalledTimes(2);
        expect(handleExpand).toHaveBeenNthCalledWith(1, true);
        expect(handleExpand).toHaveBeenNthCalledWith(2, false);
      });
    });
  });

  describe('Gitt at containerAsButton er true', (): void => {
    describe('Når man klikker på knappen for å vise detaljer', (): void => {
      test('Så vises detaljer-området', async (): Promise<void> => {
        render(
          <Panel testId="panel-test" containerAsButton title="Dette er en tittel" renderChildrenWhenClosed>
            <div>{'Details'}</div>
          </Panel>
        );

        const button = screen.getByTestId('expand');

        expect(button).toBeVisible();
        expect(button).toHaveAttribute('aria-expanded', 'false');

        await userEvent.click(button);

        expect(screen.getByText('Details')).toBeVisible();
      });
    });
  });

  describe('Gitt at panelet skal vise tid og dato', (): void => {
    test('Så vises tid og dato', (): void => {
      render(
        <Panel testId="panel-test" date="dato" time="tid" title="Dette er en tittel" contentA={'Innhold A'} contentB={'Innhold B'}>
          <div>{'Details'}</div>
        </Panel>
      );

      expect(screen.getByText('dato')).toBeVisible();
      expect(screen.getByText('tid')).toBeVisible();
    });
  });

  describe('Gitt at panelet skal vise lenke som knapp med onClick', () => {
    test('Så kalles onClick-handler når man klikker på knappen', async () => {
      const onClickMock = jest.fn();
      render(<Panel buttonText="Lenke til mer" buttonOnClick={onClickMock} buttonHtmlMarkup="button" />);

      const link = screen.getByRole('button', { name: 'Lenke til mer' });
      await userEvent.click(link);
      expect(onClickMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('Gitt at panelet skal vise lenke som a med onClick', () => {
    test('Så kalles onClick-handler når man klikker på lenken', async () => {
      const onClickMock = jest.fn();
      render(<Panel buttonText="Lenke til mer" buttonOnClick={onClickMock} buttonHtmlMarkup="a" url="#" />);

      const link = screen.getByRole('link', { name: 'Lenke til mer' });

      expect(link).toHaveAttribute('href', '#');

      await userEvent.click(link);
      expect(onClickMock).toHaveBeenCalledTimes(1);
    });
  });
  describe('Når renderChildrenWhenClosed ikke er satt', (): void => {
    test('Så er children ikke rendret', (): void => {
      render(
        <Panel>
          <span data-testid="test">{'Test'}</span>
        </Panel>
      );

      const child = screen.queryByTestId('test');
      expect(child).not.toBeInTheDocument();
    });
  });
  describe('Når renderChildrenWhenClosed er true', (): void => {
    test('Så er children rendret', (): void => {
      render(
        <Panel renderChildrenWhenClosed={true}>
          <span data-testid="test">{'Test'}</span>
        </Panel>
      );

      const child = screen.getByTestId('test');
      expect(child).toBeInTheDocument();
    });
  });
  describe('Når renderChildrenWhenClosed er false', (): void => {
    test('Så er children ikke rendret', (): void => {
      render(
        <Panel renderChildrenWhenClosed={false}>
          <span data-testid="test">{'Test'}</span>
        </Panel>
      );

      const child = screen.queryByTestId('test');
      expect(child).not.toBeInTheDocument();
    });
  });
});
