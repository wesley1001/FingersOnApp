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
      isTouching: false,
      lastRecord: false
    };
  }
  touchStart() {
    this.setState({
      isTouching: true,
      lastTouch: new Date().getTime()
    });
  }
  touchEnd() {
    this.setState({
      isTouching: false
    });
    let nowTime = new Date().getTime();
    let rawRecord = nowTime - this.state.lastTouch;
    let tmp = 1000 - rawRecord;
    let tmpPrefix = tmp < 0 ? -1 : 1;
    let currentRecord = Math.abs(tmp)*tmpPrefix;
    console.log(`current record is ${currentRecord}`);
    if (this.state.bestRecord < Math.abs(currentRecord) && this.state.bestRecord) {
      // 继续努力
      this.setState({
        lastRecord: rawRecord
      });
    }
    else {
      this.setState({
        bestRecord: Math.abs(currentRecord),
        lastRecord: rawRecord,
        recordBreak: true
      });
    }
  }
  getStat() {
    if (this.state.lastRecord) {
      let record = 1000 - this.state.lastRecord;
      if (record > 0) {
        return `这次续了${this.state.lastRecord/1000}秒, 你太早松手啦`;
      }
      else if (record < 0) {
        return `这次续了${this.state.lastRecord/1000}秒, 你太迟松手啦`;
      }
      else {
        return `卧槽刚好1秒!!!`;
      }
    }
  }
  getBest() {
    if (this.state.bestRecord > 0) {
      return `提前${Math.abs(this.state.bestRecord/1000)}`;
    }
    else if (this.state.bestRecord < 0) {
      return `迟了${Math.abs(this.state.bestRecord/1000)}`;
    }
    else {
      return `刚好1`;
    }
  }
  render() {
    return (
      <View style={style.rootView}>
        <View style={{marginLeft: 15, marginRight: 15, alignItems: 'center', marginTop: 50}}>
          <Text style={{fontSize: 20}}>按住下面的方块给我蛤续一秒</Text>
          <Text style={{fontSize: 20}}>看看你的续的一秒准不准?</Text>
          <Text style={{marginLeft: 20, marginRight: 20, textAlign: 'center', fontSize: 17, marginTop: 30, height: 20}}>
            {!this.state.bestRecord ? `骚年, 来开始你的第一次吧 ${RandomEmoji()}` : `最高成绩是${this.getBest()}秒 ${RandomEmoji()}`}
          </Text>
        </View>
        <View
          onTouchStart={()=>this.touchStart()}
          onTouchEnd={()=>this.touchEnd()}
          onTouchCancel={()=>this.touchEnd()}
          style={{marginLeft: 30, marginRight: 30, alignItems: 'center', marginTop: 20, backgroundColor: this.state.isTouching ? '#F06292' : '#EC407A', height: 200, borderRadius: 5, justifyContent: 'center'}}>
          <Text style={{color: '#FFFFFF', fontSize: 20, marginBottom: 20}}>{!this.state.isTouching ? `来续1秒 ${RandomEmoji()}` : `长者续命中 ${RandomEmoji()}`}</Text>
        </View>
        <Text style={{marginLeft: 20, marginRight: 20, textAlign: 'center', fontSize: 17, marginTop: 30}}>
          {this.state.lastRecord ? `${this.getStat()} ${RandomEmoji()}` : ``}
        </Text>
      </View>
    );
  }
}

module.exports = FingerSpeed;