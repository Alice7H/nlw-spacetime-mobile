import { View, Text, TouchableOpacity, ScrollView, Switch } from "react-native";
import Icon from "@expo/vector-icons/Feather";
import NLWLogo from "../src/assets/nlw-spacetime-logo.svg";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

export default function NewMemory() {
  const { bottom, top } = useSafeAreaInsets();
  const [isPublic, setIsPublic] = useState(false);

  return(
    <ScrollView
      className="flex-1 px-8 space-y-4"
      contentContainerStyle={{paddingBottom: bottom, paddingTop: top }}
    >
      <View className=" flex-row mt-4 items-center justify-between">
        <NLWLogo />
        <Link href="/memories" asChild >
          <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-purple-500" >
            <Icon name="arrow-left" size={16} color="#fff" />
          </TouchableOpacity>
        </Link>
      </View>

      <View className="mt-2 space-y-6">
        <View className="flex-row items-center gap-2">
          <Switch
            thumbColor={isPublic ? "#9b79ea" : "#56565a"}
            trackColor={{
              false: "#9e9ea0",
              true: "#c6b2f3"
            }}
            value={isPublic}
            onValueChange={setIsPublic}
          />
          <Text className="font-body text-base text-gray-200"> Tornar memória pública</Text>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        className="h-32 items-center justify-center rounded-lg border border-dashed border-gray-500 bg-black/20"
      >
        <View className="flex-row items-center gap-2">
          <Icon name="image" color="#fff" />
          <Text className="font-body text-sm text-gray-200">Adicionar foto ou vídeo</Text>
        </View>
      </TouchableOpacity>

      <TextInput
        multiline
        className="p-0 font-body text-lg text-gray-50"
        textAlignVertical="top"
        placeholderTextColor="#56565a"
        placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
      />

      <TouchableOpacity
        activeOpacity={0.7}
        className="self-end rounded-full bg-green-500 px-5 py-3"
      >
        <Text className="font-alt text-sm text-center uppercase text-black">
          Salvar
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}