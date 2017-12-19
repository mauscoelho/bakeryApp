/* eslint-disable global-require */
import React from 'react';
import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

configure(() => {
  require('./stories');
}, module);

const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: true });

const StorybookUIHMRRoot = () => <StorybookUIRoot />;

AppRegistry.registerComponent('bakeryApp', () => StorybookUIHMRRoot);
export default StorybookUIHMRRoot;
