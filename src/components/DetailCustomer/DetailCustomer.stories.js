/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import DetailCustomer from './index';

const customer = {
  name: 'João',
  lastName: 'João',
  address: 'South Sherman',
  latestVisit: '2h',
};

storiesOf('DetailCustomer', module).add('default customer', () => (
  <DetailCustomer customer={customer} />
));
