import { mapProps } from 'recompose';
import moment from 'moment';
import CustomerCard from '../../components/CustomerCard';

const enhance = mapProps(({ customer: { latestVisit, ...rest } }) => ({
  customer: { ...rest, latestVisit: moment(latestVisit).fromNow(true) },
}));

export default enhance(CustomerCard);
