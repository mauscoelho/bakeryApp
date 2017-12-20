import { createHttpLink } from 'apollo-link-http';
import { GQL_URI } from '../../../constants';

const httpLink = createHttpLink({ uri: GQL_URI });

export default httpLink;
