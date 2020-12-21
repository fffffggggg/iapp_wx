import React from 'react';
import { AtButton, AtTabBar } from 'taro-ui'

import './index.scss';

interface IState {
  current: number,
  tabList: Array<any>
}

interface IProps {
  [name: string]: any
}


export default class FooterBar extends React.Component<IProps, IState> {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      tabList: [
        { title: '首页', iconType: 'home' },
        { title: '功能', iconType: 'folder' },
        { title: '用户', iconType: 'user', }
      ]
    }
  }
  handleClick = (val) => {
    this.setState({
      current: val
    });
    if (typeof this.props.handler == 'function') {
      this.props.handler(val);
    }
  }
  render() {

    return (
      <AtTabBar
        fixed
        tabList={this.state.tabList}
        onClick={this.handleClick}
        current={this.state.current}
      />
    )
  }
}