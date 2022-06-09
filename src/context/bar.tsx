import React, {createContext, useState, useEffect, useContext, useRef, Dispatch, SetStateAction} from 'react';
import { Animated } from 'react-native';


type TBarContexttData = {
    refer: any,
    scrollRef: any,
    toDiscovery(): void;
    toHome(): void;
    onDiscovery: boolean;
    setSizeElementOffeset: any
    sizeELementOffSet: any;
    setOnDiscovery: any;
    scrollY: any;

  }

const BarContext = createContext<TBarContexttData>({} as TBarContexttData);

const BarProvider: React.FC = ({children}) => {

  const refer = useRef(new Animated.Value(1)).current;
  const scrollY = useRef(new Animated.Value(1)).current;
  const scrollRef = useRef(null);
  const [onDiscovery, setOnDiscovery] = useState(false);
  const [sizeELementOffSet, setSizeElementOffeset] = useState(0)


    const toDiscovery = () => {
 

      setTimeout(() => {
        setOnDiscovery(true)
      }, 350);
      
      Animated.timing(refer, {
      toValue: 1,
      duration: 700,
      useNativeDriver: false
      }).start();
  };

  const toHome = () => {
   
      // Will change fadeAnim value to 0 in 3 seconds
      setTimeout(() => {
        setOnDiscovery(false)
      }, 350);
   
      Animated.timing(refer, {
      toValue: 0,
      duration: 700,
      useNativeDriver: false,
      }).start();
  };

   

    return (
      <BarContext.Provider
        value={{
          refer, scrollRef,
           toDiscovery, toHome, 
           onDiscovery, setSizeElementOffeset, 
           sizeELementOffSet, setOnDiscovery,
           scrollY
           }}>
        {children}
      </BarContext.Provider>
    );
  };
  
  function useBar() {
    const context = useContext(BarContext);
  
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider.');
    }
  
    return context;
  }
  
  export {BarProvider, useBar};