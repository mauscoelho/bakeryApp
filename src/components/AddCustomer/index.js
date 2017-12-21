import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Content, Fab, Form, Item, Label, Input } from 'native-base';
import { StyleSheet } from 'react-native';
import { PropTypes } from 'prop-types';
import { Colors } from '../../constants';

const styles = StyleSheet.create({
  fab: {
    backgroundColor: Colors.green,
  },
});

const AddCustomer = ({
  onPressFab,
  name,
  lastName,
  email,
  address,
  onChangeName,
  onChangeLastName,
  onChangeEmail,
  onChangeAddress,
}) => (
  <Container>
    <Content>
      <Form>
        <Item floatingLabel>
          <Label>Name</Label>
          <Input value={name} onChangeText={onChangeName} />
        </Item>
        <Item floatingLabel>
          <Label>Last Name</Label>
          <Input value={lastName} onChangeText={onChangeLastName} />
        </Item>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input value={email} onChangeText={onChangeEmail} />
        </Item>
        <Item floatingLabel>
          <Label>Address</Label>
          <Input value={address} onChangeText={onChangeAddress} />
        </Item>
      </Form>
    </Content>
    <Fab style={styles.fab} position="bottomRight" onPress={onPressFab}>
      <Icon name="check" />
    </Fab>
  </Container>
);

AddCustomer.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.string,
  onChangeName: PropTypes.func,
  onChangeLastName: PropTypes.func,
  onChangeEmail: PropTypes.func,
  onChangeAddress: PropTypes.func,
  onPressFab: PropTypes.func,
};

export default AddCustomer;
