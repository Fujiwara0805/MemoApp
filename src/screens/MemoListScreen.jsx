import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { func, shape } from 'prop-types';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => <LogOutButton />,
    });
  }, []);
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
