import React from 'react';
import {StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box4} />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: 'cornflowerblue',
    flex: 1,
    //flexDirection: 'column', //default
    
    //flexDirection: 'column-reverse',

    // la alineacion default no es igual que en reactJS
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    //En este forma cambiamos el axis por eso 
    //debemos alinear verticalmente con justifyContent
    //flexDirection: 'column',
    //justifyContent: 'center',

  },
  box1: {
    backgroundColor: 'navy',
    padding: 15,
  },
  box2: {
    backgroundColor: 'yellow',
    padding: 15,
  },
  box3: {
    backgroundColor: 'green',
    padding: 15,
  },
  box4: {
    backgroundColor: 'teal',
    padding: 15,
  },
});

export default App;
