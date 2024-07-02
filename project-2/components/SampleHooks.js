import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { styles } from "../assets/style";

const SampleHooks = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('Component did mount or update');
    return () => {
      console.log('Component will unmount');
    };
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.teks}>You clicked {count} times</Text>
      <Button onPress={() => setCount(count + 1)} title="Click me" />
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <Text style={styles.teks}>Hello, {name}!</Text>
    </View>
  );
};

export default SampleHooks;
