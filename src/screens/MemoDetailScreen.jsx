import React from 'react';
import {
  View, Text, StyleSheet, ScrollView,
} from 'react-native';

import { func, shape } from 'prop-types';
import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.MemoHeader}>
        <Text style={styles.MemoTitle}>買い物リスト</Text>
        <Text style={styles.MemoDate}>2020年12月24日 10:00</Text>
      </View>
      <ScrollView style={styles.MemoBody}>
        <Text style={styles.MemoText}>
          買い物リスト書体やレイアウトなどを確認するために用います。本文用なので使い方を間違えると不自然に見えることもありますので要注意
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
