import React from 'react';
import { View, Text } from 'react-native';
import { PropTypes } from 'prop-types';

const CustomerCard = ({
  name, lastName, address, latestVisit,
}) => (
  <View>
    <Text>{`${name} ${lastName}`}</Text>
    <Text>{address}</Text>
    <Text>{latestVisit}</Text>
  </View>
);

CustomerCard.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  latestVisit: PropTypes.string.isRequired,
};

export default CustomerCard;
