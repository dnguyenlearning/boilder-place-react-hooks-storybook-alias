import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from './index';

storiesOf('Button', module)
  .add('with text', () => 
  <Button
    color="white"
    background="red"
  >Hello Button</Button>)
