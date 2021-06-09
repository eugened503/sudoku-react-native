/* eslint-disable */
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

function Item({
  item,
  number,
  selectArr,
  setIndexArr,
  error,
  finish,
  errorFlag,
  load,
}) {
  const handleClick = () => {
    setIndexArr(number);
  };

  let idStyle;

  for (let i = 0; i < selectArr.length; i++) {
    if (selectArr[i] === number) {
      idStyle = styles.itemSelect;
    }
  }

  for (let i = 0; i < error.length; i++) {
    if (error[i] === number && load) {
      idStyle = styles.itemTransparent;
    }
  }

  for (let i = 0; i < error.length; i++) {
    if (error[i] === number && !load) {
      idStyle = styles.itemError;
    }
  }

  return (
    <>
      <View>
        <TouchableOpacity onPress={handleClick} disabled={finish || errorFlag}>
          <Text style={[styles.itemDefault, idStyle]}>{item}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  itemSelect: {
    textAlign: 'center',
    color: 'black',
    fontSize: 25,
    alignSelf: 'center',
    backgroundColor: '#50baf9',
  },

  itemTransparent: {
    color: 'transparent',
    fontSize: 25,
    alignSelf: 'center',
  },

  itemError: {
    color: 'red',
    fontSize: 25,
    alignSelf: 'center',
  },

  itemDefault: {
    color: 'transparent',
    fontSize: 25,
    alignSelf: 'center',
  },

  textDisabled: {
    display: 'none',
  },
});

export default Item;
