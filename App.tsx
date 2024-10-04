import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {generateColorPalette, Palette} from './util';
import PaletteList from './components/PaletteList';

const App = () => {
  useColorScheme() === 'dark';
  const [palette, setPalette] = useState<Palette>([]);

  useEffect(() => {
    fetchRandomPalette();
  }, []);
  const fetchRandomPalette = () => {
    const fetchedPalette = generateColorPalette();
    fetchedPalette.length === 5 && setPalette(fetchedPalette);
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={fetchRandomPalette}
        style={styles.generateButton}>
        <Text
          style={{
            fontSize: 35,
            fontWeight: '900',
            textAlign: 'center',
            color: 'black',
          }}>
          +
        </Text>
      </TouchableOpacity>
      {palette && <PaletteList palette={palette} />}
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  generateButton: {
    position: 'absolute',
    zIndex: 100,
    bottom: -400,
    right: 20,
    backgroundColor: 'white',
    padding: 5,
    height: 60,
    width: 60,
    borderRadius: 1000,
    shadowColor: 'white',
    shadowRadius: 200,
    shadowOpacity: 100,
    elevation: 200,
    borderWidth: 1,
  },
});
