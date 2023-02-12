import { Text, View, StyleSheet } from "react-native";
import { useContext } from "react";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
import { FavouritesContext } from "../store/context/favourites-context";

const FavouritesScreen = () => {
  const favouriteMealCtx = useContext(FavouritesContext);

  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealCtx.ids.includes(meal.id)
  );
  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no favourite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favouriteMeals} />;
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
