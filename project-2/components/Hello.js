import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { styles } from "../assets/style";

export default function HelloWorld(props) {
  const [angka, setAngka] = useState(0);

  const ubahState = (teks) => {
    setAngka(teks);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder=" Berapa Usiamu...?"
        onChangeText={ubahState}
      />
      <Text style={styles.teks}>Hello {props.nama}</Text>
      <Text style={styles.teks}>Saat ini usiamu adalah {angka}</Text>
    </View>
  );
}
