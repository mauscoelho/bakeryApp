/* eslint-disable import/no-extraneous-dependencies, 
import/no-unresolved, import/extensions, global-require */

import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

configure(() => {
  require('./configureStories');
}, module);

const StorybookUI = getStorybookUI({ port: 9001, onDeviceUI: true });
AppRegistry.registerComponent('ArticlesApp', () => StorybookUI);
export default StorybookUI;
