import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { windowHeight } from '../../utils/dimensios';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const Content = styled(Animated.ScrollView)`
  width: 100%;
`;

export const StatusBar = styled.StatusBar`
`;

export const Header = styled(Animated.View)`
  width: 100%;
  position: absolute;
  z-index: 10000;
  top: 0px;
  left: 0px;
  height: ${windowHeight*.14}px;
  background-color: green;
`;

export const HomeItens = styled.View`
  width: 100%;
  background-color: white;
`;

export const Sections = styled.View`
  width: 100%;
  padding: 24px;
 
`;

export const DiscoveryItens = styled.View`
 width: 100%;
  background-color: white;
`;
