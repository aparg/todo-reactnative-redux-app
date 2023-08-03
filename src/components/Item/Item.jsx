import {useState} from 'react';
import {View, Pressable, Text, StyleSheet, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {removeTodo} from '../../slices/slice';

const Item = props => {
  const dispatch = useDispatch();
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      {props.description && (
        <Text style={styles.desc}>{props.description}</Text>
      )}

      <Pressable
        style={styles.delBtnWrapper}
        onPress={() => dispatch(removeTodo(props.id))}>
        <Image
          source={require('../../images/delete-button.png')}
          style={styles.delBtn}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
  delBtnWrapper: {
    alignSelf: 'center',
  },
  delBtn: {
    alignSelf: 'center',
  },
});

export default Item;
