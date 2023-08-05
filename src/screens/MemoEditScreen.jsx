import React from 'react';
import {
  View, StyleSheet, TextInput, Alert,
} from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

export default function MemoEditScreen() {
  return (
    <KeyboardSafeView style={styles.container}>
      <AppBar />
      <View style={styles.inputContainer}>
        <TextInput value="買い物リスト" multiline style={styles.input} />
      </View>
      <CircleButton name="check" onPress={() => { Alert.alert('world'); }} />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
  },
});
