import { graphql } from 'react-apollo';
import {
  compose,
  branch,
  renderComponent,
  withHandlers,
  withState,
} from 'recompose';
import { ActivityIndicator } from 'react-native';
import { withNavigation } from 'react-navigation';
import { CREATE_CUSTOMER_MUTATION } from '../../data/mutation';
import { ALL_CUSTOMERS_QUERY } from '../../data/query';
import AddCustomer from '../../components/AddCustomer';

const isLoading = branch(
  ({ loading }) => loading,
  renderComponent(ActivityIndicator),
);

const onPressFab = ({
  createCustomerMutation,
  setLoading,
  name,
  lastName,
  email,
  address,
  navigation,
}) => async () => {
  setLoading(true);
  await createCustomerMutation({
    variables: {
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
  withState('loading', 'setLoading', false),
  withState('name', 'setName', ''),
  withState('lastName', 'setLastName', ''),
  withState('email', 'setEmail', ''),
  withState('address', 'setAddress', ''),
  withNavigation,
  graphql(CREATE_CUSTOMER_MUTATION, {
    name: 'createCustomerMutation',
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

export default enhance(AddCustomer);
