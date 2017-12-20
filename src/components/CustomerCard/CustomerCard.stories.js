/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CustomerCard from './index';

storiesOf('CustomerCard', module).add('default', () => <CustomerCard />);
