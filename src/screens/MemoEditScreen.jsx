/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import {
  View, StyleSheet, TextInput, Alert,
} from 'react-native';

import { func, shape, string } from 'prop-types';
import firebase from 'firebase';
import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';
import { translateErrors } from '../utils';
import Loading from '../components/Loading';

export default function MemoEditScreen(props) {
  const { navigation, route } = props;
  const { id, bodyText } = route.params;
  const [body, setBody] = useState(bodyText);
  const [isLoading, setLoading] = useState(false);

  function handlePress() {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      setLoading(true);
      ref.set({
        bodyText: body,
        updatedAt: new Date(),
      }, { merge: true })
        .then(() => {
          navigation.goBack();
        })
        .catch((error) => {
          const errorMsg = translateErrors(error.code);
          Alert.alert(errorMsg.title, errorMsg.description);
        });
    }
  }

  return (
    <KeyboardSafeView style={styles.container}>
      <Loading isLoading={isLoading} />
      <View style={styles.inputContainer}>
        <TextInput
          value={body}
          multiline
          style={styles.input}
          /* テキストを編集する */
          onChangeText={(text) => { setBody(text); }}
        />
      </View>
      <CircleButton name="check" onPress={handlePress} />
    </KeyboardSafeView>
  );
}

/* propTypes */
MemoEditScreen.propTypes = {
  navigation: shape({
    navigate: func,
  }),
  route: shape({
    params: shape({
      id: string,
      bodyText: string,
    }),
  }).isRequired,
};

MemoEditScreen.defaultProps = {
  navigation: {
    navigate: () => {},
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
