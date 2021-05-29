import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const itemWidth = windowWidth / 12;

const Grid = () => {
  const zero = [...Array(81)].map((e, i) => i + 1);
  const [leadArr, setLeadArr] = useState(zero); //основной массив
  let matrix = []; //общая матрица

  function shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    // пока остаются элементы для перетасовки....
    while (0 !== currentIndex) {
      // выбираем оставшийся элемент...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // меняем его местами с текущим элементом.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  function getRandomArray(k) {
    let arr = [];
    for (let i = 1; i < k; i++) arr.push(i);
    shuffle(arr);
    return arr;
  }

  function returnArray(mass, k) {
    for (let i = 0; i < k; i++) {
      mass.unshift(mass.pop());
    }
    // меняем столбцы местами
    [mass[0], mass[3]] = [mass[3], mass[0]];
    [mass[3], mass[4]] = [mass[4], mass[3]];
    [mass[6], mass[7]] = [mass[7], mass[6]];
    [mass[7], mass[8]] = [mass[8], mass[7]];
    return mass;
  }

  function getMatrix(mass, num) {
    matrix.push(returnArray(mass, num));
    matrix = matrix.reduce(function (a, b) {
      return a.concat(b);
    }, []);
    setLeadArr(matrix);
  }

  function createArray() {
    let firstArr = getRandomArray(10); //[1, 2, 3, 4, 5, 6, 7, 8, 9];
    let secondArr = firstArr.slice(); //[4, 5, 6, 7, 8, 9, 1, 2, 3]
    let thirdArr = firstArr.slice(); //[7, 8, 9, 1, 2, 3, 4, 5, 6]
    let fourthArr = firstArr.slice(); //[2, 3, 4, 5, 6, 7, 8, 9, 1]
    let fifthArr = firstArr.slice(); //[5, 6, 7, 8, 9, 1, 2, 3, 4]
    let sixthArr = firstArr.slice(); //[8, 9, 1, 2, 3, 4, 5, 6, 7]
    let seventhArr = firstArr.slice(); //[3, 4, 5, 6, 7, 8, 9, 1, 2]
    let eighthArr = firstArr.slice(); //[6, 7, 8, 9, 1, 2, 3, 4, 5]
    let ninthArr = firstArr.slice(); //[9, 1, 2, 3, 4, 5, 6, 7, 8]
    getMatrix(thirdArr, 3);
    getMatrix(firstArr, 0);
    getMatrix(secondArr, 6);
    getMatrix(fifthArr, 5);
    getMatrix(sixthArr, 2);
    getMatrix(fourthArr, 8);
    getMatrix(eighthArr, 4);
    getMatrix(seventhArr, 7);
    getMatrix(ninthArr, 1);
  }

  const renderItem = ({item}) => (
    <View style={s.item}>
      <Text style={s.textItem}>{item}</Text>
    </View>
  );

  return (
    <SafeAreaView style={s.container}>
      <View style={s.header}>
        <Text style={s.text}>Судоку</Text>
      </View>
      <FlatList
        contentContainerStyle={s.grid}
        numColumns={9}
        data={leadArr}
        renderItem={renderItem}
        keyExtractor={item => item}
      />
      <TouchableOpacity style={s.btn} onPress={createArray}>
        <Text>Старт</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'flex-start',
  },
  header: {
    height: 65,
    backgroundColor: 'black',
  },

  text: {
    paddingTop: 12,
    color: 'white',
    fontSize: 25,
    alignSelf: 'center',
  },
  textItem: {
    color: 'white',
    fontSize: 25,
    alignSelf: 'center',
  },
  grid: {
    padding: 5,
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'green',
  },
  item: {
    width: itemWidth,
    margin: 3,
    borderWidth: 2,
    borderColor: '#800080',
  },
  btn: {
    marginTop: 20,
    backgroundColor: '#50baf9',
    height: 50,
    alignSelf: 'center',
    width: windowWidth / 3,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Grid;
