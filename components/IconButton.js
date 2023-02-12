import { View, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const IconButton = ({ icon, color, onPress }) => {
  return (
    <View>
      <Pressable
        android_ripple={{ color: "#040303" }}
        //   style={({ pressed }) => pressed && styles.pressed}
      >
        <Ionicons
          onPress={onPress}
          name={icon}
          size={24}
          color={color}
        ></Ionicons>
      </Pressable>
    </View>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
