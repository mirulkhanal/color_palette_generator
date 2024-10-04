import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Color as ColorType} from '../util';
import Clipboard from '@react-native-clipboard/clipboard';

const Color = ({color}: {color: ColorType}) => {
  const [copyMode, setCopyMode] = useState<'HSL' | 'RGB' | 'HEX' | null>('RGB');
  const [showColorTexts, setShowColorTexts] = useState(false);

  const handleCopyMode = (t: string) => {
    Clipboard.setString(t);
  };

  return (
    <View style={{...styles.container, backgroundColor: color.hex}}>
      <View
        style={{
          alignSelf: 'flex-start',
          justifyContent: 'center',
          marginLeft: 8,
          display: 'flex',
        }}>
        {showColorTexts ? (
          <View
            style={{
              borderColor: 'red',
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity onPress={() => setCopyMode('HSL')}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '900',
                  backgroundColor: 'white',
                  color: 'black',
                  padding: 5,
                  borderRadius: 8,
                  textAlign: 'center',
                }}>
                HSL
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCopyMode('RGB')}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '900',
                  backgroundColor: 'white',
                  color: 'black',
                  padding: 5,
                  borderRadius: 8,
                  textAlign: 'center',
                }}>
                RGB
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCopyMode('HEX')}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '900',
                  backgroundColor: 'white',
                  color: 'black',
                  padding: 5,
                  borderRadius: 8,
                  textAlign: 'center',
                }}>
                HEX
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={() => setShowColorTexts(true)}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '900',
                backgroundColor: 'white',
                color: 'black',
                padding: 5,
                borderRadius: 8,
              }}>
              View color
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={{borderWidth: 0, borderColor: 'white'}}>
        {copyMode === 'HEX' ? (
          <TouchableOpacity onPress={() => handleCopyMode(color.hex)}>
            <Text style={styles.colorText}>HEX</Text>
            <Text style={styles.colorText}>{color.hex}</Text>
          </TouchableOpacity>
        ) : copyMode === 'RGB' ? (
          <TouchableOpacity onPress={() => handleCopyMode(color.rgb)}>
            <Text style={styles.colorText}>RGB</Text>
            <Text style={styles.colorText}>{color.rgb}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => handleCopyMode(color.hsl)}>
            <Text style={styles.colorText}>HSL</Text>
            <Text style={styles.colorText}>{color.hsl}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Color;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '21%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  colorText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '900',
    color: 'white',
  },
});
