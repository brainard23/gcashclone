import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useRef } from "react";
import { Image, ImageBackground, SafeAreaView, Text, View } from "react-native";
import PhoneInput from "react-native-phone-number-input";

const Login = () => {
  const navigation = useNavigation();
  const phoneInput = useRef(PhoneInput);

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
          <Text className="text-white font-bold	text-xl">
            G for greener tomorrow
          </Text>
        </View>
        <View className="flex justify-center px-6 mt-8 items-center space-x-2">
          <PhoneInput
            ref={phoneInput}
            defaultValue={0}
            defaultCode="PH"
            layout="second"
            containerStyle={{
              backgroundColor: "#007CFF",
              borderRadius: 50,
              color: '#ffff'
            }}
            textInputStyle={{
                color: '#fff', 
                fontWeight: '600',
                fontSize: 18   
            }}
            codeTextStyle={{
                color: '#fff', 
                fontWeight: '600',
                fontSize: 18   
            }}
            textContainerStyle={{
              backgroundColor: "#007CFF",
              borderTopRightRadius: 50,              
              color: '#ffff',
              borderBottomRightRadius: 50,
            }}
            // onChangeText={(text) => {
            //   setValue(text);
            // }}
            // onChangeFormattedText={(text) => {
            //   setFormattedValue(text);
            // }}
            withDarkTheme
            withShadow
            autoFocus
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
