import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Content, Fab } from 'native-base';
import { StyleSheet } from 'react-native';
import { PropTypes } from 'prop-types';
import { Colors } from '../../constants';

const styles = StyleSheet.create({
  fab: {
    backgroundColor: Colors.teal,
  },
});

const DetailCustomer = ({ customer, onPressFab }) => (
  <Container>
    <Content>
    </Content>
    <Fab style={styles.fab} position="bottomRight" onPress={onPressFab}>
      <Icon name="pencil" />
    </Fab>
  </Container>
);

DetailCustomer.propTypes = {
  customer: PropTypes.shape({}),
  onPressFab: PropTypes.func,
};

export default DetailCustomer;
