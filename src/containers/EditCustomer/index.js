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
import { UPDATE_CUSTOMER_MUTATION } from '../../data/mutation';
import { ALL_CUSTOMERS_QUERY } from '../../data/query';
import AddEditCustomer from '../../components/AddEditCustomer';

const isLoading = branch(
  ({ loading }) => loading,
  renderComponent(ActivityIndicator),
);

const onPressFab = ({
  customer,
  updateCustomerMutation,
  setLoading,
  name,
  lastName,
  email,
  address,
  navigation,
}) => async () => {
  const { id } = customer;
  setLoading(true);
  await updateCustomerMutation({
    variables: {
      id,
      name,
      lastName,
      email,
      address,
    },
  });
  navigation.goBack();
};

const onChangeName = ({ setName }) => value => setName(value);
const onChangeLastName = ({ setLastName }) => value => setLastName(value);
const onChangeEmail = ({ setEmail }) => value => setEmail(value);
const onChangeAddress = ({ setAddress }) => value => setAddress(value);

const enhance = compose(
  mapProps(({ navigation: { state: { params: { customer } } }, ...rest }) => ({
    customer,
    ...rest,
  })),
  withState('loading', 'setLoading', false),
  withState('name', 'setName', ({ customer }) => customer.name),
  withState('lastName', 'setLastName', ({ customer }) => customer.lastName),
  withState('email', 'setEmail', ({ customer }) => customer.email),
  withState('address', 'setAddress', ({ customer }) => customer.address),
  withNavigation,
  graphql(UPDATE_CUSTOMER_MUTATION, {
    name: 'updateCustomerMutation',
    options: {
      refetchQueries: [{ query: ALL_CUSTOMERS_QUERY }],
    },
  }),
  isLoading,
  withHandlers({
    onPressFab,
    onChangeName,
    onChangeLastName,
    onChangeEmail,
    onChangeAddress,
  }),
);

export default enhance(AddEditCustomer);
