import { compose, defaultProps } from 'recompose';
import CustomerList from '../../components/CustomerList';

const customers = [
  {
    name: 'Mauricio',
    lastName: 'Coelho',
    address: '7889 West Tunnel Apt. 676 South Sherman, AK 16549',
    latestVisit: '1h',
  },
  {
    name: 'João',
    lastName: 'Silva',
    address: 'South Sherman',
    latestVisit: '2h',
  },
];

const enhance = compose(defaultProps({ customers }));

export default enhance(CustomerList);
