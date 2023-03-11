import Taro from "@tarojs/taro"
import { Button, Text } from "@tarojs/components"
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
      <Text className='title'>Welcome</Text>
      <Button className='btn-go' onTap={this.goHome}>Go!</Button>
    </Layout>
  }
}
