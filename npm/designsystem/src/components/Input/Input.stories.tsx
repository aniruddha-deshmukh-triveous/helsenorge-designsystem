import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input, { InputProps, InputTypes } from './Input';
import { FormMode, FormVariant } from '../../constants';
import GridExample from '../GridExample';
import Icon, { IconSize } from '../Icons';
import Hospital from '../Icons/Hospital';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          'Som innbygger vil jeg kunne skrive inn korte tekster slik at jeg kan gjøre mine oppgaver.<br><br>Bruksområde: For å la innbygger skrive inn en tekst (enkeltlinje, begrenset mengde)',
      },
    },
  },
  argTypes: {
    defaultValue: {
      control: 'text',
      defaultValue: '',
    },
    placeholder: {
      control: 'text',
      defaultValue: 'Skriv inn tekst her',
    },
    width: {
      control: 'number',
      defaultValue: undefined,
    },
    variant: {
      control: 'select',
      options: FormVariant,
      defaultValue: FormVariant.normal,
    },
    transparent: {
      control: 'boolean',
      defaultValue: false,
    },
    type: {
      control: 'select',
      options: InputTypes,
      defaultValue: InputTypes.text,
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    mode: {
      control: 'select',
      options: FormMode,
      defaultValue: FormMode.onwhite,
    },
    label: {
      control: 'text',
      defaultValue: 'Skriv inn din tekst',
    },
    showicon: {
      control: 'boolean',
      defaultValue: true,
    },
    iconRight: {
      control: 'boolean',
      defaultValue: false,
    },
    readOnly: {
      control: 'boolean',
      defaultValue: false,
    },
    autoComplete: {
      control: 'text',
      defaultValue: '',
    },
    name: {
      control: 'text',
      defaultValue: '',
    },
    required: {
      control: 'boolean',
      defaultValue: false,
    },
    maxCharacters: {
      control: 'number',
    },
    maxText: {
      control: 'text',
      defaultValue: 'tegn',
    },
  },
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = ({ showicon, ...rest }: InputProps & { showicon?: boolean }) => (
  <GridExample>
    <Input {...rest} icon={showicon ? Hospital : undefined} />
  </GridExample>
);

export const MultipleExamples: ComponentStory<typeof Input> = ({ showicon, ...rest }: InputProps & { showicon?: boolean }) => (
  <GridExample>
    <Input {...rest} icon={showicon ? Hospital : undefined} />
    <Input {...rest} icon={showicon ? Hospital : undefined} />
    <Input {...rest} icon={showicon ? Hospital : undefined} />
  </GridExample>
);

export const MaxCharacters: ComponentStory<typeof Input> = ({ showicon, ...rest }: InputProps & { showicon?: boolean }) => (
  <GridExample>
    <div style={{ display: 'flex', width: '50rem' }}>
      <Input {...rest} maxCharacters={10} />
    </div>

    <div style={{ display: 'flex', width: '40rem' }}>
      <Input {...rest} maxCharacters={100} />
    </div>

    <div style={{ width: '20rem' }}>
      <Input {...rest} maxCharacters={100} defaultValue="test" />
    </div>
  </GridExample>
);

export const ChildrenAfterLabel: ComponentStory<typeof Input> = ({ showicon, ...rest }: InputProps & { showicon?: boolean }) => (
  <GridExample>
    <Input {...rest} afterLabelChildren={<Icon size={IconSize.XSmall} svgIcon={Hospital}></Icon>} />
  </GridExample>
);
export const AfterInputChildren: ComponentStory<typeof Input> = ({ showicon, ...rest }: InputProps & { showicon?: boolean }) => (
  <GridExample>
    <Input {...rest} afterInputChildren={<div style={{ marginTop: '1rem' }}>*Ikke oppgi personsensitiv informasjon</div>} />
    <Input {...rest} afterInputChildren={'Tekst uten innsendt div'} />
  </GridExample>
);
