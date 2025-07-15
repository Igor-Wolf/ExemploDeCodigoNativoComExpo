import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { NativeModules } from 'react-native';

const { MyNativeModule , AnotherModule } = NativeModules;

export default function App() {
  const [msg, setMsg] = useState('Carregando...');

 useEffect(() => {
  MyNativeModule.multiply(3, 4).then(setMsg);  // deve mostrar 12
}, []);

  
AnotherModule.greet('Igor').then(msg => {
  console.log(msg);  // Deve logar: Olá, ChatGPT! Este é outro módulo nativo.
});

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{msg}</Text>
    </View>
  );
}
