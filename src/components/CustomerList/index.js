import React from 'react';
import { FlatList } from 'react-native';
import { PropTypes } from 'prop-types';
import CustomerCard from '../CustomerCard/index';

const CustomerList = ({ allCustomersQuery }) => (
    <FlatList
      keyExtractor={item => item.id}
      data={allCustomersQuery.allCustomers}
      renderItem={({ item }) => <CustomerCard customer={item} />}
    />
);

CustomerList.propTypes = {
  allCustomersQuery: PropTypes.shape({}),
};

export default CustomerList;
