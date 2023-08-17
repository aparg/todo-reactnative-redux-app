import {View, Text, TextInput, Pressable, Image, Alert} from 'react-native';
import {useState, useEffect} from 'react';
import {addTodo, editTodo, setEditMode} from '../../slices/slice';
import {useDispatch} from 'react-redux';
import {nanoid} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';

const TodoInput = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const editMode = useSelector(state => state.todos?.editMode);
  const editId = useSelector(state => state.todos?.editId);
  const todos = useSelector(state => state.todos?.todos);

  useEffect(() => {
    if (editMode) {
      const selectedTodo = todos.find(todo => todo.id === editId);
      const titleValue = selectedTodo.title;
      setTitle(titleValue);
      const descriptionValue = selectedTodo.description;
      setDescription(descriptionValue);
      const selectedImage = selectedTodo.selectedImage;
      setSelectedImage(selectedImage);
    }
  }, [editMode]);

  const handleImagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then(image => {
        setSelectedImage(image.path);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const validation = () => {
    if (!title) {
      Alert.alert('Title is required!');
    } else if (title?.length > 25) {
      Alert.alert("Title can't have more than 25 characters");
    } else if (description?.length > 50) {
      Alert.alert("Description can't have more than 50 characters");
    } else return true;
    return false;
  };

  return (
    <View style={styles.main}>
      <Text style={styles.dataTitle}>Enter your todo task</Text>
      <TextInput
        style={styles.inputBox}
        onChangeText={setTitle}
        placeholder="Add a todo task title"
        value={title}></TextInput>
      <TextInput
        style={styles.inputBox}
        onChangeText={setDescription}
        placeholder="Description(if any)"
        value={description}></TextInput>
      <View style={styles.contentRow}>
        {selectedImage && (
          <Image source={{uri: selectedImage}} height={100} width={100} />
        )}
        <Pressable onPress={handleImagePicker} style={styles.imageAddBtn}>
          <Text style={styles.imageAddBtnTxt}>Insert an image</Text>
        </Pressable>
      </View>
      {editMode ? (
        <Pressable
          onPress={() => {
            if (validation()) {
              dispatch(editTodo({title, description, selectedImage}));
              setTitle('');
              setDescription('');
              setSelectedImage(null);
              console.log(selectedImage);
            }
          }}>
          <Image source={require('../../images/edit-button.png')} />
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            const id = nanoid();
            if (validation()) {
              dispatch(addTodo({id, title, description, selectedImage}));
              setTitle('');
              setDescription('');
              setSelectedImage(null);
            }
          }}>
          <Image source={require('../../images/add-button.png')} />
        </Pressable>
      )}
    </View>
  );
};

const styles = {
  main: {
    alignItems: 'center',
    margin: 10,
  },
  inputBox: {
    margin: 5,
    borderRadius: 15,
    backgroundColor: '#fff',
    padding: 10,
    width: 350,
    fontSize: 20,
  },
  dataTitle: {
    fontSize: 30,
    color: '#fff',
    fontFamily: 'RussoOne-Regular',
  },
  imageAddBtn: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
    margin: 5,
    // alignSelf: 'center',
  },
  imageAddBtnTxt: {
    color: '#6758ad',
  },
  contentRow: {
    display: 'flex',
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },
};

export default TodoInput;
