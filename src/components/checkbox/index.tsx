import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import "@minimal-taro-ui/base-style"
import classnames from 'classnames'

interface IProps {
  title: string;
}

export default class Checkbox extends Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  render() {
    return (
      <View className="ph-checkbox">
        <Text>{this.props.title}</Text>
      </View>
    )
  }
}
