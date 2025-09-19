/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen'
import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native'
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context'
import AppNavigation from './AppNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { WishListProvider } from './src/context/BooksContext'
function App () {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <WishListProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </WishListProvider>
  )
}

export default App
