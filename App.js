import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };
  return (
    <SafeAreaView>
      <View className="bg-white min-h-screen h-full p-5">
        <View
          // style={styles.image_container}
          className="flex justify-center items-center mt-16"
        >
          <Image
            className="w-20 h-20 object-contain"
            source={require("./assets/brand/logo.png")}
          />
        </View>

        <View className="mt-8 h-full">
          <Text className="text-xl font-bold">Welcome!</Text>
          <View className="mt-8">
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  className="px-2 bg-slate-100 h-[52px] rounded-md mt-2 text-slate-600"
                  placeholder="Email"
                  onChangeText={field.onChange}
                  value={field.value}
                />
              )}
              name="email"
              rules={{ required: "Email is required", pattern: /^\S+@\S+$/i }}
            />
          </View>
          <View className="mt-4">
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  className="px-2 bg-slate-100 h-[52px] rounded-md mt-2 text-slate-600"
                  secureTextEntry={true}
                  placeholder="Password"
                  onChangeText={field.onChange}
                  value={field.value}
                />
              )}
              name="password"
              rules={{ required: "Password is required", minLength: 6 }}
            />
          </View>
          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            <View className="mt-8 h-[52px] bg-yellow-500 flex justify-center items-center rounded-md cursor-pointer">
              <Text className="text-white font-bold text-[18px]">Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
