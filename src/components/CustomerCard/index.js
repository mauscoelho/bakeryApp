import React from 'react';
import { StyleSheet } from 'react-native';
import { PropTypes } from 'prop-types';
import { Card, CardItem, Left, Body, Text, Right } from 'native-base';

const styles = StyleSheet.create({
  card: {
    flex: 0,
  },
});

const CustomerCard = ({
  name, lastName, address, latestVisit,
}) => (
  <Card style={styles.card}>
    <CardItem>
      <Left>
        <Text>{'img'}</Text>
        <Body>
          <Text>{`${name} ${lastName}`}</Text>
          <Text note>{address}</Text>
        </Body>
      </Left>
      <Right>
        <Text>{latestVisit}</Text>
      </Right>
    </CardItem>
  </Card>
);

CustomerCard.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  latestVisit: PropTypes.string.isRequired,
};

export default CustomerCard;
