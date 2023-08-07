import React from 'react';
import {
  View, StyleSheet, TextInput,
} from 'react-native';

import { func, shape } from 'prop-types';
import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

export default function MemoCreateScreen(props) {
  const { navigation } = props;
  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </View>
      <CircleButton name="check" onPress={() => { navigation.goBack(); }} />
    </KeyboardSafeView>
  );
}

MemoCreateScreen.propTypes = {
  navigation: shape({
    navigation: func,
  }),
};

MemoCreateScreen.defaultProps = {
  navigation: {
    navigation: () => {},
  },
};

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
