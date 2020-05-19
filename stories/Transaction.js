import React from 'react';
import Transaction from '../src/components/Transaction.js';
import { storiesOf } from '@storybook/react';

storiesOf('Transaction', module)
.add('Transaction', () => (
  <Transaction firstName={"Mew"} lastName={"Meww"} product={"Math"} date={"1-1-2020"}>
  </Transaction>
));