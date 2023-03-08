import { Component, PropsWithChildren } from 'react'
import { View, Button } from '@tarojs/components'
import './index.less'

export default class Index extends Component<PropsWithChildren> {

  componentWillMount () { }

  componentDidMount () { 
    
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  login () {
    
  }

  render () {
    return (
      <View className='index'>
        <Button onClick={this.login}>登录</Button>
      </View>
    )
  }
}
