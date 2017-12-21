/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CustomerInfo from './index';

const purchasesLong = [
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
  {
    id: 'cjbg0t7u0bw5h0139mjoyxjnl',
    description: 'Potato3',
    value: 2.222,
  },
  {
    id: 'cjbgmrbbxlyjc0118n7gb5bep',
    description: 'Teste 12',
    value: 123,
  },
];

const purchasesShort = [
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

storiesOf('CustomerInfo', module)
  .add('with short purchases', () => (
    <CustomerInfo purchases={purchasesShort} totalValue={0} />
  ))
  .add('with long purchases', () => (
    <CustomerInfo purchases={purchasesLong} totalValue={0} />
  ))
  .add('with purchases and total value', () => (
    <CustomerInfo purchases={purchasesShort} totalValue={59} />
  ));
