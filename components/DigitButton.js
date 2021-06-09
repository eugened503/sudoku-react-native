/* eslint-disable */
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

function DigitButton({item, choiceNumber, finish, errorFlag}) {
  const handleClick = () => {
    choiceNumber(item);
  };

  return (
    <>
      <View>
        <TouchableOpacity onPress={handleClick} disabled={finish || errorFlag}>
          <Text style={styles.textItem}>{item}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  textItem: {
    color: 'white',
    fontSize: 25,
    alignSelf: 'center',
  },
});

export default DigitButton;
