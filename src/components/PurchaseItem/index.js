import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, View } from 'react-native';
import { PropTypes } from 'prop-types';
import { Text } from 'native-base';
import baseStyle from '../../styles';

const styles = StyleSheet.create({
  value: {
    fontSize: 12,
    textAlign: 'center',
  },
  body: {
    justifyContent: 'center',
  },
});

const PurchaseItem = ({ purchase }) => (
  <View key={purchase.id} style={baseStyle.container}>
    <View style={baseStyle.center}>
      <Icon name={'cart'} size={27} />
    </View>
    <View style={[baseStyle.body, styles.body]}>
      <Text>{purchase.description}</Text>
    </View>
    <View style={baseStyle.center}>
      <Text style={styles.value}>{purchase.value}</Text>
    </View>
  </View>
);

PurchaseItem.propTypes = {
  purchase: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    value: PropTypes.float,
  }),
};

export default PurchaseItem;
