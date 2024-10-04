import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Palette as PaletteType} from '../util';
import Color from './Color';

const Palette = ({palette}: {palette: PaletteType}) => {
  return (
    <View style={styles.container}>
      {palette.map(color => (
        <Color color={color} key={color.hsl} />
      ))}
    </View>
  );
};

export default Palette;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '200%',
  },
});
