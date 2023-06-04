import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, ImageBackground, SafeAreaView, Text, View } from "react-native";

const Login = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ImageBackground
        className="flex-1 relative justify-center"
        resizeMode="cover"
        source={{
          uri: "https://www.pixelstalk.net/wp-content/uploads/2016/05/Phone-mobile-yellow-tree-wallpaper.jpg",
        }}
      />
      <View className="w-full h-full absolute flex-1 justify-center items-center">
        <View className="flex justify-center items-center h-[60px] ">
          <Image
            className="w-[220px] h-[50px]"
            source={{
              uri: "https://m.gcash.com/gcash-login-web/img/Gcash-white-new-logo.81ba859.png",
            }}
          />
        </View>
        <View className="flex justify-center px-6 mt-8 items-center space-x-2">
          <Text className="text-white font-bold	text-xl">G for greener tomorrow</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
