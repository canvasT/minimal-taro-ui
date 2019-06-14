import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface IProps {
  title: string;
}

export default class Button extends Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  render() {
    return (
      <View className="ph-btn">
        <Text>{this.props.title}</Text>
      </View>
    )
  }
}
