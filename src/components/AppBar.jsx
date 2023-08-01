import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appBar}>
      <View style={styles.appBarInner}>
        <Text style={styles.appBarTitle}>Memo App</Text>
        <Text style={styles.appBarRight}>Log Out</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  /* Header */
  appBar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467FD3',
    justifyContent: 'flex-end',
  },
  appBarInner: {
    alignItems: 'center',
  },
  appBarRight: {
    position: 'absolute',
    right: 19,
    bottom: 8,
    fontSize: 16,
    lineHeight: 24,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  appBarTitle: {
    alignItems: 'center',
    color: '#FFFFFF',
    fontSize: 24,
    marginBottom: 8,
    lineHeight: 32,
  },
});
