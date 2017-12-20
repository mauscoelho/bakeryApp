import { StackNavigator } from 'react-navigation';
import CustomerList from './containers/CustomerList/index';

const Routes = StackNavigator({
  Home: {
    screen: CustomerList,
    navigationOptions: {
      title: 'Home',
    },
  },
});

export default Routes;
