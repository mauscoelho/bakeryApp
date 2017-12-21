import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleSheet, View, TouchableHighlight } from "react-native";
import { PropTypes } from "prop-types";
import { Text } from "native-base";
import { Colors } from "../../constants";
import baseStyle from "../../styles";

const styles = StyleSheet.create({
  latestVisit: {
    fontSize: 12,
    textAlign: "center"
  }
});

const CustomerCard = ({
  customer: { name, lastName, address, latestVisit, email },
  onPressCard
}) => (
  <TouchableHighlight
    style={baseStyle.card}
    onPress={onPressCard}
    underlayColor={Colors.ripple}
  >
    <View style={baseStyle.container}>
      <View style={baseStyle.center}>
        <Icon name={"account"} size={27} />
      </View>
      <View style={baseStyle.body}>
        <Text>{`${name} ${lastName}`}</Text>
        <Text note>{address}</Text>
        {email !== '' && <Text note>{email}</Text>}
      </View>
      <View style={baseStyle.center}>
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
    email: PropTypes.string
  }),
  onPressCard: PropTypes.func
};

export default CustomerCard;
