import React from "react";
import { withNavigation } from "react-navigation";
import { Button, Icon } from "native-base";

const CartButton = ({ navigation }) => {
  return (
    <Button transparent onPress={() => navigation.navigate("CoffeeCart")}>
      <Icon name="shoppingcart" type="AntDesign" />
    </Button>
  );
};

export default withNavigation(CartButton);
