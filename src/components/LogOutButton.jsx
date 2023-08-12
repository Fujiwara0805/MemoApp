import React from 'react';
import {
  Text, TouchableOpacity, StyleSheet, Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';

export default function LogOutButton() {
  const navigation = useNavigation();
  function handlePress() {
    firebase.auth().signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'LogIn' }],
        });
      })
      .catch(() => {
        Alert.alert('エラーが発生しました');
      });
  }
  return (
    // eslint-disable-next-line react/jsx-no-bind
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.label}>Log Out</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },

  label: {
    fontSize: 12,
    lineHeight: 24,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});
