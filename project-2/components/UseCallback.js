import React, { useState, useCallback } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from "../assets/style";

const ChildComponent = React.memo(({ increment }) => {
  console.log('ChildComponent di-render');
  return (
    <Button title="Tambah" onPress={increment} />
  );
});

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.teks}>Hitungan: {count}</Text>
      <ChildComponent increment={increment} />
    </View>
  );
};

export default UseCallback;
