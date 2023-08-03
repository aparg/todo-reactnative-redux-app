import {View, Text, TextInput, Pressable, Image} from 'react-native';
import {useState} from 'react';
import {addTodo} from '../../slices/slice';
import {useDispatch} from 'react-redux';
import {nanoid} from '@reduxjs/toolkit';

const TodoInput = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
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

      <Pressable
        onPress={() => {
          const id = nanoid();
          dispatch(addTodo({id, title, description}));
          setTitle('');
          setDescription('');
        }}>
        <Image source={require('../../images/add-button-1.png')} />
      </Pressable>
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
};

export default TodoInput;
