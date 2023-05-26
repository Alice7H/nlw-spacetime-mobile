import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Link, useRouter } from 'expo-router'
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import Icon from '@expo/vector-icons/Feather'
import NLWLogo from '../src/assets/nlw-spacetime-logo.svg'
import * as SecureStore from 'expo-secure-store'
import { api } from '../src/lib/api'
import { useEffect, useState } from 'react'
import ptBr from 'dayjs/locale/pt-br'
import dayjs from 'dayjs'

dayjs.locale(ptBr)

interface Memory {
  coverUrl: string
  excerpt: string
  createdAt: string
  id: string
}

export default function Memories() {
  const { bottom, top } = useSafeAreaInsets()
  const router = useRouter()
  const [memories, setMemories]= useState<Memory[]>([]);

  async function signOut() {
    await SecureStore.deleteItemAsync('token')
    router.push('/')
  }

  async function loadMemories(){
    const token = await SecureStore.getItemAsync('token')
    const response = await api.get('/memories', {
      headers: {Authorization: `Bearer ${token}`}
    })
    setMemories(response.data)
  }

  useEffect(()=>{ loadMemories() },[])

  return(
    <ScrollView
      className="flex-1 px-8 space-y-4"
      contentContainerStyle={{paddingBottom: bottom, paddingTop: top }}
    >
      <View className="flex-row mt-4 items-center justify-between">
        <NLWLogo />
        <View className="flex-row gap-2">
          <Link href="/new" asChild >
            <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-green-500" >
              <Icon name="plus" size={16} color="#000" />
            </TouchableOpacity>
          </Link>

          <TouchableOpacity onPress={signOut} className="h-10 w-10 items-center justify-center rounded-full bg-red-500" >
            <Icon name="log-out" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="mt-6 space-y-10">
          {
            memories.length > 0 &&  memories.map(memory =>
            <View className="space-y-4" key={memory.id}>
              <View className="flex-row items-center gap-2">
                <View className="h-px w-5 bg-gray-50" />
                <Text className="font-body text-xs text-gray-100">
                  {dayjs(memory.createdAt).format("DD [de] MMMM[,] YYYY HH:mm:ss")}
                </Text>
              </View>

              <View className="space-y-4">
                <Image
                  source={{uri:memory.coverUrl}}
                  className="aspect-video w-full rounded-lg"
                  alt=""
                />
                <Text className="font-body text-base leading-relaxed text-gray-100">
                  {memory.excerpt}
                </Text>
                <Link href={{
                  pathname: 'details',
                  params: {id: `${memory.id}`}
                }} asChild >
                  <TouchableOpacity  className="flex-row items-center gap-2">
                    <Text className="font-body text-sm text-gray-200">Ler mais...</Text>
                    <Icon name="arrow-right" size={16} color="#9e9ea0"/>
                  </TouchableOpacity>
                </Link>
              </View>
            </View>
          )}
      </View>
    </ScrollView>
  )
}