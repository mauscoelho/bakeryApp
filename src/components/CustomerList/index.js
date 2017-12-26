import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { FlatList, View, StyleSheet } from "react-native";
import { PropTypes } from "prop-types";
import { Fab } from "native-base";
import { Colors } from "../../constants";
import CustomerCard from "../../containers/CustomerCard/index";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fab: {
    backgroundColor: Colors.indigo
  }
});

const CustomerList = ({ allCustomersQuery, onRefresh, onPressFab }) => {
  console.log(allCustomersQuery);
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        onRefresh={onRefresh}
        refreshing={allCustomersQuery.networkStatus === 4}
        data={allCustomersQuery.allCustomers}
        renderItem={({ item }) => <CustomerCard customer={item} />}
      />
      <Fab style={styles.fab} position="bottomRight" onPress={onPressFab}>
        <Icon name="plus" />
      </Fab>
    </View>
  );
};

CustomerList.propTypes = {
  allCustomersQuery: PropTypes.shape({}),
  onRefresh: PropTypes.func,
  onPressFab: PropTypes.func
};

export default CustomerList;
