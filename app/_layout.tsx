import { useState } from 'react';
import { ImageBackground } from 'react-native';
import { Stack, SplashScreen } from 'expo-router';
import * as SecureStore from 'expo-secure-store'
import { StatusBar } from 'expo-status-bar'

import blurBg from '../src/assets/bg-blur.png';
import Stripes from '../src/assets/stripes.svg';
import { styled } from "nativewind";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

const StyledStripes = styled(Stripes)

export default function Layout(){
  const [isUserAuthenticated, setIsUserAuthenticated] = useState<null| boolean>(null);


  SecureStore.getItemAsync('token').then((token) => {
    setIsUserAuthenticated(!!token)
  })

  const [hasLoadedFonts] = useFonts({ Roboto_400Regular, Roboto_700Bold,  BaiJamjuree_700Bold })
  if (!hasLoadedFonts || isUserAuthenticated == null) return <SplashScreen />

  return (
    <ImageBackground
      source={blurBg}
      className='bg-gray-950 flex-1 relative'
      imageStyle={{position: 'absolute', left: '-100%',}}
    >
      <StyledStripes className='absolute left-2' />
      <StatusBar style='light' translucent />

      <Stack screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: 'transparent'},
        animation: 'fade',
      }}>
        <Stack.Screen name="index" redirect={isUserAuthenticated} />
        <Stack.Screen name="memories" />
        <Stack.Screen name="new" />
        <Stack.Screen name="details" />
      </Stack>
    </ImageBackground>
  )
}