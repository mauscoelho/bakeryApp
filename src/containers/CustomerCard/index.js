import { mapProps, compose, withHandlers } from 'recompose';
import { withNavigation } from 'react-navigation';
import moment from 'moment';
import CustomerCard from '../../components/CustomerCard';

const onPressCard = ({ navigation, customer }) => () => {
  navigation.navigate('DetailCustomer', { customer });
};

const enhance = compose(
  mapProps(({ customer: { purchases, ...rest } }) => ({
    customer: {
      ...rest,
      latestVisit:
          purchases.length > 0
            ? moment(purchases[0].updatedAt).fromNow(true)
            : '',
    },
  })),
  withNavigation,
  withHandlers({
    onPressCard,
  }),
);

export default enhance(CustomerCard);
