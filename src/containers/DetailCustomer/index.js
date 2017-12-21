import { compose, withHandlers } from 'recompose';
import DetailCustomer from '../../components/DetailCustomer';

const onPressEdit = ({ navigation }) => () => {
  const { state: { params: { customer } } } = navigation;
  navigation.navigate('EditCustomer', { customer });
};

const onPressPurchase = ({ navigation }) => () => {
  const { state: { params: { customer } } } = navigation;
  navigation.navigate('Purchase', { customer });
};

const enhance = compose(withHandlers({
  onPressEdit,
  onPressPurchase,
}));

export default enhance(DetailCustomer);
