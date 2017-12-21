import gql from 'graphql-tag';

export const CREATE_CUSTOMER_MUTATION = gql`
  mutation CreateCustomerMutation(
    $name: String!
    $lastName: String!
    $address: String
  ) {
    createCustomer(name: $name, lastName: $lastName, address: $address) {
      id
      name
      lastName
      latestVisit
      address
    }
  }
`;
