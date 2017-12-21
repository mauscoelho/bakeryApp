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

const purchases = [
  {
    id: 'cjbg0sd25bxjq0166byvg8kcl',
    description: 'Potato',
    value: 2,
  },
  {
    id: 'cjbg0sqv4bqla01531p4kjyoa',
    description: 'Potato2',
    value: 2.4,
  },
];

storiesOf('DetailCustomer', module)
  .add('default customer with loading', () => (
    <DetailCustomer customer={customer} loading purchases={[]} />
  ))
  .add('default customer with no purchases', () => (
    <DetailCustomer customer={customer} loading={false} purchases={[]} />
  ))
  .add('default customer with purchases', () => (
    <DetailCustomer customer={customer} loading={false} purchases={purchases} />
  ));
