import * as React from 'react';
import { View } from 'react-native';
import HelloWorld from './components/Hello';
import UseCallback from './components/UseCallback';
import { styles } from "./assets/style";

export default function App() {
  
  return(
    <View>
      <HelloWorld nama="Devid"/>
      <HelloWorld nama="Ardika"/>
      <UseCallback />

    </View>
    
  );
}


