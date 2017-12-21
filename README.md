# BakeryApp

A quickly and beautiful bakery CRM app

See the development progress in this [board](https://trello.com/b/OZDxkW6C/bakeryapp)

## Dependencies

* `node` - brew install node
* `react-native-cli` - npm install -g react-native-cli
* `watchman`- brew install watchman
* `Xcode` - The easiest way to install Xcode is via the Mac App Store

For more information see the [link](https://facebook.github.io/react-native/docs/getting-started.html)

## Getting Started

* `yarn` - install dependencies
* `react-native run-ios --configuration Release` - **Please, run in Release mode to hide a [known issue](#known-issues)**
* `react-native run-android` - run on Android

## Storybook and storyshots for BDD tests

Use storybook to see all of components and states

* `yarn test` - run storyshots
* `yarn storybook` - run storybook server
* Run `react-native run-ios` or `react-native run-android`

## Known issues

* `RedBox - JSON value '<null>'` - there is an issue with `react-apollo` if you run in Debug mode on iOS. See more [here](https://github.com/apollographql/react-apollo/issues/1441)
