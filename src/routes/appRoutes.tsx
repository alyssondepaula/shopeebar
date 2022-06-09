import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBarButtonProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '../pages/Dashboard';
import { Oficial } from '../pages/Oficial';
import { Award } from '../pages/Award';
import { Notifications } from '../pages/Notifications';
import { User } from '../pages/User';
import { AnimButton } from './components/animButton';
import { Icons } from './components/Icon';
import { Button } from './components/Button';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export const AppRoutes = () => {
  return (
  
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          paddingBottom: 5,
          paddingTop: 5,
          height: 60
        },
      }}>
        <Tab.Screen 
        name="Dashboard" component={Dashboard} 
        options={{
          
          tabBarButton: (props: BottomTabBarButtonProps) => 
          <AnimButton {...props} type={Icons.SimpleLineIcons}  />
        }}
        />
        <Tab.Screen name="Oficial" component={Oficial} 
         options={{
          
          tabBarButton: (props: BottomTabBarButtonProps) => 
          <Button {...props} type={Icons.Feather} iconName={'shopping-bag'} label={'Oficial'}  />
        }}
        />
        <Tab.Screen name="Award" component={Award} 
           options={{
          
            tabBarButton: (props: BottomTabBarButtonProps) => 
            <Button {...props} type={Icons.Feather} iconName={'gift'} label={'Prêmios'} />
          }}
        />
        <Tab.Screen name="Notifications" component={Notifications} 
           options={{
          
            tabBarButton: (props: BottomTabBarButtonProps) => 
            <Button {...props} type={Icons.Ionicons} iconName={'notifications-outline'} label={'Notificações'} />
          }}/>
        <Tab.Screen name="User" component={User} 
           options={{
          
            tabBarButton: (props: BottomTabBarButtonProps) => 
            <Button {...props} type={Icons.Feather} iconName={'user'} label={'Conta'}/>
          }}/>
      </Tab.Navigator>
  );
}