import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import { BarProvider } from './src/context/bar';

export default function App() {
  return (
    <SafeAreaProvider>
      <BarProvider>
        <NavigationContainer>
          <Routes/>
        </NavigationContainer>
      </BarProvider>
    </SafeAreaProvider>
  );
}
