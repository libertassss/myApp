import { Component, PropsWithChildren } from 'react'
import { View, Button } from '@tarojs/components'
import './index.less'
import { helth } from '../../server'

export default class Index extends Component<PropsWithChildren> {

  componentWillMount () { }

  componentDidMount () { 
    
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  async login () {
    await helth()
  }

  render () {
    return (
      <View className='index'>
        <Button onClick={this.login}>登录</Button>
      </View>
    )
  }
}
