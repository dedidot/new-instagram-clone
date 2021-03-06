import React, { Component } from 'react';
import { View , Text, StyleSheet, Image } from 'react-native';

export default class CircleStory extends Component {

  render(){
    const { uri, name } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <View style={styles.wraperImage}>
            <Image style={styles.image} source={{ uri }}/>
          </View>
        </View>
        <Text style={styles.title}>{name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: '#e0e0e0'
  },
  containerImage: {
    height: 69,
    width: 69,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    margin: 10,
    backgroundColor: '#c12184'
  },
  wraperImage: {
    height: 65,
    width: 65,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 40,
  },
  image: {
    height: 65,
    width: 65,
    borderRadius: 40,
  },
  title: {
    alignSelf: 'center'
  }
})