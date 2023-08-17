/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import {
  View, StyleSheet, TextInput, Alert,
} from 'react-native';

import { func, shape } from 'prop-types';
import firebase from 'firebase';
import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';
import Loading from '../components/Loading';

export default function MemoCreateScreen(props) {
  const { navigation } = props;
  const [bodyText, setBodyText] = useState('');
  const [isLoading, setLoading] = useState(false);

  function handlePress() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const ref = db.collection(`users/${currentUser.uid}/memos`);
    setLoading(true);
    ref.add({
      bodyText,
      updatedAt: new Date(),
    })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => {
        Alert.alert(error.message);
      })
      .then(() => {
        setLoading(false);
      });
  }
  return (
    <KeyboardSafeView style={styles.container}>
      <Loading isLoading={isLoading} />
      <View style={styles.inputContainer}>
        <TextInput
          value={bodyText}
          multiline
          style={styles.input}
          onChangeText={(text) => { setBodyText(text); }}
          autoFocus
        />
      </View>
      <CircleButton name="check" onPress={handlePress} />
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
