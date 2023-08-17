import {View, Pressable, Text, StyleSheet, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {removeTodo, setEditMode} from '../../slices/slice';

const Item = ({id, title, description, selectedImage}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.item}>
      <View style={styles.contentWrapper}>
        <View style={styles.textContent}>
          <Text style={styles.title}> {title}</Text>
          {description && <Text style={styles.desc}> {description}</Text>}
        </View>
        {selectedImage && (
          <Image
            source={{uri: selectedImage}}
            height={100}
            width={100}
            style={styles.imageContent}
          />
        )}
      </View>
      <View style={styles.btnWrapper}>
        <Pressable
          style={styles.delBtnWrapper}
          onPress={() => dispatch(removeTodo(id))}>
          <Image
            source={require('../../images/delete-button.png')}
            style={styles.delBtn}
          />
        </Pressable>

        <Pressable onPress={() => dispatch(setEditMode(id))}>
          <Image
            source={require('../../images/edit-button.png')}
            style={styles.editBtn}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    flexDirection: 'row',
  },
  imageContent: {
    justifyContent: 'flex-end',
    borderRadius: 5,
  },
  textContent: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    color: '#fff',
    fontFamily: 'Satisfy-Regular',
  },
  desc: {fontSize: 15, color: '#fff', fontStyle: 'italic'},
  item: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#6758ad',
    width: 350,
    margin: 5,
  },
  btnWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 5,
  },
  editBtn: {
    width: 30,
    height: 30,
  },
});

export default Item;
