import React, { useEffect, useState } from 'react';
import {
  View, StyleSheet, Alert, Text,
} from 'react-native';
import { func, shape } from 'prop-types';
import firebase from 'firebase';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';
import Button from '../components/Button';
import Loading from '../components/Loading';

export default function MemoListScreen(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);
  const [isLoading, setLoading] = useState(false);

  /* HeaderにLogOutボタンを追加 */
  useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => <LogOutButton />,
    });
  }, []);

  /* MemoListsが起動した時の初動設定 */
  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};

    if (currentUser) {
      const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'desc');
      unsubscribe = ref.onSnapshot((snapshot) => {
        setLoading(true);
        const userMemos = [];
        snapshot.forEach((docRef) => {
          const data = docRef.data();
          userMemos.push({
            id: docRef.id,
            bodyText: data.bodyText,
            updatedAt: data.updatedAt.toDate(),
          });
        });
        setMemos(userMemos);
        setLoading(false);
      }, (error) => {
        setLoading(true);
        Alert.alert(error.message);
        setLoading(false);
      });
    }
    return unsubscribe;
  }, []);

  if (memos.length === 0) {
    return (
      <View style={emptyStyles.container}>
        <Loading isLoading={isLoading} />
        <View style={emptyStyles.inner}>
          <Text style={emptyStyles.title}>最初のメモを作成してみよう！</Text>
          <Button label="作成する" style={emptyStyles.button} onPress={() => { navigation.navigate('MemoCreate'); }} />
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <MemoList memos={memos} />
      <CircleButton name="plus" onPress={() => { navigation.navigate('MemoCreate'); }} />
    </View>
  );
}

MemoListScreen.propTypes = {
  navigation: shape({
    navigate: func,
  }),
};

MemoListScreen.defaultProps = {
  navigation: {
    navigate: () => {},
  },
};

const emptyStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    justifyContent: 'center',
    marginBottom: 80,
  },
  title: {
    fontSize: 18,
    marginBottom: 16,
  },
  button: {
    alignSelf: 'center',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
});
