import React from "react";
import { Text, View } from "react-native";

const Header = ({ title, menu }) => {
  return (
    <View className="flex-row justify-between">
      <Text>{title}</Text>
      <Text>{menu}</Text>
    </View>
  );
};

export default Header;
