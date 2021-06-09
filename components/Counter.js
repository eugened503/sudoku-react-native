/* eslint-disable */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Counter({count}) {
  function calculateTimer(timeInSeconds) {
    let hours = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor((timeInSeconds - hours * 3600) / 60);
    let seconds = timeInSeconds - hours * 3600 - minutes * 60;
    let hoursFormat = hours < 10 ? `0${hours}` : hours;
    let minutesFormat = minutes < 10 ? `0${minutes}` : minutes;
    let secondsFormat = seconds < 10 ? `0${seconds}` : seconds;
    return [hoursFormat, minutesFormat, secondsFormat];
  }

  return (
    <View style={styles.counter}>
      <Text style={styles.item}>{calculateTimer(count)[0]}</Text>
      <Text>:</Text>
      <Text style={styles.item}>{calculateTimer(count)[1]}</Text>
      <Text>:</Text>
      <Text style={styles.item}>{calculateTimer(count)[2]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  counter: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'center',
  },
  item: {
    margin: 0,
  },
});

export default Counter;
