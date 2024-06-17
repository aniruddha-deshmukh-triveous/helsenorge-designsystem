/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import PromoPanel from './PromoPanel';
import Docs from '../../docs';

const meta = {
  title: 'triveous-h-d-designsystem/Components/PromoPanel',
  component: PromoPanel,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={PromoPanel} />,
      description: {
        component:
          'Som en innbygger vil jeg kunne gjøres spesielt oppmerksom på inngang til vesentlig innhold på en annen side som er relevant for meg på den siden jeg befinner meg.',
      },
    },
  },
  args: {
    title: 'Fastlegen din',
    children: 'Kontakt fastlegen og se alle tjenestene',
    href: 'https://www.helsenorge.no',
    target: '_parent',
    color: 'neutral',
    illustration: 'Doctor',
  },
  argTypes: {
    title: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: ['neutral', 'blueberry', 'cherry'],
    },
    illustration: {
      control: 'select',
      options: ['', 'Doctor', 'HealthcarePersonnel'],
    },
  },
} satisfies Meta<typeof PromoPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <PromoPanel {...args} />,
};

export const CustomLinkComponent: Story = {
  args: {
    linkComponent: <a href={'https://www.helsenorge.no'} target="_blank" rel="noreferrer" />,
  },
  render: args => <PromoPanel {...args} />,
};
