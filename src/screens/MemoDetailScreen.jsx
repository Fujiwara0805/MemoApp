import React, { useEffect, useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView,
} from 'react-native';
import firebase from 'firebase';
import { func, shape, string } from 'prop-types';
import CircleButton from '../components/CircleButton';
import { dateToString } from '../utils/index';

export default function MemoDetailScreen(props) {
  const { navigation, route } = props;
  const { id } = route.params;
  const [memo, setMemo] = useState(null);

  useEffect(() => {
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      unsubscribe = ref.onSnapshot((doc) => {
        const data = doc.data();
        setMemo({
          id: data.id,
          bodyText: data.bodyText,
          updatedAt: data.updatedAt.toDate(),
        });
      });
    }
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.MemoHeader}>
        <Text style={styles.MemoTitle} numberOfLines={1}>{memo && memo.bodyText}</Text>
        <Text style={styles.MemoDate}>{memo && dateToString(memo.updatedAt)}</Text>
      </View>
      <ScrollView style={styles.MemoBody}>
        <Text style={styles.MemoText}>
          {memo && memo.bodyText}
        </Text>
      </ScrollView>
      <CircleButton
        style={{ top: 60, bottom: 'auto' }}
        name="edit-2"
        onPress={() => { navigation.navigate('MemoEdit'); }}
      />
    </View>
  );
}

MemoDetailScreen.propTypes = {
  navigation: shape({
    navigate: func,
  }),
  route: shape({
    params: shape({
      id: string,
    }),
  }).isRequired,
};

MemoDetailScreen.defaultProps = {
  navigation: {
    navigate: () => {},
  },
};

/* style */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  /* MemoHeader */
  MemoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  MemoTitle: {
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  MemoDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#FFFFFF',
  },

  /* MemoBody */
  MemoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  MemoText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#000000',
  },
});
