import {SafeAreaView, StyleSheet, View} from 'react-native';
import ItemList from './src/components/ItemList/ItemList';
import {Provider} from 'react-redux';
import todosStore from './src/store/store';
import TodoInput from './src/components/TodoInput/TodoInput';
import {PersistGate} from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';

const App = () => {
  let persistor = persistStore(todosStore);
  return (
    <SafeAreaView>
      <Provider store={todosStore}>
        <PersistGate persistor={persistor}>
          <View style={styles.main}>
            <TodoInput />
            <ItemList />
          </View>
        </PersistGate>
      </Provider>
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
