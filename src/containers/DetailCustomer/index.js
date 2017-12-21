import { compose, withHandlers } from 'recompose';
import DetailCustomer from '../../components/DetailCustomer';

const onPressEdit = ({ navigation }) => () => {
  const { state: { params: { customer } } } = navigation;
  navigation.navigate('EditCustomer', { customer });
};

const enhance = compose(withHandlers({
  onPressEdit,
}));

export default enhance(DetailCustomer);
