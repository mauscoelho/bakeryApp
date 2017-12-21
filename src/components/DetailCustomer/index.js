import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Content, Fab, Button } from 'native-base';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { PropTypes } from 'prop-types';
import { Colors } from '../../constants';
import CustomerCard from '../CustomerCard/index';
import CustomerInfo from '../CustomerInfo/index';

const styles = StyleSheet.create({
  fab: {
    backgroundColor: Colors.indigo,
  },
});

const DetailCustomer = ({
  customer,
  onPressEdit,
  onPressPurchase,
  loading,
  purchases,
}) => (
  <Container>
    <Content>
      <CustomerCard customer={customer} />
      {loading && <ActivityIndicator />}
      {!loading && <CustomerInfo purchases={purchases} totalValue={0} />}
    </Content>
    <Fab
      style={styles.fab}
      active
      direction="up"
      position="bottomRight"
      onPress={onPressPurchase}
    >
      <Icon name="cart" />
      <Button style={{ backgroundColor: Colors.teal }} onPress={onPressEdit}>
        <Icon name="pencil" color={Colors.white} />
      </Button>
    </Fab>
  </Container>
);

DetailCustomer.propTypes = {
  customer: PropTypes.shape({}),
  loading: PropTypes.bool,
  purchases: PropTypes.arrayOf(PropTypes.shape({})),
  onPressEdit: PropTypes.func,
  onPressPurchase: PropTypes.func,
};

export default DetailCustomer;
