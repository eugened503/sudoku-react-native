/* eslint-disable */
import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const itemWidth = windowWidth / 12;

import DigitButton from './DigitButton';

function Digit({choiceNumber, finish, errorFlag}) {
  let arrDigit = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const renderItem = ({item, index}) => (
    <View style={styles.item}>
      <DigitButton
        style={styles.textItem}
        choiceNumber={choiceNumber}
        finish={finish}
        errorFlag={errorFlag}
        item={item}
      />
    </View>
  );

  return (
    <>
      <View>
        <FlatList
          contentContainerStyle={styles.grid}
          numColumns={9}
          data={arrDigit}
          renderItem={renderItem}
          keyExtractor={item => item}
          extraData={(choiceNumber, finish, errorFlag)}
        />
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
  grid: {
    padding: 5,
    marginTop: 10,
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
  },
  item: {
    width: itemWidth,
    margin: 2,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#50baf9',
  },
});

export default Digit;
