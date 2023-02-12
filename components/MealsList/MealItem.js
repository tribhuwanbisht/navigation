import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate("MealDetails", {
      mealId: id,
    });
  };

  return (
    <View style={styles.container}>
      <Pressable android_ripple={{ color: "#a4a3a3" }} onPress={pressHandler}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Image source={{ uri: imageUrl }} style={styles.image}></Image>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{duration}m</Text>
          <Text style={styles.detailItem}>{complexity}</Text>
          <Text style={styles.detailItem}>{affordability}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: "#e6e4e4",
    marginVertical: 10,
    overflow: "hidden",
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
    color: "#25646a",
  },
  detailItem: {
    color: "#505657",
    margin: 10,
    fontSize: 14,
  },
  details: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
