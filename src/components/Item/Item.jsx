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
      <View>
        <Text style={styles.desc}>{props.description}</Text>
      </View>
      <Pressable onPress={() => dispatch(removeTodo(props.id))}>
        <Image
          source={require('../../images/delete-button.png')}
          style={styles.delBtn}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {fontSize: 50, color: '#fff'},
  desc: {fontSize: 30, color: '#fff'},
  item: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#6758ad',
    width: 350,
    margin: 5,
  },
  delBtn: {
    alignSelf: 'center',
  },
});

export default Item;
