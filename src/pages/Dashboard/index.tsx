import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, Text, TouchableOpacity, View } from 'react-native';
import { useBar } from '../../context/bar';
import { windowHeight } from '../../utils/dimensios';

import { Container, Content, HomeItens, DiscoveryItens, StatusBar, Header, Sections } from './styles';

export const Dashboard = () => {

    const { scrollRef, toDiscovery, toHome, setSizeElementOffeset, sizeELementOffSet, scrollY } = useBar();
    const scrollComponent = useRef<any>(null);
    

    useEffect(()=> {

        scrollComponent.current?.measure( (fx: string, fy: string, width: string, height: string, px: string, py: string) => {

            setSizeElementOffeset(Number(height))
        }) 

    

    },[scrollComponent]);

    const changeIcon = (onDiscovery: boolean) => {
        onDiscovery ? toDiscovery() : toHome();
    }
 
    return (

        <Container>
        
            <Header
            style={
                {
                 
                    backgroundColor: scrollY.interpolate({
                        inputRange: [0, windowHeight*.12],
                        outputRange: [
                            'rgba(255,0,0,0)',
                           'rgba(255,0,0,.65)',
                        ],
                         extrapolate: 'clamp'
                    }),
                }
            }
            >
            
            
                    
            </Header>
       
            <StatusBar 
            translucent={true}
            backgroundColor={'#00000000'} animated={true} barStyle={'light-content'}/>
            <Content
            ref={scrollRef}
            onScroll={Animated.event(
          
                [  
                { nativeEvent: {
                     contentOffset: {
                        y: scrollY
                     }
                   }
                 }
                
                
                ], {
                    listener: (event: any)=> {
                  
                        if(event.nativeEvent.contentOffset.y-windowHeight*.1 > sizeELementOffSet - windowHeight){
                            changeIcon(true)
                        }else {
                            changeIcon(false)
                        }
                     
                       
                    },
                    useNativeDriver: false
                }
              )}
              scrollEventThrottle={1}
            >
               
            <HomeItens ref={scrollComponent}>
            <Image
            resizeMode={'stretch'}
            style={{
                
                width: '100%',
                height: windowHeight*.25
            }}
            source={{
                uri: 'https://cdn.shopify.com/s/files/1/0070/7032/files/Trending_Products_Final_copy-HEADER.jpg?v=1582297348&width=1024'
            }}
            />

            <Sections>
                <Text>INÍCIO</Text>
                <View style={{
                    marginVertical: 12,
                    width: '100%', height: windowHeight*.20, backgroundColor: '#dddd'}}>
                           <Text>BOX</Text>
                </View>
                <View style={{
                    marginVertical: 12,
                    width: '100%', height: windowHeight*.20, backgroundColor: '#dddd'}}>
                           <Text>BOX</Text>
                </View>
                <View style={{
                    marginVertical: 12,
                    width: '100%', height: windowHeight*.20, backgroundColor: '#dddd'}}>
                           <Text>BOX</Text>
                </View>
                <View style={{
                    marginVertical: 12,
                    width: '100%', height: windowHeight*.20, backgroundColor: '#dddd'}}>
                           <Text>BOX</Text>
                </View>
                

            </Sections>

            </HomeItens>
            <DiscoveryItens>

            <Sections>
                <Text>DESCOBERTAS DA SEMANA:</Text>
                <View style={{
                    marginVertical: 12,
                    width: '100%', height: windowHeight*.20, backgroundColor: '#00660040'}}>
                           <Text>BOX</Text>
                </View>
                <View style={{
                    marginVertical: 12,
                    width: '100%', height: windowHeight*.20, backgroundColor: '#00660040'}}>
                           <Text>BOX</Text>
                </View>
                <View style={{
                    marginVertical: 12,
                    width: '100%', height: windowHeight*.20, backgroundColor: '#00660040'}}>
                           <Text>BOX</Text>
                </View>
                <View style={{
                    marginVertical: 12,
                    width: '100%', height: windowHeight*.20, backgroundColor: '#00660040'}}>
                           <Text>BOX</Text>
                </View>
                

            </Sections>

            </DiscoveryItens>
            </Content>
        </Container>

    );
}