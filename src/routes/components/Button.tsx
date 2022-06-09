import React, { useEffect, useRef } from "react";
import { TouchableOpacity, Animated, StyleSheet, GestureResponderEvent, Text } from "react-native";
import { Foundation } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Icon } from "./Icon";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { useBar } from "../../context/bar";

type TProps = BottomTabBarButtonProps & {
    type?: any;
    iconName: string;
    label: string;
}

export const Button = ({type,label, iconName,onPress = () => {},accessibilityState }: TProps) => {
 
    const focused = accessibilityState?.selected;
    const { refer, onDiscovery, setOnDiscovery, scrollRef, sizeELementOffSet } = useBar();

  
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}
        style={styles.container}>
        <Animated.View
          ref={refer}
          style={[styles.container]}>
          <Icon 
            name={iconName} 
            color={focused ? 'red' : 'gray'} 
            type={type} 
            
            />
        </Animated.View>
            <Text style={{ fontSize: 10, color: focused ? 'red' : 'gray'}}>{label}</Text>
      </TouchableOpacity>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center',
    }
  })