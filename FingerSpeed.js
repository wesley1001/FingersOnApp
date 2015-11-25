'use strict';

import React from 'react-native';
const {
  Component,
  StyleSheet,
  Text,
  View
  } = React;


var style = StyleSheet.create({
  rootView: {
    flex: 1
  }
});

import RandomEmoji from './emoji.js';

class FingerSpeed extends Component {
  constructor() {
    super();
    this.state = {
      lastTouch: false,
      bestRecord: false,
      recordBreak: false,
      lastRecord: false
    };
  }
  touchStart() {
    if (!this.state.lastTouch) {
      this.setState({
        lastTouch: new Date().getTime(),
        recordBreak: false
      });
    }
    else {
      let nowTime = new Date().getTime();
      let currentRecord = nowTime - this.state.lastTouch;
      if (this.state.bestRecord < currentRecord && this.state.bestRecord) {
        // 继续努力
        this.setState({
          lastTouch: false,
          lastRecord: currentRecord
        });
      }
      else {
        this.setState({
          lastTouch: false,
          bestRecord: currentRecord,
          recordBreak: true,
          lastRecord: currentRecord
        });
      }
    }
  }
  render() {
    return (
      <View style={style.rootView}>
        <View style={{marginLeft: 15, marginRight: 15, alignItems: 'center', marginTop: 50}}>
          <Text style={{fontSize: 20}}>用最快的速度左右手敲击屏幕</Text>
          <Text style={{fontSize: 20}}>你能有多快?</Text>
          <Text style={{marginLeft: 20, marginRight: 20, textAlign: 'center', fontSize: 17, marginTop: 30, height: 20}}>
            {!this.state.bestRecord ? `` : `这次按了${this.state.lastRecord}毫秒 ${RandomEmoji()}`}
          </Text>
        </View>
        <View
          onTouchStart={()=>this.touchStart()}
          style={{marginLeft: 30, marginRight: 30, alignItems: 'center', marginTop: 20, backgroundColor: '#EC407A', height: 200, borderRadius: 5, justifyContent: 'center'}}>
          <Text style={{color: '#FFFFFF', fontSize: 20, marginBottom: 20}}>来戳我吧 {RandomEmoji()}</Text>
          <Text style={{color: '#FFFFFF', fontSize: 20, height: 40}}>{this.state.recordBreak ? `打得不♂错`: ''}</Text>
        </View>
        <Text style={{marginLeft: 20, marginRight: 20, textAlign: 'center', fontSize: 17, marginTop: 30}}>
          {!this.state.bestRecord ? `来开始你的第一次吧 ${RandomEmoji()}` : `最高成绩是${this.state.bestRecord}毫秒 ${RandomEmoji()}`}
        </Text>
      </View>
    );
  }
}

module.exports = FingerSpeed;