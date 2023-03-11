
import { View } from "@tarojs/components"
import { Component, PropsWithChildren } from "react"
import Elements from "../../components/elements"
import { tags } from "../../constants"
import Layout from '../../components/layout'
import './index.less'


export default class Home extends Component<PropsWithChildren> {

    componentWillMount () { }
  
    componentDidMount () { 
      
    }
  
    componentWillUnmount () { }
  
    componentDidShow () { }
  
    componentDidHide () { }
  
    // async login () {
    //   await helth()
    // }
    getActive (id: number) {
      console.log(id)
    }
  
  
    render () {
      return <Layout>
      <View className='element-list'>
        <View className='element-wrapper'>
          {
            tags.slice(0,4).map((tag: TAG, index: number) => 
              <Elements style={{transform: `translateX(-${index*10}px)`}} key={tag.id} active={this.getActive} tag={tag} />
            )
          }
        </View>
        <View className='element-wrapper'>
          {
            tags.slice(4,8).map((tag: TAG, index: number) => 
              <Elements style={{transform: `translateX(-${index*10}px)`}} key={tag.id} active={this.getActive} tag={tag} />
            )
          }
        </View>
        <View className='element-wrapper'>
          {
            tags.slice(8,12).map((tag: TAG, index: number) => 
              <Elements style={{transform: `translateX(-${index*10}px)`}} key={tag.id} active={this.getActive} tag={tag} />
            )
          }
        </View>
        <View className='element-wrapper'>
          {
            tags.slice(12,17).map((tag: TAG, index: number) => 
              <Elements style={{transform: `translateX(-${index*10}px)`}} key={tag.id} active={this.getActive} tag={tag} />
            )
          }
        </View>
      </View>
    </Layout>
    }
  }
  