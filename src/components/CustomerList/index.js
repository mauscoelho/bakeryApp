import React from 'react';
import { FlatList } from 'react-native';
import { PropTypes } from 'prop-types';
import CustomerCard from '../../containers/CustomerCard/index';

const CustomerList = ({ allCustomersQuery, onRefresh }) => (
  <FlatList
    keyExtractor={item => item.id}
    onRefresh={onRefresh}
    refreshing={allCustomersQuery.networkStatus === 4}
    data={allCustomersQuery.allCustomers}
    renderItem={({ item }) => <CustomerCard customer={item} />}
  />
);

CustomerList.propTypes = {
  allCustomersQuery: PropTypes.shape({}),
  onRefresh: PropTypes.func,
};

export default CustomerList;
