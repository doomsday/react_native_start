import React, {Component} from 'react';
import {View} from 'react-native';

export default class FlexDirectionBasics extends Component {
  render() {
    return (
        // Try setting `flexDirection` to `row`.
        // Try setting `justifyContent` to `center`.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}