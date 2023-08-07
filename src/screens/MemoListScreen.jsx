import React from 'react';
import { View, StyleSheet } from 'react-native';
import { func, shape } from 'prop-types';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <MemoList />
      <MemoList />
      <MemoList />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
});
