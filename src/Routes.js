import { StackNavigator } from 'react-navigation';
import CustomerList from './containers/CustomerList/index';
import AddCustomer from './containers/AddCustomer/index';
import DetailCustomer from './components/DetailCustomer/index';

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
  DetailCustomer: {
    screen: DetailCustomer,
    navigationOptions: {
      title: 'Detail Customer',
    },
  },
});

export default Routes;
