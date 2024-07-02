import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 20,
  },
  teks: {
    marginTop: 16,
    paddingVertical: 8, 
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: "lightgrey",
    color: "blue",
    textAlign: "center",
    fontSize: 20,
    height: 50,
    fontWeight: "bold",
  },
  input: {
    paddingVertical: 8, 
    borderWidth: 2,
    borderRadius: 8,
    height: 40,
    backgroundColor: "lightblue",
  },
});

export { styles };
