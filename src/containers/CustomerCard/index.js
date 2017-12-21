import { mapProps, compose, withHandlers } from 'recompose';
import { withNavigation } from 'react-navigation';
import moment from 'moment';
import CustomerCard from '../../components/CustomerCard';

const onPressCard = ({ navigation, customer }) => () => {
  navigation.navigate('DetailCustomer', { customer });
};

const enhance = compose(
  mapProps(({ customer: { latestVisit, ...rest } }) => ({
    customer: {
      ...rest,
      latestVisit: latestVisit ? moment(latestVisit).fromNow(true) : '',
    },
  })),
  withNavigation,
  withHandlers({
    onPressCard,
  }),
);

export default enhance(CustomerCard);
