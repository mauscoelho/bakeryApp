import { compose, withHandlers } from 'recompose';
import DetailCustomer from '../../components/DetailCustomer';

const onPressFab = ({ navigation }) => () => {
  const { state: { params: { customer } } } = navigation;
  navigation.navigate('EditCustomer', { customer });
};

const enhance = compose(withHandlers({
  onPressFab,
}));

export default enhance(DetailCustomer);
