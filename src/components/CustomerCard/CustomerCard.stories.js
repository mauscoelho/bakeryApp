/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CustomerCard from './index';

storiesOf('CustomerCard', module)
  .add('with long text', () => (
    <CustomerCard
      name={'Mauricio'}
      lastName={'Coelho'}
      address={'7889 West Tunnel Apt. 676 South Sherman, AK 16549'}
      latestVisit={'1h'}
    />
  ))
  .add('with short text', () => (
    <CustomerCard
      name={'Mauricio'}
      lastName={'Coelho'}
      address={'Lombaardenstraat'}
      latestVisit={'1h'}
    />
  ));
