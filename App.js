import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';

export default class App extends React.Component {
  state = {
    height: new Animated.Value(300),
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1),
  }
  orchestration = () => {
    Animated.sequence([this.animateHeight(),this.animateScale()])
  }

  animateHeight = () => {
    const {height} = this.state
    Animated.timing(
      height,
      {
        toValue: 900,
        duration:500
      }
    ).start()
  }

  animateScale = () => {
    const {scale,opacity} = this.state;
    Animated.timing(
      opacity,
      {
        toValue: 0,
        duration:100
      }
    ).start();
    Animated.spring(
      scale,
      {
        toValue:20,
        tension:30,
        duration:2000
      }
    ).start();
  }
  
  render() {   
    const {height,scale,opacity} = this.state;

    return (
      <View style={styles.container}>
        <Animated.View style={{backgroundColor: 'blueviolet', position: "relative", height}}>
          <TouchableOpacity onPress={this.orchestration}>
            <Animated.View style={[{transform:[{scale:scale}]}, styles.circle]}>
              <Animated.Text style={{opacity}}>12</Animated.Text>
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
        <View  style={{backgroundColor: 'white'}}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
