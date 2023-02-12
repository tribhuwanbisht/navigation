import { Text, Pressable, View, StyleSheet, Platform } from "react-native";

const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Pressable
        style={styles.button}
        android_ripple={{ color: "#fdfafa" }}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    borderRadius: 8,
    backgroundColor: "white",
    margin: 10,
    elevation: 10,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
