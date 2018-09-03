import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';

export default class App extends React.Component {
  state = {
    height: new Animated.Value(300),
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1),
  }

  animateHeight = () => {
    const {height} = this.state
    Animated.timing(
      height,
      {
        toValue: 0,
        duration: 500
      }
    )
  }

  animateScale = () => {
    const {scale,opacity} = this.state;
    Animated.timing(
      opacity,
      {
        toValue: 0,
        duration: 100
      }
    ).start();
    Animated.spring(
      scale,
      {
        toValue: 15,
        velocity: 75,
        tension:30,
        duration: 500
      }
    ).start();
  }

  render() {   
    const {height,scale,opacity} = this.state;

    return (
      <View style={styles.container}>
        <Animated.View  style={{backgroundColor: 'blueviolet', position: "relative", height}}>
          <TouchableOpacity onPress={this.animateScale}>
            <Animated.View style={[{transform:[{scale:scale}]}, styles.circle]}>
              <Animated.Text style={{opacity}}>12</Animated.Text>
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
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
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 100,
    left: 100,
    backgroundColor: "white",
    width:50,
    height:50,
    borderRadius: 50
  },
  value:{
    color: "blueviolet"
  }
});
