import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetailScreen from "./screens/MealsDetailScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import { Ionicons } from "@expo/vector-icons";
import FavouritesContextProvider from "./store/context/favourites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#37a097",
        },
        headerTintColor: "#ffffff",
        sceneContainerStyle: { backgroundColor: "#b6dedb" },
        drawerContentStyle: { backgroundColor: "#deeff1" },
        drawerInactiveTintColor: "#3e3f3f",
        drawerActiveTintColor: "#2fbfc6",
        // drawerActiveBackgroundColor:"#ffffff"
      }}
    >
      <Drawer.Screen
        name="categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size}></Ionicons>
          ),
        }}
      />
      <Drawer.Screen
        name="favourites"
        component={FavouritesScreen}
        options={{
          title: "Favourites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size}></Ionicons>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <FavouritesContextProvider>
        <View style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: "#37a097",
                },
                headerTintColor: "#ffffff",
                contentStyle: { backgroundColor: "#b6dedb" },
              }}
            >
              <Stack.Screen
                name="Drawer"
                component={DrawerNavigator}
                options={{
                  // title: "Meals Categories",
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="MealsOverview"
                component={MealsOverviewScreen}
              />

              <Stack.Screen
                name="MealDetails"
                component={MealsDetailScreen}
                options={{ title: "About the Meal" }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </FavouritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 10,
    // padding: 20,
  },
});
