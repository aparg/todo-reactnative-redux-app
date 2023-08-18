import {
  FlatList,
  ScrollView,
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';
import Item from '../Item/Item';
import {useSelector, useDispatch} from 'react-redux';
import {deleteAll} from '../../slices/slice';

const ItemList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos?.todos);
  const renderItem = ({item}) => {
    return (
      <Item
        id={item.id}
        title={item.title}
        description={item.description}
        selectedImage={item.selectedImage}
        key={item.id}
      />
    );
  };
  return (
    <>
      {todos.length !== 0 && (
        <Pressable
          onPress={() => dispatch(deleteAll())}
          style={styles.deleteAllBtn}>
          <Text style={styles.deleteAllBtnTxt}>Delete All</Text>
        </Pressable>
      )}
      <FlatList renderItem={renderItem} data={todos} />
    </>
  );
};

const styles = StyleSheet.create({
  deleteAllBtn: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
    margin: 5,
    alignSelf: 'flex-end',
  },
  deleteAllBtnTxt: {
    color: '#6758ad',
  },
});

export default ItemList;
