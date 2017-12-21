import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, View } from 'react-native';
import { PropTypes } from 'prop-types';
import { Text } from 'native-base';

const styles = StyleSheet.create({
  card: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  container: {
    flexDirection: 'row',
  },
  center: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 2,
    paddingRight: 2,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  value: {
    fontSize: 12,
    textAlign: 'center',
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const renderPurchases = ({ purchases }) =>
  purchases.map(purchase => (
    <View key={purchase.id} style={styles.container}>
      <View style={styles.center}>
        <Icon name={'cart'} size={27} />
      </View>
      <View style={styles.body}>
        <Text>{purchase.description}</Text>
      </View>
      <View style={styles.center}>
        <Text style={styles.value}>{purchase.value}</Text>
      </View>
    </View>
  ));

const CustomerInfo = ({ purchases, totalValue }) => (
  <View style={styles.card}>
    <View style={styles.header}>
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
