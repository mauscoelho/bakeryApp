import { graphql } from 'react-apollo';
import { compose, branch, renderComponent, withHandlers } from 'recompose';
import { withNavigation } from 'react-navigation';
import { ActivityIndicator } from 'react-native';
import { ALL_CUSTOMERS_QUERY } from '../../data/query';
import CustomerList from '../../components/CustomerList';

const isLoading = branch(
  ({ allCustomersQuery }) => {
    console.log(allCustomersQuery);
    return allCustomersQuery.loading
  },
  renderComponent(ActivityIndicator),
);

const onRefresh = ({ allCustomersQuery }) => () => {
  allCustomersQuery.refetch();
};

const onPressFab = ({ navigation }) => () => {
  navigation.navigate('AddCustomer');
};

const enhance = compose(
  graphql(ALL_CUSTOMERS_QUERY, {
    name: 'allCustomersQuery',
    options: {
      fetchPolicy: 'cache-and-network',
    },
  }),
  isLoading,
  withNavigation,
  withHandlers({
    onRefresh,
    onPressFab,
  }),
);

export default enhance(CustomerList);
