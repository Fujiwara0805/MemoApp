import { Feather } from '@expo/vector-icons';
import { React } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';

export default function MemoList() {
  return (
    <View style={styles.memoListItem}>
      <View>
        <Text style={styles.memoListTitle}>買い物リスト</Text>
        <Text style={styles.memoListDate}>2020年12月24日 10:00</Text>
      </View>
      <TouchableOpacity>
        <Feather name="x" size={16} color="B0B0B0" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  /* memo lists */
  memoListItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memoListTitle: {
    fontSize: 16,
    lineHeight: 32,
    color: '#000000',
  },
  memoListDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
});
