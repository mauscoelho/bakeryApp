/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CustomerCard from './index';

const longCustomer = {
  name: 'Mauricio',
  lastName: 'Coelho',
  address: '7889 West Tunnel Apt. 676 South Sherman, AK 16549',
  latestVisit: '1h',
};

const shortCustomer = {
  name: 'João',
  lastName: 'João',
  address: 'South Sherman',
  latestVisit: '2h',
};

storiesOf('CustomerCard', module)
  .add('with long text', () => <CustomerCard customer={longCustomer} />)
  .add('with short text', () => <CustomerCard customer={shortCustomer} />);
