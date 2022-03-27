import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CategoryItem } from './src/components/CategoryItem';
import { Header } from './src/components/Header';
import { Search } from './src/components/Search';

export default function App() {
  return (
    <View >
      <Header/>
      <Search/>
      <CategoryItem/>
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
