import React from 'react';
import { View } from 'react-native';
import { PropTypes } from 'prop-types';
import { Text } from 'native-base';
import PurchaseItem from '../PurchaseItem/index';
import baseStyle from '../../styles';

const renderPurchases = ({ purchases }) =>
  purchases.map(purchase => (
    <PurchaseItem key={purchase.id} purchase={purchase} />
  ));

const CustomerInfo = ({ purchases, totalValue }) => (
  <View style={baseStyle.card}>
    <View style={baseStyle.header}>
      <Text note>Purchases</Text>
      <Text>{totalValue}</Text>
    </View>
    {renderPurchases({ purchases })}
  </View>
);

CustomerInfo.propTypes = {
  purchases: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    value: PropTypes.float,
  })),

  totalValue: PropTypes.number,
};

export default CustomerInfo;
