/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import AddCustomer from './index';

storiesOf('AddCustomer', module)
  .add('with empyt form', () => <AddCustomer />)
  .add('with full values', () => (
    <AddCustomer
      name={'Marcella'}
      lastName={'Conn'}
      email={'Armstrong.Unique@hotmail.com'}
      address={'2156 Augusta Hill Suite 681 Isobelmouth, ID 96040-4611'}
    />
  ));
