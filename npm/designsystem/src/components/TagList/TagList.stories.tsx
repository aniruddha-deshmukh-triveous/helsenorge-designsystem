import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import TagList from './TagList';
import Docs from '../../docs';
import Tag from '../Tag';

const meta = {
  title: 'triveous-h-d-designsystem/Components/TagList',
  component: TagList,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={TagList} />,
      description: {
        component:
          'Som innbygger vil jeg kunne ta stilling til flere Tager med informasjon i en liste slik at jeg effektivt kan scanne gjennom nøkkelinformasjon for elementer i listen og gjennomføre mine oppgaver.',
      },
    },
  },
} satisfies Meta<typeof TagList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TagList>
      <Tag>{'Læring'}</Tag>
      <Tag>{'Psykisk helse'}</Tag>
      <Tag>{'Fysisk helse'}</Tag>
      <Tag>{'Livsstil'}</Tag>
    </TagList>
  ),
};
