import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { PropTypes } from 'prop-types';
import { Text } from 'native-base';
import { Colors } from '../../constants';

const styles = StyleSheet.create({
  card: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  container: {
    flexDirection: 'row',
  },
  center: {
    minWidth: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
  body: {
    flex: 1,
  },
  latestVisit: {
    fontSize: 12,
  },
});

const CustomerCard = ({
  customer: {
    name, lastName, address, latestVisit,
  },
  onPressCard,
}) => (
  <TouchableHighlight
    style={styles.card}
    onPress={onPressCard}
    underlayColor={Colors.ripple}
  >
    <View style={styles.container}>
      <View style={styles.center}>
        <Icon name={'account'} size={27} />
      </View>
      <View style={styles.body}>
        <Text>{`${name} ${lastName}`}</Text>
        <Text note>{address}</Text>
      </View>
      <View style={styles.center}>
        <Text style={styles.latestVisit}>{latestVisit}</Text>
      </View>
    </View>
  </TouchableHighlight>
);

CustomerCard.propTypes = {
  customer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    latestVisit: PropTypes.string.isRequired,
  }),
  onPressCard: PropTypes.func,
};

export default CustomerCard;
