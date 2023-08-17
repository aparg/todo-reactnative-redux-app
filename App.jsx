import {SafeAreaView, StyleSheet, View} from 'react-native';
import ItemList from './src/components/ItemList/ItemList';

import TodoInput from './src/components/TodoInput/TodoInput';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <TodoInput />
        <ItemList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#a399ff',
    height: '100%',
    alignItems: 'center',
  },
});

export default App;
