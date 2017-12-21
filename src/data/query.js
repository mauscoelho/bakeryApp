import gql from 'graphql-tag';

export const ALL_CUSTOMERS_QUERY = gql`
  query AllCustomersQuery {
    allCustomers {
      id
      lastName
      name
      address
      email
      latestVisit
    }
  }
`;
