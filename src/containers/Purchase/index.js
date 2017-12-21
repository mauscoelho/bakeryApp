import { graphql } from 'react-apollo';
import {
  compose,
  branch,
  renderComponent,
  withHandlers,
  withState,
  mapProps,
} from 'recompose';
import { ActivityIndicator } from 'react-native';
import { withNavigation } from 'react-navigation';
import { CREATE_PURCHASE_MUTATION } from '../../data/mutation';
import { ALL_CUSTOMERS_QUERY } from '../../data/query';
import Purchase from '../../components/Purchase/index';

const isLoading = branch(
  ({ loading }) => loading,
  renderComponent(ActivityIndicator),
);

const onPressFab = ({
  customer,
  createPurchaseMutation,
  setLoading,
  description,
  navigation,
}) => async () => {
  const { id } = customer;
  setLoading(true);
  await createPurchaseMutation({
    variables: {
      customerId: id,
      description,
    },
  });
  navigation.goBack();
};

const onChangeDescription = ({ setDescription }) => value => setDescription(value);

const enhance = compose(
  mapProps(({ navigation: { state: { params: { customer } } }, ...rest }) => ({
    customer,
    ...rest,
  })),
  withState('loading', 'setLoading', false),
  withState('description', 'setDescription', ''),
  withNavigation,
  graphql(CREATE_PURCHASE_MUTATION, {
    name: 'createPurchaseMutation',
    options: {
      refetchQueries: [{ query: ALL_CUSTOMERS_QUERY }],
    },
  }),
  isLoading,
  withHandlers({
    onPressFab,
    onChangeDescription,
  }),
);

export default enhance(Purchase);
