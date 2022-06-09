import React, { useEffect, useRef } from "react";
import { TouchableOpacity, Animated, StyleSheet, GestureResponderEvent, Text } from "react-native";
import { Foundation } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Icon } from "./Icon";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { useBar } from "../../context/bar";
import { windowHeight } from "../../utils/dimensios";

type TProps = BottomTabBarButtonProps & {
    type?: any;
}

export const AnimButton = ({type, onPress = () => {}, accessibilityState }: TProps) => {
 
    const focused = accessibilityState?.selected;
    const { refer, onDiscovery, setOnDiscovery, scrollRef, sizeELementOffSet } = useBar();

    const Press = (event: GestureResponderEvent) => {

        if(focused){

        if(onDiscovery){
            scrollRef.current?.scrollTo({ x: 0, y: 0, animated: 5000 })
        }else{
            scrollRef.current?.scrollTo({ x: 0, y: sizeELementOffSet-windowHeight*.12, animated: 5000 })
        }

        return;
    
       }

            onPress(event)
        
    }
  
    return (
      <TouchableOpacity
        onPress={(event: GestureResponderEvent)=>Press(event)}
        activeOpacity={1}
        style={styles.container}>
        <Animated.View
          ref={refer}
          style={[styles.container, {

              overflow: "hidden",
              backgroundColor: refer.interpolate({
                inputRange: [0,0.4,0.6, 1],
                outputRange: [
                    'rgba(255,0,0,0)',
                   'rgba(255,0,0,1)',
                   'rgba(255,0,0,1)',
                   'rgba(255,0,0,0)',
                ],
                 extrapolate: 'clamp'
            }),

            borderRadius: refer.interpolate({
              inputRange: [0,0.45,0.55, 1],
              outputRange: [
                 0,
                 12,
                 12,
                 0
              ],
               extrapolate: 'clamp'
          }),

            


              transform: [
                  {
                      rotate: refer.interpolate({
                        inputRange: [0, 0.5, 1],
                        outputRange: ['0deg', '180deg', '360deg'],
                        extrapolate: 'clamp'
                      })
                  },
                  {
                      scale: refer.interpolate({
                        inputRange: [0, 0.5, 1],
                        outputRange: [1, 0.5, 1],
                        extrapolate: 'clamp'
                      })
                  }
              ]
          }]}>
          <Icon 
            name={
                !focused ? 'home' :
                focused && onDiscovery ? 'like' : 'home' 
            } 
            color={focused ? 'red' : 'gray'} 
            type={type} 
            
            />

        </Animated.View>
            <Text 
            style={{ fontSize: 10, color: focused ? 'red' : 'gray'}}>
                {
                !focused ? 'Início' :
                focused && onDiscovery ? 'Início' : 'Descoberta'}
                
                </Text>
      </TouchableOpacity>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  })