import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { render } from 'react-dom'

export default class Main extends Component{
    render(){
        return (
            <View>
                <Text>Página Main</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(163, 202, 162)',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });