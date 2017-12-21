/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Purchase from './index';

storiesOf('Purchase', module).add('with empyt form', () => <Purchase />);
