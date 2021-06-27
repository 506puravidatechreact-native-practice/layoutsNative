import React from 'react';
import {StyleSheet, View, Image, Text, ScrollView} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.banner} source={require('./assets/img/bg.jpg')} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Que hacer en Paris</Text>
        <ScrollView horizontal>
          <View>
            <Image
              style={styles.city}
              source={require('./assets/img/actividad1.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.city}
              source={require('./assets/img/actividad2.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.city}
              source={require('./assets/img/actividad3.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.city}
              source={require('./assets/img/actividad4.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.city}
              source={require('./assets/img/actividad5.jpg')}
            />
          </View>
        </ScrollView>
        <Text style={styles.title}>Los Mejores alojamientos</Text>
        <View>
          <View>
            <Image
              style={styles.bestPlaces}
              source={require('./assets/img/mejores1.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.bestPlaces}
              source={require('./assets/img/mejores2.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.bestPlaces}
              source={require('./assets/img/mejores3.jpg')}
            />
          </View>
        </View>
        <Text style={styles.title}>Hospedaje en los Angeles</Text>
        <View style={styles.list}>
          <View style={styles.itemList}>
            <Image
              style={styles.bestPlaces}
              source={require('./assets/img/hospedaje1.jpg')}
            />
          </View>
          <View style={styles.itemList}>
            <Image
              style={styles.bestPlaces}
              source={require('./assets/img/hospedaje2.jpg')}
            />
          </View>
          <View style={styles.itemList}>
            <Image
              style={styles.bestPlaces}
              source={require('./assets/img/hospedaje3.jpg')}
            />
          </View>
          <View style={styles.itemList}>
            <Image
              style={styles.bestPlaces}
              source={require('./assets/img/hospedaje4.jpg')}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1, // aca se acomoda la imagen porque el flexDirection se cambio
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 20,
  },
  container: {
    marginHorizontal: 10,
  },
  city: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  bestPlaces: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap', // permite que se coloquen en la pantalla
    justifyContent: 'space-between', // al quitarle el 1% al flexbasis se ajusta la separacione entre imagenes
  },
  itemList: {
    flexBasis: '49%', //utilizamos esta propiedad porque el padre tiene una direction row
    // se le quita un 1% como tip del ajuste d eespacio
  },
});

export default App;
