import React from 'react';
import User from '../src/components/User.js';
import { storiesOf } from '@storybook/react';

storiesOf('User', module)
  .add('User', () => (
    <User description={"This is desciption"} title={"Euro Streat beat"}>
    </User>
  ));