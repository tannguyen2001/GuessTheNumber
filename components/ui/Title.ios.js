import { Text, StyleSheet, Platform } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});

export default Title;
