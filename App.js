import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList} from "react-native";
import { CategoryItem } from "./src/components/CategoryItem";
import { Header } from "./src/components/Header";
import { Search } from "./src/components/Search";

export default function App() {
  const commonCategories = [
    {
      name: "Burger",
      imageUrl: require("./src/assets/images/burger.png"),
    },
    {
      name: "Dessert",
      imageUrl: require("./src/assets/images/cake.png"),
    },
    {
      name: "Pasta",
      imageUrl: require("./src/assets/images/pasta.png"),
    },
    {
      name: "Pizza",
      imageUrl: require("./src/assets/images/pizza.png"),
    },
    {
      name: "Smoothies",
      imageUrl: require("./src/assets/images/smoothies.png"),
    },
    {
      name: "Steak",
      imageUrl: require("./src/assets/images/steak.png"),
    },
  ];

  return (
    <View>
      <Header />
      <Search />
      <FlatList
      data={commonCategories}
      renderItem={({item})=> {
        return <CategoryItem name={item.name} imageUrl={item.imageUrl} />
      }}
      horizontal
      showsVerticalScrollIndicator={false}
      keyExtractor={(category) => category.name}
      />

      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
