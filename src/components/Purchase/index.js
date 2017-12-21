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

const Purchase = ({ onPressFab, description, onChangeDescription }) => (
  <Container>
    <Content>
      <Form>
        <Item floatingLabel>
          <Label>Description</Label>
          <Input value={description} onChangeText={onChangeDescription} />
        </Item>
      </Form>
    </Content>
    <Fab style={styles.fab} position="bottomRight" onPress={onPressFab}>
      <Icon name="check" />
    </Fab>
  </Container>
);

Purchase.propTypes = {
  description: PropTypes.string,
  onChangeDescription: PropTypes.func,
  onPressFab: PropTypes.func,
};

export default Purchase;
