'use strict';

import React from 'react-native';
const {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  LinkingIOS
  } = React;


var style = StyleSheet.create({
  rootView: {
    flex: 1
  }
});

import RandomEmoji from './emoji.js';

class FingerSpeed extends Component {
  render() {
    return (
      <View style={style.rootView}>
        <View style={{marginLeft: 15, marginRight: 15, alignItems: 'center', marginTop: 50}}>
          <Text style={{fontSize: 20, marginBottom: 50}}>其实什么设置都没有</Text>
          <View style={{flexDirection: 'row', marginBottom: 30}}>
            <Text style={{fontSize: 17}}>开发者</Text>
            <TouchableOpacity onPress={()=>LinkingIOS.openURL('http://weibo.com/kirinokousaka')}>
              <Text style={{fontSize: 17, color: '#007AFF'}}>@桐乃</Text>
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 17, marginTop: 20}}>使用React Native开发</Text>
          <Text style={{fontSize: 17, marginTop: 50, marginBottom: 5}}>本项目已开源于github</Text>
          <TouchableOpacity onPress={()=>LinkingIOS.openURL('https://github.com/DickyT/FingersOnApp')}>
            <Text style={{fontSize: 17, color: '#007AFF'}}>DickyT/FingersOnApp</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

module.exports = FingerSpeed;