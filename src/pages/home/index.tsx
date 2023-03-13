
import { Button, View, Text } from "@tarojs/components"
import {  FC, useState } from "react"
import Elements from "../../components/elements"
import { tags } from "../../constants"
import Layout from '../../components/layout'
import './index.less'
import { TAG } from "../../interface"

const STEP_ONE = 1
const STEP_TOW = 2
const MALE = 0
const FEMALE = 1

const Home: FC = () => {
        const [activeTags, setActiveTags] = useState<Set<number>>(new Set())
        const [step, setStep] = useState<number>(STEP_ONE)
        const [gender, setGender] = useState<0 | 1>(MALE)
        const getActive = (tag: TAG) => {
        if(tag.active){
            activeTags?.add(tag.id)
            return 
        }
        activeTags?.delete(tag.id)
        setActiveTags(activeTags)
        }

        const next = () => {
            if(step === STEP_ONE){
                setStep(STEP_TOW)
                return
            }
        }
        const onCheck = (value: 0 | 1) => {
            setGender(value)
        }
      return <Layout>
        {
            step === STEP_ONE ? <View className='element-list'>
            <View className='element-wrapper'>
              {
                tags.slice(0,4).map((tag: TAG, index: number) => 
                  <Elements style={{transform: `translateX(-${index*10}px)`}} key={tag.id} active={getActive} tag={tag} />
                )
              }
            </View>
            <View className='element-wrapper'>
              {
                tags.slice(4,8).map((tag: TAG, index: number) => 
                  <Elements style={{transform: `translateX(-${index*10}px)`}} key={tag.id} active={getActive} tag={tag} />
                )
              }
            </View>
            <View className='element-wrapper'>
              {
                tags.slice(8,12).map((tag: TAG, index: number) => 
                  <Elements style={{transform: `translateX(-${index*10}px)`}} key={tag.id} active={getActive} tag={tag} />
                )
              }
            </View>
            <View className='element-wrapper'>
              {
                tags.slice(12,17).map((tag: TAG, index: number) => 
                  <Elements style={{transform: `translateX(-${index*10}px)`}} key={tag.id} active={getActive} tag={tag} />
                )
              }
            </View>
          </View> : <View style={{width: '100%'}}>
              <Text className='title'>请选择性别</Text>
              <View className='iconfont-wrapper'>
                <View className={`icon-container ${gender === MALE && 'active-gender'}`} onTap={() => onCheck(MALE)}>
                    <View className='iconfont icon-nan'></View>
                    <Text className='desc'>男</Text>
                </View>
                <View className={`icon-container ${gender === FEMALE && 'active-gender'}`} onTap={() => onCheck(FEMALE)}>
                    <View className='iconfont icon-nv'></View>
                    <Text className='desc'>女</Text>
                </View>
              </View>
          </View>
        }    
      <Button className='next-btn' onTap={next}>下一步</Button>
    </Layout>
  }

  export default Home
  