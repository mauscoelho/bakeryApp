import { graphql } from 'react-apollo';
import { compose, branch, renderComponent } from 'recompose';
import { ActivityIndicator } from 'react-native';
import { ALL_CUSTOMERS_QUERY } from '../../data/query';
import CustomerList from '../../components/CustomerList';

const isLoading = branch(
  ({ allCustomersQuery }) => allCustomersQuery.loading,
  renderComponent(ActivityIndicator),
);

const enhance = compose(
  graphql(ALL_CUSTOMERS_QUERY, {
    name: 'allCustomersQuery',
  }),
  isLoading,
);

export default enhance(CustomerList);
