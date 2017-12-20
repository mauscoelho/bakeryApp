import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PropTypes } from 'prop-types';
import { Text } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
  },
  center: {
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  body: {
    flex: 1,
  },
});

const CustomerCard = ({
  name, lastName, address, latestVisit,
}) => (
  <View style={styles.card}>
    <View style={styles.container}>
      <View style={styles.center}>
        <Icon name={'account'} size={27} />
      </View>
      <View style={styles.body}>
        <Text>{`${name} ${lastName}`}</Text>
        <Text note>{address}</Text>
      </View>
      <View style={styles.center}>
        <Text>{latestVisit}</Text>
      </View>
    </View>
  </View>
);

CustomerCard.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  latestVisit: PropTypes.string.isRequired,
};

export default CustomerCard;
