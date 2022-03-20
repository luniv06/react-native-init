import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FlexPractice = () => {
  return (
    <>
      <View style={styles.body}>
        <View style={styles.view1}>
          <Text>1</Text>
        </View>
        <View style={styles.view2}>
          <Text>2</Text>
        </View>
        <View style={styles.view3}>
          <Text>3</Text>
        </View>
      </View>
      <View style={styles.view4}>
        <Text>4</Text>
      </View>
      {/*<View style={styles.view5}>
        <Text>5</Text>
      </View>
      <View style={styles.view6}>
        <Text>6</Text>
      </View>
      <View style={styles.view7}>
        <Text>7</Text>
      </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  view1: {
    flex: 1,
    height: '10%',
    backgroundColor: '#00e4ff',
  },
  view2: {
    flex: 2,
    height: '10%',
    backgroundColor: '#f11af1',
  },
  view3: {
    flex: 3,
    height: '10%',
    backgroundColor: 'yellow',
  },
  view4: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'red',
  },
  view5: {
    backgroundColor: 'green',
  },
  view6: {
    backgroundColor: 'white',
  },
  view7: {
    backgroundColor: 'blue',
  },
});

export default FlexPractice;
