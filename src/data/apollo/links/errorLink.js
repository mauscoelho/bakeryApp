import { onError } from 'apollo-link-error';

const errorLink = onError(() => {});

export default errorLink;
