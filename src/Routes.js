import { StackNavigator } from 'react-navigation';
import CustomerList from './containers/CustomerList/index';
import AddCustomer from './containers/AddCustomer/index';
import EditCustomer from './containers/EditCustomer/index';
import DetailCustomer from './containers/DetailCustomer/index';
import Purchase from './components/Purchase/index';

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
  EditCustomer: {
    screen: EditCustomer,
    navigationOptions: {
      title: 'Edit Customer',
    },
  },
  DetailCustomer: {
    screen: DetailCustomer,
    navigationOptions: {
      title: 'Detail Customer',
    },
  },
  Purchase: {
    screen: Purchase,
    navigationOptions: {
      title: 'Add Purchase',
    },
  },
});

export default Routes;
