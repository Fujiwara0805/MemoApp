import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  shape, arrayOf, string, instanceOf,
} from 'prop-types';
import { React } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Alert, FlatList,
} from 'react-native';

export default function MemoList(props) {
  const navigation = useNavigation();
  const { memos } = props;

  function renderItem({ item }) {
    return (
      <View style={styles.memoListItem}>
        <TouchableOpacity onPress={() => { navigation.navigate('MemoDetail'); }}>
          <Text style={styles.memoListTitle} numberOfLines={1}>{item.bodyText}</Text>
          <Text style={styles.memoListDate}>{String(item.updatedAt)}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { Alert.alert('Delete'); }}>
          <Feather name="x" size={24} color="#B0B0B0" style={styles.deleteIcon} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        // eslint-disable-next-line react/jsx-no-bind
        renderItem={renderItem}
        keyExtractor={(item) => (item.id)}
      />
    </View>
  );
}

MemoList.propTypes = {
  memos: arrayOf(
    shape({
      id: string,
      bodyText: string,
      updatedAt: instanceOf(Date),
    }),
  ).isRequired,
};

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
  container: {
    flex: 1,
  },
});
