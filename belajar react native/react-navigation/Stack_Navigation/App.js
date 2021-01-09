import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

//Components
// import DrawerNavigation from './Navigators/DrawerNavigation';
// import StackNavigation from './Navigators/StackNavigation';
import TabBarNavigation from './Navigators/TabBarNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTabNavigation from './Navigators/BottomTabNavigation';

export default function App() {
  return(
    // <StackNavigation />
    
    <SafeAreaProvider>
      <TabBarNavigation />
      {/* <BottomTabNavigation /> */}
    </SafeAreaProvider>
  )
}