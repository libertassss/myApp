import Taro from "@tarojs/taro"
import { Button, Text, View } from "@tarojs/components"
import { Component, PropsWithChildren } from 'react'
import './index.less'
import { helth } from '../../server'
import Layout from '../../components/layout'




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
  getActive (id: number) {
    console.log(id)
  }

  goHome () {
    Taro.navigateTo({
      url: '../home/index'
    })
  }


  render () {
    return <Layout>
      <View className='content'>
        <View className='icon' />
        <Text className='title'>Welcome</Text>
        <Text className='desc'>名字也许只是个代号</Text>
        <Button className='btn-go' onTap={this.goHome}>Go!</Button>
      </View>
    </Layout>
  }
}
