import * as React from 'react';
import { View, Text } from '@tarojs/components'
import fetchData from '@/service'
import { AtButton, AtInput } from 'taro-ui'

export default class IDCardPage extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      idCard: "",
    }
  }

  IDCardHandleChange = (value) => {
    console.log('value: ', value);
    this.setState({
      idCard: value
    })
  }
  searchIdCard = async () => {
    const { idCard } = this.state;
    const res = await fetchData.post("getLocationByIdCard", { idCard })
    console.log('res: ', res);
  }
  render() {
    return (<View>
      <Text>idCard</Text>
      <View>
        <AtInput
          name='idCard'
          title='idCard'
          type='text'
          placeholder='idCard'
          value={this.state.idCard}
          onChange={this.IDCardHandleChange}
        />
        <AtButton onClick={this.searchIdCard}>查询</AtButton>
      </View>
    </View>)
  }
}