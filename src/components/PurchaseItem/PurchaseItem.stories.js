/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import PurchaseItem from './index';

const purchase = {
  id: 'cjbg0sd25bxjq0166byvg8kcl',
  description: 'Potato',
  value: 2,
};

storiesOf('PurchaseItem', module).add('with purchase', () => (
  <PurchaseItem purchase={purchase} />
));
