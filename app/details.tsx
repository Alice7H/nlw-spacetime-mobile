import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Link, SplashScreen, useLocalSearchParams } from 'expo-router'
import { api } from '../src/lib/api';
import * as SecureStore from 'expo-secure-store'
import { View, Text, ScrollView, TouchableOpacity, Image, Alert } from 'react-native'
import NLWLogo from '../src/assets/nlw-spacetime-logo.svg'
import Icon from '@expo/vector-icons/Feather'
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

interface Memory {
  coverUrl: string
  content: string
  createdAt: string
  id: string
  isPublic: boolean
  userId: string
}

export default function MemoryDetails(){
  const { bottom, top } = useSafeAreaInsets()
  const params = useLocalSearchParams()
  const {id} = params
  const [memory, setMemory] = useState<null | Memory>(null)

  async function getMemoryById() {
    const token = await SecureStore.getItemAsync('token')
    const response = await api.get(`/memories/${id}`, {
      headers: {Authorization: `Bearer ${token}`}
    })

    if(response.status != 200){
      Alert.alert('Erro', 'Memória não encontrada',[{text: 'Fechar'}])
    }
    setMemory(response.data)
  }

  useEffect(()=>{
    getMemoryById();
  },[])

  if(!memory) return <SplashScreen/>

  return(
    <ScrollView
      className="flex-1 px-8 space-y-4"
      contentContainerStyle={{paddingBottom: bottom, paddingTop: top }}
    >
      <View className=" flex-row mt-4 items-center justify-between">
        <NLWLogo />
        <View className="flex-row gap-2">
          <Link href="/memories" asChild >
            <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-purple-500" >
              <Icon name="arrow-left" size={16} color="#fff" />
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      <View className='mt-4 space-y-6'>
        <Image
          source={{uri:memory.coverUrl}}
          className="aspect-video w-full rounded-lg"
          alt=""
        />

        <View className="flex-row items-center gap-2">
          <Text className="font-body text-xs text-gray-100">
            {dayjs(memory.createdAt).format("DD [de] MMMM[,] YYYY HH:mm:ss")}
          </Text>
        </View>

        <Text className="font-body text-base leading-relaxed text-gray-100">
          {memory.content}
        </Text>
      </View>
    </ScrollView>
  )
}
