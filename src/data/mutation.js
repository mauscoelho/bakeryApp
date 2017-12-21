import gql from 'graphql-tag';

export const CREATE_CUSTOMER_MUTATION = gql`
  mutation CreateCustomerMutation(
    $name: String!
    $lastName: String!
    $address: String
    $email: String
  ) {
    createCustomer(
      name: $name
      lastName: $lastName
      address: $address
      email: $email
    ) {
      id
      name
      lastName
      email
      latestVisit
      address
    }
  }
`;

export const UPDATE_CUSTOMER_MUTATION = gql`
  mutation UpdateCustomerMutation(
    $id: ID!
    $name: String!
    $lastName: String!
    $address: String
    $email: String
  ) {
    updateCustomer(
      id: $id
      name: $name
      lastName: $lastName
      address: $address
      email: $email
    ) {
      id
      name
      lastName
      email
      latestVisit
      address
    }
  }
`;
