import { StackNavigator } from 'react-navigation';
import CustomerList from './containers/CustomerList/index';
import AddCustomer from './components/AddCustomer/index';

const Routes = StackNavigator({
  Home: {
    screen: CustomerList,
    navigationOptions: {
      title: 'Home',
    },
  },
  AddCustomer: {
    screen: AddCustomer,
    navigationOptions: {
      title: 'Add Customer',
    },
  },
});

export default Routes;
