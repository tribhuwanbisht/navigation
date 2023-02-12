import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useContext, useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import IconButton from "../components/IconButton";
import { FavouritesContext } from "../store/context/favourites-context";
const MealsDetailScreen = ({ route, navigation }) => {
  const favouriteMealCtx = useContext(FavouritesContext);

  const mealID = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealID);
  const mealIsFavourite = favouriteMealCtx.ids.includes(mealID);

  const changeFavouriteStatusHandler = () => {
    if (mealIsFavourite) {
      favouriteMealCtx.removeFavourite(mealID);
    } else {
      favouriteMealCtx.addFavourite(mealID);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavourite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavouriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavouriteStatusHandler]);
  return (
    <ScrollView>
      <View>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{selectedMeal.duration}m</Text>
        <Text style={styles.detailItem}>{selectedMeal.complexity}</Text>
        <Text style={styles.detailItem}>{selectedMeal.affordability}</Text>
      </View>
      <View>
        <Text style={styles.title}>Ingredients</Text>
        {selectedMeal.ingredients.map((ingredient) => (
          <Text key={ingredient} style={styles.item}>
            {ingredient}
          </Text>
        ))}
        <Text style={styles.title}>Steps</Text>
        {selectedMeal.steps.map((step) => (
          <Text key={step} style={styles.item}>
            {step}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default MealsDetailScreen;

const styles = StyleSheet.create({
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
  item: {
    marginHorizontal: 15,
    marginVertical: 4,
    borderRadius: 5,
    padding: 4,
    fontSize: 16,
    textAlign: "center",
    backgroundColor: "#f4ebeb",
    color: "#19927d",
    elevation: 4,
  },
});
