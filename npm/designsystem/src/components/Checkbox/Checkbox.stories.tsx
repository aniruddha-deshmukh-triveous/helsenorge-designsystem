import React from 'react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { FormMode, FormVariant } from '../../constants';
import Checkbox from './Checkbox';

const stories = storiesOf('Checkbox', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <div
    style={{
      width: '40rem',
    }}
  >
    <Checkbox
      label={'Check me out!'}
      checked={boolean('Checked', false)}
      disabled={boolean('Disabled', false)}
      mode={select('Mode', FormMode, FormMode.OnWhite)}
      variant={select('Variant', FormVariant, FormVariant.Normal)}
    />
  </div>
));
