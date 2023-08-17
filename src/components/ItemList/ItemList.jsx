import {FlatList, ScrollView} from 'react-native';
import Item from '../Item/Item';
import {useSelector} from 'react-redux';

const ItemList = () => {
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
  return <FlatList renderItem={renderItem} data={todos} />;
};

export default ItemList;
