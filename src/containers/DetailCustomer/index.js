import { compose, withHandlers, mapProps } from 'recompose';
import { graphql } from 'react-apollo';
import { LAST_PURCHASES_QUERY } from '../../data/query';
import DetailCustomer from '../../components/DetailCustomer';

const onPressEdit = ({ navigation, customer }) => () => {
  navigation.navigate('EditCustomer', { customer });
};

const onPressPurchase = ({ navigation, customer }) => () => {
  navigation.navigate('Purchase', { customer });
};

const enhance = compose(
  mapProps(({ navigation, ...rest }) => ({
    navigation,
    customer: navigation.state.params.customer,
    ...rest,
  })),
  graphql(LAST_PURCHASES_QUERY, {
    name: 'lastPurchasesQuery',
    options: ({ customer: { id } }) => ({
      variables: {
        id,
      },
      fetchPolicy: 'cache-and-network',
    }),
  }),
  mapProps(({ lastPurchasesQuery: { loading, Customer }, ...rest }) => ({
    loading,
    purchases: loading ? [] : Customer.purchases,
    ...rest,
  })),
  withHandlers({
    onPressEdit,
    onPressPurchase,
  }),
);

export default enhance(DetailCustomer);
