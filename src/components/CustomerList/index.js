import React from 'react';
import { FlatList } from 'react-native';
import { PropTypes } from 'prop-types';
import CustomerCard from '../CustomerCard/index';

const CustomerList = ({ customers }) => (
  <FlatList
    keyExtractor={item => item.name}
    data={customers}
    renderItem={({ item }) => <CustomerCard customer={item} />}
  />
);

CustomerList.propTypes = {
  customers: PropTypes.arrayOf(PropTypes.shape({})),
};

export default CustomerList;
