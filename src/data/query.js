import gql from 'graphql-tag';

export const ALL_CUSTOMERS_QUERY = gql`
  query allCustomersQuery {
    allCustomers {
      id
      lastName
      name
      address
      latestVisit
    }
  }
`;
