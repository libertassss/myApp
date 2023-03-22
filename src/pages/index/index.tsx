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
        <Text className='desc'>
          
        </Text>
        <Button className='btn-go' onTap={this.goHome}>去取名</Button>
      </View>
    </Layout>
  }
}
