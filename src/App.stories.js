/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import App from './App';

storiesOf('App', module)
  .add('with default', () => <App />)
  .add('with default two', () => <App />);
