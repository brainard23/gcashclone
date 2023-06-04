import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native";

const Dashboard = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-8">
        <Header title="Gcash" menu="Help" />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
