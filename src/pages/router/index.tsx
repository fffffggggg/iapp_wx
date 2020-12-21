import * as React from 'react';
import { View, Text } from '@tarojs/components'
import UserPage from '../user'

interface IProps {
  current: number | string
}

interface IState {
  pagesMap: {
    [name: number]: string | React.ReactComponentElement<any, any>
  }
}

export default class RouterComponent extends React.Component<IProps, IState> {

  constructor(props) {
    super(props);
    this.state = {
      // 页面组件的map
      pagesMap: {
        0: "home",
        1: "feature",
        2: <UserPage />
      }
    }
  }

  renderPages = () => {
    return this.state.pagesMap[this.props.current]
  }

  render() {
    const { current } = this.props;
    return (<View>
      {this.renderPages()}
    </View>)
  }

}