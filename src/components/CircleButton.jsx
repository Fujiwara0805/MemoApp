import { React } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { string, shape, func } from 'prop-types';
import { Feather } from '@expo/vector-icons';

export default function CircleButton(props) {
  const { style, name, onPress } = props;
  return (
    <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
      <Feather name={name} size={32} color="white" />
    </TouchableOpacity>
  );
}

CircleButton.propTypes = {
  style: shape(),
  name: string.isRequired,
  onPress: func,
};

CircleButton.defaultProps = {
  style: null,
  onPress: null,
};

const styles = StyleSheet.create({
  /* circle Botton */
  circleButton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  circleLabel: {
    color: '#FFFFFF',
    fontSize: 40,
    lineHeight: 40,
  },
});
