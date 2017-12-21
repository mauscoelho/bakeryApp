import gql from "graphql-tag";

export const ALL_CUSTOMERS_QUERY = gql`
  query AllCustomersQuery {
    allCustomers {
      id
      lastName
      name
      address
      purchases(last: 1) {
        updatedAt
      }
    }
  }
`;

export const LAST_PURCHASES_QUERY = gql`
  query lastPurchasesQuery($id: ID!) {
    Customer(id: $id) {
      email
      purchases(last: 10) {
        id
        description
        value
      }
    }
  }
`;
