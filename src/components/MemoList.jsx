import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { React } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Alert,
} from 'react-native';

export default function MemoList() {
  const navigation = useNavigation();
  return (
    <View style={styles.memoListItem}>
      <TouchableOpacity onPress={() => { navigation.navigate('MemoDetail'); }}>
        <Text style={styles.memoListTitle}>買い物リスト</Text>
        <Text style={styles.memoListDate}>2020年12月24日 10:00</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { Alert.alert('Delete'); }}>
        <Feather name="x" size={24} color="#B0B0B0" style={styles.deleteIcon} />
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
  deleteIcon: {
    padding: 8,
  },
});
