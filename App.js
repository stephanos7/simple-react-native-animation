import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View  style={[styles.halfContainer, {backgroundColor: 'blueviolet', position: "relative"}]}>
          <TouchableOpacity>
            <View style={styles.circle}></View>
          </TouchableOpacity>
        </View>
        <View  style={[styles.halfContainer, {backgroundColor: 'white'}]}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  halfContainer:{
    height: "50%"
  },
  circle:{
    position: "absolute",
    top: 100,
    left: 100,
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 50
  }
});
