import { graphql } from "react-apollo";
import {
  compose,
  branch,
  renderComponent,
  withHandlers,
  withState,
  mapProps
} from "recompose";
import { ActivityIndicator } from "react-native";
import { withNavigation } from "react-navigation";
import { CREATE_PURCHASE_MUTATION } from "../../data/mutation";
import { ALL_CUSTOMERS_QUERY, LAST_PURCHASES_QUERY } from "../../data/query";
import Purchase from "../../components/Purchase/index";

const isLoading = branch(
  ({ loading }) => loading,
  renderComponent(ActivityIndicator)
);

const onPressFab = ({
  customer,
  createPurchaseMutation,
  setLoading,
  description,
  value,
  navigation
}) => async () => {
  const { id } = customer;
  setLoading(true);
  await createPurchaseMutation({
    variables: {
      customerId: id,
      description,
      value: parseFloat(value)
    }
  });
  navigation.goBack();
};

const onChangeDescription = ({ setDescription }) => value =>
  setDescription(value);
const onChangeValue = ({ setValue }) => value => setValue(value);

const enhance = compose(
  mapProps(({ navigation: { state: { params: { customer } } }, ...rest }) => ({
    customer,
    ...rest
  })),
  withState("loading", "setLoading", false),
  withState("description", "setDescription", ""),
  withState("value", "setValue", ""),
  withNavigation,
  graphql(CREATE_PURCHASE_MUTATION, {
    name: "createPurchaseMutation",
    options: ({ customer: { id } }) => ({
      refetchQueries: [
        { query: ALL_CUSTOMERS_QUERY },
        {
          query: LAST_PURCHASES_QUERY,
          variables: {
            id
          }
        }
      ]
    })
  }),
  isLoading,
  withHandlers({
    onPressFab,
    onChangeDescription,
    onChangeValue
  })
);

export default enhance(Purchase);
